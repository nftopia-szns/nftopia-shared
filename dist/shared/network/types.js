"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonChainId = exports.SolanaChainId = exports.BSCChainId = exports.EthereumChainId = exports.Network = void 0;
var Network;
(function (Network) {
    Network["Ethereum"] = "ethereum";
    Network["BSC"] = "bsc";
    Network["Solana"] = "solana";
    Network["Polygon"] = "polygon";
})(Network = exports.Network || (exports.Network = {}));
var EthereumChainId;
(function (EthereumChainId) {
    EthereumChainId["Mainnet"] = "mainnet";
    EthereumChainId["Ropsten"] = "ropsten";
    EthereumChainId["Rinkeby"] = "rinkeby";
    EthereumChainId["Goerli"] = "goerli";
})(EthereumChainId = exports.EthereumChainId || (exports.EthereumChainId = {}));
var BSCChainId;
(function (BSCChainId) {
    BSCChainId["Mainnet"] = "mainnet";
    BSCChainId["Testnet"] = "testnet";
})(BSCChainId = exports.BSCChainId || (exports.BSCChainId = {}));
var SolanaChainId;
(function (SolanaChainId) {
    SolanaChainId["Mainnet"] = "mainnet";
    SolanaChainId["Testnet"] = "testnet";
})(SolanaChainId = exports.SolanaChainId || (exports.SolanaChainId = {}));
var PolygonChainId;
(function (PolygonChainId) {
    PolygonChainId["Mainnet"] = "mainnet";
    PolygonChainId["Mumbai"] = "mumbai";
})(PolygonChainId = exports.PolygonChainId || (exports.PolygonChainId = {}));
//# sourceMappingURL=types.js.map