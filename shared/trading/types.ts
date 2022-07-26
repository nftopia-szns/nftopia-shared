import { Network, ChainId } from "../network"
import { MetaversePlatform } from "../platform"
import { AskStatus, BidStatus } from "../graphql";

export interface GetAssetParams {
    platform: MetaversePlatform
    network: Network
    chainId: ChainId
    address: string
    tokenId: string
}

export interface GetAssetBids extends GetAssetParams {
    page: number
    pageSize: number
    filter: GetAssetBidsFilter
}

export interface GetAssetBidsFilter {
    status: BidStatus[]
}

export interface GetAssetAsks extends GetAssetParams {
    page: number
    pageSize: number
    filter: GetAssetAsksFilter
}

export interface GetAssetAsksFilter {
    status: AskStatus[]
}

export interface GetAssetBids extends GetAssetParams {
    page: number
    pageSize: number
}

export interface GetAssetAsks extends GetAssetParams {
    page: number
    pageSize: number
}


// export enum BidStatus {
//     New = "New",
//     Cancelled = "Cancelled",
//     Accepted = "Accepted",
// }

// export enum AskStatus {
//     New = "New",
//     Cancelled = "Cancelled",
//     Accepted = "Accepted",
// }

// export interface Token {
//     id: string
//     address: string
//     owner: string
//     createdAt: BigNumber
//     updatedAt: BigNumber
// }

// export interface Ask {
//     id: string
//     address: string
//     tokenId: string
//     seller: string
//     quoteToken: string
//     price: BigNumber
//     createdAt: BigNumber
//     updatedAt: BigNumber
//     status: AskStatus
//     buyer?: string
// }

// export interface Bid {
//     id: string
//     address: string
//     tokenId: string
//     bidder: string
//     quoteToken: string
//     price: BigNumber
//     createdAt: BigNumber
//     updatedAt: BigNumber
//     status: BidStatus
// }