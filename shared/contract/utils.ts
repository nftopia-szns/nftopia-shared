import { Network, PolygonChainId } from "../network";
import { ContractType } from "./types";

export const ContractInfo = {
    [ContractType.Marketplace]: {
        [Network.Polygon]: {
            [PolygonChainId.Mumbai]: "0x2126D335beD68B8083f2D0Aa99cCA08DF487CAa2"
        }
    }
}
