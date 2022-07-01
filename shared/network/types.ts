export enum ChainId {
    Ethereum = "ethereum",
    BSC = "bsc",
    Solana = "solana",
}

export enum EthereumNetwork {
    Mainnet = "mainnet",
    Ropsten = "ropsten",
}

export enum BSCNetwork {
    Mainnet = 'mainnet',
}

export enum SolanaNetwork {
    Mainnet = 'mainnet',
    Testnet = 'testnet',
}

export type Network = EthereumNetwork | BSCNetwork | SolanaNetwork