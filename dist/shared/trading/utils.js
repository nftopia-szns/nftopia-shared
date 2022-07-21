"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarketplaceContractAddress = void 0;
const network_1 = require("../network");
const getMarketplaceContractAddress = (network, chainId) => {
    let mpAddr = "";
    switch (network) {
        case network_1.Network.Polygon:
            switch (chainId) {
                case network_1.PolygonChainId.Mumbai:
                    mpAddr = "0x2126D335beD68B8083f2D0Aa99cCA08DF487CAa2";
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    if (mpAddr) {
        return mpAddr;
    }
    else {
        throw new Error(`Marketplace is not available on: ${network}, ${chainId}`);
    }
};
exports.getMarketplaceContractAddress = getMarketplaceContractAddress;
//# sourceMappingURL=utils.js.map