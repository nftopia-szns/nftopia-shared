import { BSCChainId, EthereumChainId } from "./types";

export const toCanonicalEthereumChainId = (chainId: EthereumChainId) => {
    switch (chainId) {
        case EthereumChainId.Mainnet:
            return 1;
        case EthereumChainId.Ropsten:
            return 3;
        case EthereumChainId.Rinkeby:
            return 4;
        case EthereumChainId.Goerli:
            return 5;
        default:
            return 1;
    }
}

export const toCanonicalBSCChainId = (chainId: BSCChainId) => {
    switch (chainId) {
        case BSCChainId.Mainnet:
            return 56;
        case BSCChainId.Testnet:
            return 97;
        default:
            return 56;
    }
}