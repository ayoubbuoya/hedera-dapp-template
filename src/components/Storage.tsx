import { useEffect, useState } from "react";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { contractABI, contractAddress } from "../lib/contract";
import type { Hash } from "viem";

export const Storage = () => {
  const [name, setName] = useState<string>("");
  const [hash, setHash] = useState<Hash | undefined>(undefined);

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

  const { writeContractAsync } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  useEffect(() => {
    if (isConfirmed) {
      setHash(undefined);
      // Refetch the name after confirmation
      alert("Transaction confirmed!");
    }
  }, [isConfirmed]);

  const handleSetName = async () => {
    if (!isConnected) return;

    try {
      const tx = await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "setName",
        args: [name],
      });
      console.log("Transaction hash:", tx);
      setHash(tx);
      setName("");
    } catch (error) {
      console.error("Error setting name:", error);
      setHash(undefined);
    }
  };

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

        <div>
          <div>
            <input
              className="border border-gray-400 rounded px-2 py-1 mt-4 w-full"
              type="text"
              placeholder="Enter new name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 disabled:opacity-50 w-full"
              disabled={!name || !isConnected || name === ""}
              onClick={handleSetName}
            >
              Set Name
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
