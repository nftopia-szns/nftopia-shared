export enum BlockchainNetwork {
    Ethereum = "BlockchainNetwork.Ethereum",
    BSC = "BlockchainNetwork.BSC",
    Solana = "BlockchainNetwork.Solana",
}

export enum EthereumChainId {
    Mainnet = "EthereumChainId.Mainnet",
    Ropsten = "EthereumChainId.Ropsten",
}

export enum BSCChainId {
    Mainnet = 'BSCChainId.Mainnet',
}

export enum SolanaChainId {
    Mainnet = 'SolanaChainId.Mainnet',
    Testnet = 'SolanaChainId.Testnet',
}

export type ChainId = EthereumChainId | BSCChainId | SolanaChainId