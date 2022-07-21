"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCanonicalPolygonChainId = exports.toCanonicalBSCChainId = exports.toCanonicalEthereumChainId = void 0;
const types_1 = require("./types");
const toCanonicalEthereumChainId = (chainId) => {
    switch (chainId) {
        case types_1.EthereumChainId.Mainnet:
            return 1;
        case types_1.EthereumChainId.Ropsten:
            return 3;
        case types_1.EthereumChainId.Rinkeby:
            return 4;
        case types_1.EthereumChainId.Goerli:
            return 5;
        default:
            return 1;
    }
};
exports.toCanonicalEthereumChainId = toCanonicalEthereumChainId;
const toCanonicalBSCChainId = (chainId) => {
    switch (chainId) {
        case types_1.BSCChainId.Mainnet:
            return 56;
        case types_1.BSCChainId.Testnet:
            return 97;
        default:
            return 56;
    }
};
exports.toCanonicalBSCChainId = toCanonicalBSCChainId;
const toCanonicalPolygonChainId = (chainId) => {
    switch (chainId) {
        case types_1.PolygonChainId.Mainnet:
            return 137;
        case types_1.PolygonChainId.Mumbai:
            return 80001;
        default:
            return 137;
    }
};
exports.toCanonicalPolygonChainId = toCanonicalPolygonChainId;
//# sourceMappingURL=utils.js.map