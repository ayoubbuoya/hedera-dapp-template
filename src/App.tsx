import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Storage } from "./components/Storage";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-200 w-full h-full">
        <header className="py-3 px-6 bg-gray-300 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hedera Template Dapp</h1>
          <ConnectButton />
        </header>

        <div className="py-3 px-6 w-[25%] mx-auto mt-[10%]">
          <Storage />
        </div>
      </div>
    </>
  );
}

export default App;
