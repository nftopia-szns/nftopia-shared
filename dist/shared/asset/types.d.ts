import { Network, ChainId } from "../network/types";
import { MetaversePlatform } from "../platform/types";
import { CrytovoxelsAssetDto } from "./cryptovoxels";
import { DecentralandAssetDto } from "./decentraland";
import { SolanaTownAssetDto } from "./solanatown";
import { TheSandBoxAssetDto } from "./thesandbox";
export declare type BaseAssetDto = {
    platform: MetaversePlatform;
    network: Network;
    chain_id: ChainId;
    contract_address?: string;
    id: string;
    name: string;
    description: string;
    owner: string;
    image: string;
    external_url: string;
};
export declare type GenericAssetDto = DecentralandAssetDto | TheSandBoxAssetDto | CrytovoxelsAssetDto | SolanaTownAssetDto;
//# sourceMappingURL=types.d.ts.map