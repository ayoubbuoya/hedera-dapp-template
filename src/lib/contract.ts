export const contractAddress = "0x3445137539C41B4339F633983ABaE9e62b4FE5C6";

export const contractABI = [
  {
    type: "function",
    name: "getName",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setName",
    inputs: [{ name: "name", type: "string", internalType: "string" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
];
