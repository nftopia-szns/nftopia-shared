import { Network, PolygonChainId } from "../network";
import { ContractType } from "./types";

export const ContractInfo = {
    [ContractType.Marketplace]: {
        [Network.Polygon]: {
            [PolygonChainId.Mumbai]: "0x2126D335beD68B8083f2D0Aa99cCA08DF487CAa2"
        }
    },
    [ContractType.TestERC20]: {
        [Network.Polygon]: {
            [PolygonChainId.Mumbai]: "0xa57E4B76F7821E3b0851E5800c2d5cF690A452f7"
        }
    },
    [ContractType.TestWETH]: {
        [Network.Polygon]: {
            [PolygonChainId.Mumbai]: "0x33CCcd1029D9D90E365Bccf5806a0a0b792cEb61"
        }
    },
}
