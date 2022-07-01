"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaNetwork = exports.BSCNetwork = exports.EthereumNetwork = exports.ChainId = void 0;
var ChainId;
(function (ChainId) {
    ChainId["Ethereum"] = "ethereum";
    ChainId["BSC"] = "bsc";
    ChainId["Solana"] = "solana";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
var EthereumNetwork;
(function (EthereumNetwork) {
    EthereumNetwork["Mainnet"] = "mainnet";
    EthereumNetwork["Ropsten"] = "ropsten";
})(EthereumNetwork = exports.EthereumNetwork || (exports.EthereumNetwork = {}));
var BSCNetwork;
(function (BSCNetwork) {
    BSCNetwork["Mainnet"] = "mainnet";
})(BSCNetwork = exports.BSCNetwork || (exports.BSCNetwork = {}));
var SolanaNetwork;
(function (SolanaNetwork) {
    SolanaNetwork["Mainnet"] = "mainnet";
    SolanaNetwork["Testnet"] = "testnet";
})(SolanaNetwork = exports.SolanaNetwork || (exports.SolanaNetwork = {}));
//# sourceMappingURL=types.js.map