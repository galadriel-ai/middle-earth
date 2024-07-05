import { BrowserProvider, Contract, ethers, TransactionReceipt } from 'ethers';
import { GameId } from '../aiTown/ids';
import { ABI } from '../constants';

export interface ChatMessage {
  content: string;
  role: ChatRole;
  transactionHash?: string;
}

export type ChatRole = 'assistant' | 'user' | 'system';

export async function getAgentResponse(
  contractAddress: string,
  conversationId: GameId<'conversations'>,
  conversationLength: number,
  timeout: number = 30000, // 30 seconds timeout by default
): Promise<string | null> {
  if (!process.env.CONTRACT_ADDRESS) {
    throw new Error('CONTRACT_ADDRESS environment variable not set');
  }
  const network = {
    chainId: 696969,
    name: 'Galadriel Devnet',
  };
  const provider = new ethers.JsonRpcProvider('https://devnet.galadriel.com', network);
  const contract = new Contract(contractAddress, ABI, provider);

  const startTime = Date.now();

  const checkMessages = async (): Promise<string | null> => {
    const newMessages: ChatMessage[] = await getNewMessages(
      contract,
      conversationId,
      conversationLength,
    );

    console.log('New messages of conversation ', conversationId, newMessages);
    if (newMessages) {
      const lastMessage = newMessages.at(-1);
      if (lastMessage && lastMessage.role === 'assistant') {
        return lastMessage.content;
      }
    }
    return null;
  };

  while (Date.now() - startTime < timeout) {
    const response = await checkMessages();
    if (response) {
      return response;
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log('Timeout waiting for agent response on conversation', conversationId);
  return null;
}

async function getNewMessages(
  contract: Contract,
  conversationId: string,
  currentMessagesCount: number,
): Promise<ChatMessage[]> {
  console.log('Getting new messages for ', conversationId, currentMessagesCount);
  const messages = await contract['getMessageHistory(string)'](conversationId);

  const newMessages: ChatMessage[] = [];
  messages.forEach((message: any, i: number) => {
    if (i >= currentMessagesCount) {
      newMessages.push({
        role: messages[i].role,
        content: messages[i].content[0][1],
      });
    }
  });
  return newMessages;
}
