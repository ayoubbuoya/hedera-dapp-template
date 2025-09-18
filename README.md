# 🚀 Hedera dApp Template

A complete full-stack template for building decentralized applications on the Hedera network. Perfect for hackathons, prototypes, and production dApps!

## 🌟 Features

- **Frontend**: React 19 + TypeScript + Vite for lightning-fast development
- **Smart Contracts**: Solidity contracts with Foundry for testing and deployment
- **Wallet Integration**: RainbowKit with support for MetaMask, WalletConnect, and more
- **Hedera Network**: Pre-configured for both Hedera Testnet and Mainnet
- **Modern UI**: TailwindCSS for beautiful, responsive designs
- **Type Safety**: Full TypeScript support across the stack
- **Testing**: Comprehensive test setup for both frontend and contracts

## 🏗️ What's Included

### Frontend Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Wagmi** for Ethereum/Hedera interactions
- **RainbowKit** for wallet connections
- **TailwindCSS** for styling
- **React Query** for data fetching
- **React Toastify** for notifications

### Smart Contract Stack

- **Foundry** for Solidity development
- **Forge** for testing and deployment
- Pre-configured for Hedera networks
- Example contracts (Storage, Counter)

### Example dApp

- **Storage Contract**: Demonstrates reading/writing to blockchain
- **Wallet Connection**: Connect with popular wallets
- **Transaction Handling**: Send transactions with proper error handling
- **Real-time Updates**: Automatic UI updates after transactions

## 🚀 Quick Start for Hedera Hackathon

### Prerequisites

- Node.js 18+ and npm
- [Foundry](https://book.getfoundry.sh/getting-started/installation) for smart contracts

### 1. Clone and Setup

```bash
git clone https://github.com/ayoubbuoya/hedera-dapp-template
cd hedera-dapp-template
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Required for wallet connections
VITE_WALLET_CONNECT_PROJECT_ID="your_wallet_connect_project_id"
```

**Get your WalletConnect Project ID:**

1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Create a new project
3. Copy your Project ID

### 3. Install Contract Dependencies

```bash
cd contracts
forge install
cd ..
```

### 4. Start Development

```bash
# Start the frontend development server
npm run dev
```

Your dApp will be available at `http://localhost:5173`

## 🔧 Development Workflow

### Frontend Development

```bash
# Start development server
npm run dev

# Build for production
npm run build:frontend

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Smart Contract Development

```bash
# Build contracts
npm run build:contracts
# or
cd contracts && forge build

# Run tests
npm run test:contracts
# or
cd contracts && forge test

# Deploy to Hedera Testnet
npm run deploy:storage
```

## 📝 Smart Contract Deployment

### Deploy Your Contracts to Hedera

1. **Set up your environment variables** in `.env.local`:

```bash
PRIVATE_KEY="your_private_key_here"
```

2. **Deploy the Storage contract**:

```bash
npm run deploy:storage
```

3. **Update the contract address** in `src/lib/contract.ts`:

```typescript
export const contractAddress = "0xYourNewContractAddress";
```

### Hedera Network Configuration

The template is pre-configured for Hedera networks:

- **Testnet**: `https://testnet.hashio.io/api`
- **Mainnet**: `https://mainnet.hashio.io/api`

## 🎯 Building Your Hackathon Project

### 1. Customize the Smart Contracts

Replace or modify the example contracts in `contracts/src/`:

- `Storage.sol` - Simple key-value storage
- `Counter.sol` - Basic counter contract

### 2. Update the Frontend

Modify the React components in `src/components/`:

- `Storage.tsx` - Example contract interaction component

### 3. Add New Features

The template provides a solid foundation. Consider adding:

- **NFT minting and trading**
- **DeFi protocols** (lending, swapping)
- **Gaming mechanics**
- **Social features**
- **DAO governance**

### 4. Styling and UI

Customize the design using TailwindCSS classes or add your own CSS.

## 🧪 Testing

### Frontend Testing

```bash
# Add your preferred testing framework
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

### Smart Contract Testing

```bash
cd contracts
forge test

# Run specific test
forge test --match-test testSetName

# Run with gas reporting
forge test --gas-report
```

## 📚 Key Files to Understand

### Frontend

- `src/App.tsx` - Main application component
- `src/lib/wagmi.ts` - Wallet and network configuration
- `src/lib/contract.ts` - Contract ABI and address
- `src/components/Storage.tsx` - Example contract interaction

### Smart Contracts

- `contracts/src/Storage.sol` - Example storage contract
- `contracts/script/Storage.s.sol` - Deployment script
- `contracts/test/Storage.t.sol` - Contract tests
- `contracts/foundry.toml` - Foundry configuration

## 🌐 Hedera Network Information

### Testnet

- **RPC URL**: `https://testnet.hashio.io/api`
- **Chain ID**: 296
- **Explorer**: [HashScan Testnet](https://hashscan.io/testnet)
- **Faucet**: [Hedera Portal](https://portal.hedera.com/faucet)

### Mainnet

- **RPC URL**: `https://mainnet.hashio.io/api`
- **Chain ID**: 295
- **Explorer**: [HashScan Mainnet](https://hashscan.io/mainnet)

## 🎨 Customization Tips

### Adding New Contracts

1. Create your contract in `contracts/src/YourContract.sol`
2. Write tests in `contracts/test/YourContract.t.sol`
3. Create deployment script in `contracts/script/YourContract.s.sol`
4. Add the contract ABI and address to `src/lib/contract.ts`
5. Create React components to interact with your contract

### Wallet Configuration

Modify `src/lib/wagmi.ts` to add or remove wallet options:

```typescript
const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      rainbowWallet,
      metaMaskWallet,
      // Add more wallets here
    ],
  },
]);
```

## 🤝 Contributing

This template is designed to be a starting point. Feel free to:

- Add new features
- Improve documentation
- Submit bug fixes
- Share your hackathon projects built with this template

## 🆘 Need Help?

- **Hedera Documentation**: [docs.hedera.com](https://docs.hedera.com)
- **Hedera Developer Portal**: [portal.hedera.com](https://portal.hedera.com)
- **Hedera AI Assistant**: [hedera-hivemind-gpt](https://chatgpt.com/g/g-TuVHDmAdq-hedera-hivemind)
- **Foundry Book**: [book.getfoundry.sh](https://book.getfoundry.sh)
- **Wagmi Documentation**: [wagmi.sh](https://wagmi.sh)
- **RainbowKit Documentation**: [rainbowkit.com](https://rainbowkit.com)

---

**Happy Hacking! 🎉**
