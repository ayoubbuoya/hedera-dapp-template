import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-200 w-full ">
        <header className="py-3 px-6 bg-gray-300 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hedera Template Dapp</h1>
          <ConnectButton />
        </header>

        <div className="py-3 px-6 flex justify-between items-center max-w-full">

        </div>
      </div>
    </>
  );
}

export default App;
