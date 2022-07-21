export enum Network {
    Ethereum = "ethereum",
    BSC = "bsc",
    Solana = "solana",
    Polygon = "polygon",
}

export enum EthereumChainId {
    Mainnet = "mainnet",
    Ropsten = "ropsten",
    Rinkeby = "rinkeby",
    Goerli = "goerli",
}

export enum BSCChainId {
    Mainnet = 'mainnet',
    Testnet = 'testnet',
}

export enum SolanaChainId {
    Mainnet = 'mainnet',
    Testnet = 'testnet',
}

export enum PolygonChainId {
    Mainnet = 'mainnet',
    Mumbai = 'mumbai'
}

export type ChainId = EthereumChainId | BSCChainId | SolanaChainId | PolygonChainId