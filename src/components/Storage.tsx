import { useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { contractABI, contractAddress } from "../lib/contract";

export const Storage = () => {
  const [name, setName] = useState<string>("");

  const { address, isConnected } = useAccount();

  // Read name from contract and set it to blockchainName
  const {
    data: nameFromContract,
    error: readError,
    isPending: isReadPending,
  } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getName",
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  return (
    <div className="h-full min-h-20 py-8 px-8 border border-gray-400 rounded bg-slate-200 ">
      <div>
        <div className="flex items-center justify-around gap-5 w-full">
          <h1 className="text-2xl font-bold text-gray-800">Current Name:</h1>
          <p className="text-xl text-gray-600 font-semibold">
            {!isConnected
              ? "Connect your wallet to see your name"
              : isReadPending
              ? "Fetching Name..."
              : readError
              ? "Error fetching name cause of " + readError?.message
              : nameFromContract?.toString() === ""
              ? "No name set"
              : nameFromContract?.toString()}
          </p>
        </div>
      </div>
    </div>
  );
};
