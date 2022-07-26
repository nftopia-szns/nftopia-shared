import { Network, ChainId } from "../network";
import { MetaversePlatform } from "../platform";
import { AskStatus, BidStatus } from "../graphql";
export interface GetAssetParams {
    platform: MetaversePlatform;
    network: Network;
    chainId: ChainId;
    address: string;
    tokenId: string;
}
export interface GetAssetBids extends GetAssetParams {
    page: number;
    pageSize: number;
    filter: GetAssetBidsFilter;
}
export interface GetAssetBidsFilter {
    status: BidStatus[];
}
export interface GetAssetAsks extends GetAssetParams {
    page: number;
    pageSize: number;
    filter: GetAssetAsksFilter;
}
export interface GetAssetAsksFilter {
    status: AskStatus[];
}
export interface GetAssetBids extends GetAssetParams {
    page: number;
    pageSize: number;
}
export interface GetAssetAsks extends GetAssetParams {
    page: number;
    pageSize: number;
}
//# sourceMappingURL=types.d.ts.map