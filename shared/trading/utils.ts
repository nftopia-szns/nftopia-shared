import { ChainId, Network, PolygonChainId } from "../network";

export const getMarketplaceContractAddress = (network: Network, chainId: ChainId): string => {
    let mpAddr = ""

    switch (network) {
        case Network.Polygon:
            switch (chainId) {
                case PolygonChainId.Mumbai:
                    mpAddr = "0x2126D335beD68B8083f2D0Aa99cCA08DF487CAa2"
                    break;
                default:
                    break;
            }
            break;

        default:
            break;
    }

    if (mpAddr) {
        return mpAddr
    } else {
        throw new Error(`Marketplace is not available on: ${network}, ${chainId}`);
    }
}