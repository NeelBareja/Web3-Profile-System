# Web3 Profile System

A decentralized profile management system built with Scaffold-ETH 2, enabling users to create, manage, and showcase their Web3 identities.

## 🏗 Built with Scaffold-ETH 2

This project is built using [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2), an advanced development stack for building decentralized applications. Scaffold-ETH 2 provides a robust foundation with:

- Next.js for the frontend
- Hardhat for smart contract development
- TypeScript for type safety
- Tailwind CSS for styling
- Ethers.js for Ethereum interactions
- RainbowKit for wallet connections
- The Graph for indexing

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.18.3
- Yarn >= 3.2.3
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Web3-Profile-System
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development environment:
```bash
yarn start
```

## 📦 Project Structure

The project follows a monorepo structure with two main packages:

### `packages/nextjs`
- Frontend application built with Next.js
- Components and UI elements
- Web3 integration and hooks
- API routes and services

### `packages/hardhat`
- Smart contract development environment
- Contract deployment scripts
- Testing suite
- TypeChain type definitions

## 🛠 Available Scripts

### Development
- `yarn start` - Start the Next.js development server
- `yarn chain` - Start a local Hardhat node
- `yarn compile` - Compile smart contracts
- `yarn deploy` - Deploy smart contracts
- `yarn test` - Run smart contract tests

### Code Quality
- `yarn format` - Format code with Prettier
- `yarn lint` - Run ESLint
- `yarn check-types` - Check TypeScript types

### Deployment
- `yarn vercel` - Deploy to Vercel
- `yarn hardhat:verify` - Verify contracts on Etherscan

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory with the following variables:
```
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
```

### Network Configuration
The project supports multiple networks:
- Local development (Hardhat)
- Sepolia testnet
- Mainnet

## 📝 Smart Contracts

The project includes the following smart contracts:
- ProfileManager.sol - Manages user profiles and metadata
- ProfileRegistry.sol - Handles profile registration and ownership
- ProfileVerification.sol - Manages profile verification and badges

## 🎨 Frontend Features

- Modern, responsive UI built with Tailwind CSS
- Wallet connection with RainbowKit
- Profile creation and management
- On-chain data visualization
- IPFS integration for metadata storage

## 🔐 Security

- Smart contracts are thoroughly tested
- Access control mechanisms implemented
- Secure metadata storage on IPFS
- Input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2) for the development stack
- [OpenZeppelin](https://openzeppelin.com/) for smart contract libraries
- [RainbowKit](https://www.rainbowkit.com/) for wallet connection
- [The Graph](https://thegraph.com/) for indexing

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.
