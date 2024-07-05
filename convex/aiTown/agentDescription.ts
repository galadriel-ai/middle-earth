import { ObjectType, v } from 'convex/values';
import { GameId, agentId, parseGameId } from './ids';

export class AgentDescription {
  agentId: GameId<'agents'>;
  identity: string;
  plan: string;
  contract: string;

  constructor(serialized: SerializedAgentDescription) {
    const { agentId, identity, plan, contract } = serialized;
    this.agentId = parseGameId('agents', agentId);
    this.identity = identity;
    this.plan = plan;
    this.contract = contract;
  }

  serialize(): SerializedAgentDescription {
    const { agentId, identity, plan, contract } = this;
    return { agentId, identity, plan, contract };
  }
}

export const serializedAgentDescription = {
  agentId,
  identity: v.string(),
  plan: v.string(),
  contract: v.string(),
};
export type SerializedAgentDescription = ObjectType<typeof serializedAgentDescription>;
