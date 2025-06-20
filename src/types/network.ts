export const ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'initialOracleAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'chatId',
        type: 'uint256',
      },
    ],
    name: 'ChatCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newOracleAddress',
        type: 'address',
      },
    ],
    name: 'OracleAddressUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'conversationId',
        type: 'string',
      },
    ],
    name: 'addMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'chatRuns',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'messagesCount',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'conversationIdToChatRun',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'chatId',
        type: 'uint256',
      },
    ],
    name: 'getMessageHistory',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'role',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'contentType',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'value',
                type: 'string',
              },
            ],
            internalType: 'struct IOracle.Content[]',
            name: 'content',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IOracle.Message[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'conversationId',
        type: 'string',
      },
    ],
    name: 'getMessageHistory',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'role',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'contentType',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'value',
                type: 'string',
              },
            ],
            internalType: 'struct IOracle.Content[]',
            name: 'content',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IOracle.Message[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'runId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'response',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'onOracleLlmResponse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oracleAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOracleAddress',
        type: 'address',
      },
    ],
    name: 'setOracleAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'conversationId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'systemPrompt',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'startChat',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
