import { ChainId, BlockchainNetwork } from "../network/types";
import { MetaversePlatform } from "../platform/types";
export declare type GenericAssetDto = {
    platform: MetaversePlatform;
    network: BlockchainNetwork;
    chain_id: ChainId;
    contract_address?: string;
    id: string;
    name: string;
    description: string;
    owner: string;
    image: string;
    external_url: string;
};
//# sourceMappingURL=types.d.ts.map