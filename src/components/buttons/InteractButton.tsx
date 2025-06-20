import Button from './Button';
import { toast } from 'react-toastify';
import interactImg from '../../../assets/interact.svg';
import { useConvex, useMutation, useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { ConvexError } from 'convex/values';
import { Id } from '../../../convex/_generated/dataModel';
import { useCallback } from 'react';
import { waitForInput } from '../../hooks/sendInput';
import { useServerGame } from '../../hooks/serverGame';
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react';

export default function InteractButton() {
  const { open } = useWeb3Modal();
  const { address } = useWeb3ModalAccount();

  const worldStatus = useQuery(api.world.defaultWorldStatus);
  const worldId = worldStatus?.worldId;
  const game = useServerGame(worldId);
  const humanTokenIdentifier = address ? address : 'skip';
  const userPlayerId =
    game && [...game.world.players.values()].find((p) => p.human === humanTokenIdentifier)?.id;
  const join = useMutation(api.world.joinWorld);
  const leave = useMutation(api.world.leaveWorld);
  const isPlaying = !!userPlayerId;

  const convex = useConvex();
  const joinInput = useCallback(
    async (worldId: Id<'worlds'>, address: string) => {
      let inputId;
      try {
        inputId = await join({ worldId, address });
      } catch (e: any) {
        if (e instanceof ConvexError) {
          toast.error(e.data);
          return;
        }
        throw e;
      }
      try {
        await waitForInput(convex, inputId);
      } catch (e: any) {
        toast.error(e.message);
      }
    },
    [convex],
  );

  const joinOrLeaveGame = () => {
    if (!worldId || !address || game === undefined) {
      return;
    }
    if (isPlaying) {
      console.log(`Leaving game for player ${userPlayerId}`);
      void leave({ worldId, address });
    } else {
      console.log(`Joining game`);
      void joinInput(worldId, address);
    }
  };
  if (!address || game === undefined) {
    return (
      <Button imgUrl={interactImg} onClick={() => open()}>
        Connect Wallet
      </Button>
    );
  }
  return (
    <Button imgUrl={interactImg} onClick={joinOrLeaveGame}>
      {isPlaying ? 'Leave' : 'Interact'}
    </Button>
  );
}
