"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInfo = void 0;
const network_1 = require("../network");
const types_1 = require("./types");
exports.ContractInfo = {
    [types_1.ContractType.Marketplace]: {
        [network_1.Network.Polygon]: {
            [network_1.PolygonChainId.Mumbai]: "0x2126D335beD68B8083f2D0Aa99cCA08DF487CAa2"
        }
    },
    [types_1.ContractType.TestERC20]: {
        [network_1.Network.Polygon]: {
            [network_1.PolygonChainId.Mumbai]: "0xa57E4B76F7821E3b0851E5800c2d5cF690A452f7"
        }
    },
    [types_1.ContractType.TestWETH]: {
        [network_1.Network.Polygon]: {
            [network_1.PolygonChainId.Mumbai]: "0x33CCcd1029D9D90E365Bccf5806a0a0b792cEb61"
        }
    },
};
//# sourceMappingURL=utils.js.map