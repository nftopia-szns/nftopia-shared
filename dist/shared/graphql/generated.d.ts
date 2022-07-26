import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
};
export declare type Ask = {
    __typename?: 'Ask';
    address: Scalars['Bytes'];
    buyer?: Maybe<Scalars['Bytes']>;
    createdAt: Scalars['BigInt'];
    id: Scalars['String'];
    price: Scalars['BigInt'];
    quoteToken: Scalars['Bytes'];
    seller: Scalars['Bytes'];
    status: AskStatus;
    tokenId: Scalars['BigInt'];
    updatedAt: Scalars['BigInt'];
};
export declare enum AskStatus {
    Accepted = "Accepted",
    Cancelled = "Cancelled",
    New = "New"
}
export declare type Ask_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['Bytes']>;
    address_contains?: InputMaybe<Scalars['Bytes']>;
    address_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_not?: InputMaybe<Scalars['Bytes']>;
    address_not_contains?: InputMaybe<Scalars['Bytes']>;
    address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    buyer?: InputMaybe<Scalars['Bytes']>;
    buyer_contains?: InputMaybe<Scalars['Bytes']>;
    buyer_in?: InputMaybe<Array<Scalars['Bytes']>>;
    buyer_not?: InputMaybe<Scalars['Bytes']>;
    buyer_not_contains?: InputMaybe<Scalars['Bytes']>;
    buyer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    createdAt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gte?: InputMaybe<Scalars['BigInt']>;
    createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt_lt?: InputMaybe<Scalars['BigInt']>;
    createdAt_lte?: InputMaybe<Scalars['BigInt']>;
    createdAt_not?: InputMaybe<Scalars['BigInt']>;
    createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['String']>;
    id_contains?: InputMaybe<Scalars['String']>;
    id_contains_nocase?: InputMaybe<Scalars['String']>;
    id_ends_with?: InputMaybe<Scalars['String']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']>;
    id_gt?: InputMaybe<Scalars['String']>;
    id_gte?: InputMaybe<Scalars['String']>;
    id_in?: InputMaybe<Array<Scalars['String']>>;
    id_lt?: InputMaybe<Scalars['String']>;
    id_lte?: InputMaybe<Scalars['String']>;
    id_not?: InputMaybe<Scalars['String']>;
    id_not_contains?: InputMaybe<Scalars['String']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']>;
    id_not_ends_with?: InputMaybe<Scalars['String']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    id_not_in?: InputMaybe<Array<Scalars['String']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id_starts_with?: InputMaybe<Scalars['String']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']>;
    price?: InputMaybe<Scalars['BigInt']>;
    price_gt?: InputMaybe<Scalars['BigInt']>;
    price_gte?: InputMaybe<Scalars['BigInt']>;
    price_in?: InputMaybe<Array<Scalars['BigInt']>>;
    price_lt?: InputMaybe<Scalars['BigInt']>;
    price_lte?: InputMaybe<Scalars['BigInt']>;
    price_not?: InputMaybe<Scalars['BigInt']>;
    price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    quoteToken?: InputMaybe<Scalars['Bytes']>;
    quoteToken_contains?: InputMaybe<Scalars['Bytes']>;
    quoteToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
    quoteToken_not?: InputMaybe<Scalars['Bytes']>;
    quoteToken_not_contains?: InputMaybe<Scalars['Bytes']>;
    quoteToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    seller?: InputMaybe<Scalars['Bytes']>;
    seller_contains?: InputMaybe<Scalars['Bytes']>;
    seller_in?: InputMaybe<Array<Scalars['Bytes']>>;
    seller_not?: InputMaybe<Scalars['Bytes']>;
    seller_not_contains?: InputMaybe<Scalars['Bytes']>;
    seller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    status?: InputMaybe<AskStatus>;
    status_in?: InputMaybe<Array<AskStatus>>;
    status_not?: InputMaybe<AskStatus>;
    status_not_in?: InputMaybe<Array<AskStatus>>;
    tokenId?: InputMaybe<Scalars['BigInt']>;
    tokenId_gt?: InputMaybe<Scalars['BigInt']>;
    tokenId_gte?: InputMaybe<Scalars['BigInt']>;
    tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tokenId_lt?: InputMaybe<Scalars['BigInt']>;
    tokenId_lte?: InputMaybe<Scalars['BigInt']>;
    tokenId_not?: InputMaybe<Scalars['BigInt']>;
    tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum Ask_OrderBy {
    Address = "address",
    Buyer = "buyer",
    CreatedAt = "createdAt",
    Id = "id",
    Price = "price",
    QuoteToken = "quoteToken",
    Seller = "seller",
    Status = "status",
    TokenId = "tokenId",
    UpdatedAt = "updatedAt"
}
export declare type Bid = {
    __typename?: 'Bid';
    address: Scalars['Bytes'];
    bidder: Scalars['Bytes'];
    createdAt: Scalars['BigInt'];
    id: Scalars['String'];
    price: Scalars['BigInt'];
    quoteToken: Scalars['Bytes'];
    status: BidStatus;
    tokenId: Scalars['BigInt'];
    updatedAt: Scalars['BigInt'];
};
export declare enum BidStatus {
    Accepted = "Accepted",
    Cancelled = "Cancelled",
    New = "New"
}
export declare type Bid_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['Bytes']>;
    address_contains?: InputMaybe<Scalars['Bytes']>;
    address_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_not?: InputMaybe<Scalars['Bytes']>;
    address_not_contains?: InputMaybe<Scalars['Bytes']>;
    address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    bidder?: InputMaybe<Scalars['Bytes']>;
    bidder_contains?: InputMaybe<Scalars['Bytes']>;
    bidder_in?: InputMaybe<Array<Scalars['Bytes']>>;
    bidder_not?: InputMaybe<Scalars['Bytes']>;
    bidder_not_contains?: InputMaybe<Scalars['Bytes']>;
    bidder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    createdAt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gte?: InputMaybe<Scalars['BigInt']>;
    createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt_lt?: InputMaybe<Scalars['BigInt']>;
    createdAt_lte?: InputMaybe<Scalars['BigInt']>;
    createdAt_not?: InputMaybe<Scalars['BigInt']>;
    createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['String']>;
    id_contains?: InputMaybe<Scalars['String']>;
    id_contains_nocase?: InputMaybe<Scalars['String']>;
    id_ends_with?: InputMaybe<Scalars['String']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']>;
    id_gt?: InputMaybe<Scalars['String']>;
    id_gte?: InputMaybe<Scalars['String']>;
    id_in?: InputMaybe<Array<Scalars['String']>>;
    id_lt?: InputMaybe<Scalars['String']>;
    id_lte?: InputMaybe<Scalars['String']>;
    id_not?: InputMaybe<Scalars['String']>;
    id_not_contains?: InputMaybe<Scalars['String']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']>;
    id_not_ends_with?: InputMaybe<Scalars['String']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    id_not_in?: InputMaybe<Array<Scalars['String']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id_starts_with?: InputMaybe<Scalars['String']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']>;
    price?: InputMaybe<Scalars['BigInt']>;
    price_gt?: InputMaybe<Scalars['BigInt']>;
    price_gte?: InputMaybe<Scalars['BigInt']>;
    price_in?: InputMaybe<Array<Scalars['BigInt']>>;
    price_lt?: InputMaybe<Scalars['BigInt']>;
    price_lte?: InputMaybe<Scalars['BigInt']>;
    price_not?: InputMaybe<Scalars['BigInt']>;
    price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    quoteToken?: InputMaybe<Scalars['Bytes']>;
    quoteToken_contains?: InputMaybe<Scalars['Bytes']>;
    quoteToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
    quoteToken_not?: InputMaybe<Scalars['Bytes']>;
    quoteToken_not_contains?: InputMaybe<Scalars['Bytes']>;
    quoteToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    status?: InputMaybe<BidStatus>;
    status_in?: InputMaybe<Array<BidStatus>>;
    status_not?: InputMaybe<BidStatus>;
    status_not_in?: InputMaybe<Array<BidStatus>>;
    tokenId?: InputMaybe<Scalars['BigInt']>;
    tokenId_gt?: InputMaybe<Scalars['BigInt']>;
    tokenId_gte?: InputMaybe<Scalars['BigInt']>;
    tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tokenId_lt?: InputMaybe<Scalars['BigInt']>;
    tokenId_lte?: InputMaybe<Scalars['BigInt']>;
    tokenId_not?: InputMaybe<Scalars['BigInt']>;
    tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum Bid_OrderBy {
    Address = "address",
    Bidder = "bidder",
    CreatedAt = "createdAt",
    Id = "id",
    Price = "price",
    QuoteToken = "quoteToken",
    Status = "status",
    TokenId = "tokenId",
    UpdatedAt = "updatedAt"
}
export declare type BlockChangedFilter = {
    number_gte: Scalars['Int'];
};
export declare type Block_Height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
};
/** Defines the order direction, either ascending or descending */
export declare enum OrderDirection {
    Asc = "asc",
    Desc = "desc"
}
export declare type Query = {
    __typename?: 'Query';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    ask?: Maybe<Ask>;
    asks: Array<Ask>;
    bid?: Maybe<Bid>;
    bids: Array<Bid>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
};
export declare type Query_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};
export declare type QueryAskArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryAsksArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Ask_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Ask_Filter>;
};
export declare type QueryBidArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryBidsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Bid_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Bid_Filter>;
};
export declare type QueryTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Token_Filter>;
};
export declare type Subscription = {
    __typename?: 'Subscription';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    ask?: Maybe<Ask>;
    asks: Array<Ask>;
    bid?: Maybe<Bid>;
    bids: Array<Bid>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
};
export declare type Subscription_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};
export declare type SubscriptionAskArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionAsksArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Ask_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Ask_Filter>;
};
export declare type SubscriptionBidArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionBidsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Bid_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Bid_Filter>;
};
export declare type SubscriptionTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Token_Filter>;
};
export declare type Token = {
    __typename?: 'Token';
    address: Scalars['Bytes'];
    createdAt: Scalars['BigInt'];
    id: Scalars['String'];
    owner: Scalars['Bytes'];
    tokenId: Scalars['BigInt'];
    updatedAt: Scalars['BigInt'];
};
export declare type Token_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['Bytes']>;
    address_contains?: InputMaybe<Scalars['Bytes']>;
    address_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_not?: InputMaybe<Scalars['Bytes']>;
    address_not_contains?: InputMaybe<Scalars['Bytes']>;
    address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    createdAt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gte?: InputMaybe<Scalars['BigInt']>;
    createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt_lt?: InputMaybe<Scalars['BigInt']>;
    createdAt_lte?: InputMaybe<Scalars['BigInt']>;
    createdAt_not?: InputMaybe<Scalars['BigInt']>;
    createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['String']>;
    id_contains?: InputMaybe<Scalars['String']>;
    id_contains_nocase?: InputMaybe<Scalars['String']>;
    id_ends_with?: InputMaybe<Scalars['String']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']>;
    id_gt?: InputMaybe<Scalars['String']>;
    id_gte?: InputMaybe<Scalars['String']>;
    id_in?: InputMaybe<Array<Scalars['String']>>;
    id_lt?: InputMaybe<Scalars['String']>;
    id_lte?: InputMaybe<Scalars['String']>;
    id_not?: InputMaybe<Scalars['String']>;
    id_not_contains?: InputMaybe<Scalars['String']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']>;
    id_not_ends_with?: InputMaybe<Scalars['String']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    id_not_in?: InputMaybe<Array<Scalars['String']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id_starts_with?: InputMaybe<Scalars['String']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']>;
    owner?: InputMaybe<Scalars['Bytes']>;
    owner_contains?: InputMaybe<Scalars['Bytes']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
    owner_not?: InputMaybe<Scalars['Bytes']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    tokenId?: InputMaybe<Scalars['BigInt']>;
    tokenId_gt?: InputMaybe<Scalars['BigInt']>;
    tokenId_gte?: InputMaybe<Scalars['BigInt']>;
    tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tokenId_lt?: InputMaybe<Scalars['BigInt']>;
    tokenId_lte?: InputMaybe<Scalars['BigInt']>;
    tokenId_not?: InputMaybe<Scalars['BigInt']>;
    tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum Token_OrderBy {
    Address = "address",
    CreatedAt = "createdAt",
    Id = "id",
    Owner = "owner",
    TokenId = "tokenId",
    UpdatedAt = "updatedAt"
}
export declare type _Block_ = {
    __typename?: '_Block_';
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
};
/** The type for the top-level _meta field */
export declare type _Meta_ = {
    __typename?: '_Meta_';
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
};
export declare enum _SubgraphErrorPolicy_ {
    /** Data will be returned even if the subgraph has indexing errors */
    Allow = "allow",
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    Deny = "deny"
}
export declare type AsksOfTokenQueryVariables = Exact<{
    address: Scalars['Bytes'];
    tokenId: Scalars['BigInt'];
    status_in: Array<AskStatus> | AskStatus;
}>;
export declare type AsksOfTokenQuery = {
    __typename?: 'Query';
    asks: Array<{
        __typename?: 'Ask';
        id: string;
        address: any;
        tokenId: any;
        seller: any;
        quoteToken: any;
        price: any;
        createdAt: any;
        updatedAt: any;
        status: AskStatus;
        buyer?: any | null;
    }>;
};
export declare type BidsOfTokenQueryVariables = Exact<{
    address: Scalars['Bytes'];
    tokenId: Scalars['BigInt'];
    status_in: Array<BidStatus> | BidStatus;
}>;
export declare type BidsOfTokenQuery = {
    __typename?: 'Query';
    bids: Array<{
        __typename?: 'Bid';
        id: string;
        address: any;
        tokenId: any;
        bidder: any;
        quoteToken: any;
        price: any;
        createdAt: any;
        updatedAt: any;
        status: BidStatus;
    }>;
};
export declare type TokenByIdQueryVariables = Exact<{
    tokenId: Scalars['ID'];
}>;
export declare type TokenByIdQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address: any;
        tokenId: any;
        owner: any;
        createdAt: any;
        updatedAt: any;
    } | null;
};
export declare type TokensOfContractQueryVariables = Exact<{
    contract: Scalars['Bytes'];
}>;
export declare type TokensOfContractQuery = {
    __typename?: 'Query';
    tokens: Array<{
        __typename?: 'Token';
        id: string;
        address: any;
        tokenId: any;
        owner: any;
        createdAt: any;
        updatedAt: any;
    }>;
};
export declare type TokensOfOwnerQueryVariables = Exact<{
    owner: Scalars['Bytes'];
}>;
export declare type TokensOfOwnerQuery = {
    __typename?: 'Query';
    tokens: Array<{
        __typename?: 'Token';
        id: string;
        address: any;
        tokenId: any;
        owner: any;
        createdAt: any;
        updatedAt: any;
    }>;
};
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
    Ask: ResolverTypeWrapper<Ask>;
    AskStatus: AskStatus;
    Ask_filter: Ask_Filter;
    Ask_orderBy: Ask_OrderBy;
    Bid: ResolverTypeWrapper<Bid>;
    BidStatus: BidStatus;
    Bid_filter: Bid_Filter;
    Bid_orderBy: Bid_OrderBy;
    BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
    BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_Height;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    OrderDirection: OrderDirection;
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Subscription: ResolverTypeWrapper<{}>;
    Token: ResolverTypeWrapper<Token>;
    Token_filter: Token_Filter;
    Token_orderBy: Token_OrderBy;
    _Block_: ResolverTypeWrapper<_Block_>;
    _Meta_: ResolverTypeWrapper<_Meta_>;
    _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
    Ask: Ask;
    Ask_filter: Ask_Filter;
    Bid: Bid;
    Bid_filter: Bid_Filter;
    BigDecimal: Scalars['BigDecimal'];
    BigInt: Scalars['BigInt'];
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_Height;
    Boolean: Scalars['Boolean'];
    Bytes: Scalars['Bytes'];
    Float: Scalars['Float'];
    ID: Scalars['ID'];
    Int: Scalars['Int'];
    Query: {};
    String: Scalars['String'];
    Subscription: {};
    Token: Token;
    Token_filter: Token_Filter;
    _Block_: _Block_;
    _Meta_: _Meta_;
};
export declare type DerivedFromDirectiveArgs = {
    field: Scalars['String'];
};
export declare type DerivedFromDirectiveResolver<Result, Parent, ContextType = any, Args = DerivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export declare type EntityDirectiveArgs = {};
export declare type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export declare type SubgraphIdDirectiveArgs = {
    id: Scalars['String'];
};
export declare type SubgraphIdDirectiveResolver<Result, Parent, ContextType = any, Args = SubgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export declare type AskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ask'] = ResolversParentTypes['Ask']> = {
    address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    buyer?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    quoteToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    seller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['AskStatus'], ParentType, ContextType>;
    tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type BidResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bid'] = ResolversParentTypes['Bid']> = {
    address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    bidder?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    quoteToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['BidStatus'], ParentType, ContextType>;
    tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
    name: 'BigDecimal';
}
export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
    name: 'BigInt';
}
export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
    name: 'Bytes';
}
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_MetaArgs>>;
    ask?: Resolver<Maybe<ResolversTypes['Ask']>, ParentType, ContextType, RequireFields<QueryAskArgs, 'id' | 'subgraphError'>>;
    asks?: Resolver<Array<ResolversTypes['Ask']>, ParentType, ContextType, RequireFields<QueryAsksArgs, 'first' | 'skip' | 'subgraphError'>>;
    bid?: Resolver<Maybe<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<QueryBidArgs, 'id' | 'subgraphError'>>;
    bids?: Resolver<Array<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<QueryBidsArgs, 'first' | 'skip' | 'subgraphError'>>;
    token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokenArgs, 'id' | 'subgraphError'>>;
    tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokensArgs, 'first' | 'skip' | 'subgraphError'>>;
};
export declare type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
    _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_MetaArgs>>;
    ask?: SubscriptionResolver<Maybe<ResolversTypes['Ask']>, "ask", ParentType, ContextType, RequireFields<SubscriptionAskArgs, 'id' | 'subgraphError'>>;
    asks?: SubscriptionResolver<Array<ResolversTypes['Ask']>, "asks", ParentType, ContextType, RequireFields<SubscriptionAsksArgs, 'first' | 'skip' | 'subgraphError'>>;
    bid?: SubscriptionResolver<Maybe<ResolversTypes['Bid']>, "bid", ParentType, ContextType, RequireFields<SubscriptionBidArgs, 'id' | 'subgraphError'>>;
    bids?: SubscriptionResolver<Array<ResolversTypes['Bid']>, "bids", ParentType, ContextType, RequireFields<SubscriptionBidsArgs, 'first' | 'skip' | 'subgraphError'>>;
    token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptionTokenArgs, 'id' | 'subgraphError'>>;
    tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptionTokensArgs, 'first' | 'skip' | 'subgraphError'>>;
};
export declare type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
    address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type _Block_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = {
    hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type _Meta_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = {
    block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
    deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type Resolvers<ContextType = any> = {
    Ask?: AskResolvers<ContextType>;
    Bid?: BidResolvers<ContextType>;
    BigDecimal?: GraphQLScalarType;
    BigInt?: GraphQLScalarType;
    Bytes?: GraphQLScalarType;
    Query?: QueryResolvers<ContextType>;
    Subscription?: SubscriptionResolvers<ContextType>;
    Token?: TokenResolvers<ContextType>;
    _Block_?: _Block_Resolvers<ContextType>;
    _Meta_?: _Meta_Resolvers<ContextType>;
};
export declare type DirectiveResolvers<ContextType = any> = {
    derivedFrom?: DerivedFromDirectiveResolver<any, any, ContextType>;
    entity?: EntityDirectiveResolver<any, any, ContextType>;
    subgraphId?: SubgraphIdDirectiveResolver<any, any, ContextType>;
};
export declare const AsksOfTokenDocument: import("graphql").DocumentNode;
export declare const BidsOfTokenDocument: import("graphql").DocumentNode;
export declare const TokenByIdDocument: import("graphql").DocumentNode;
export declare const TokensOfContractDocument: import("graphql").DocumentNode;
export declare const TokensOfOwnerDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    asksOfToken(variables: AsksOfTokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AsksOfTokenQuery>;
    bidsOfToken(variables: BidsOfTokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BidsOfTokenQuery>;
    tokenById(variables: TokenByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokenByIdQuery>;
    tokensOfContract(variables: TokensOfContractQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokensOfContractQuery>;
    tokensOfOwner(variables: TokensOfOwnerQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokensOfOwnerQuery>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
//# sourceMappingURL=generated.d.ts.map