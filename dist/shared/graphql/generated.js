"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.TokensOfOwnerDocument = exports.TokensOfContractDocument = exports.TokenByIdDocument = exports.BidsOfTokenDocument = exports.AsksOfTokenDocument = exports._SubgraphErrorPolicy_ = exports.Token_OrderBy = exports.OrderDirection = exports.Bid_OrderBy = exports.BidStatus = exports.Ask_OrderBy = exports.AskStatus = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var AskStatus;
(function (AskStatus) {
    AskStatus["Accepted"] = "Accepted";
    AskStatus["Cancelled"] = "Cancelled";
    AskStatus["New"] = "New";
})(AskStatus = exports.AskStatus || (exports.AskStatus = {}));
var Ask_OrderBy;
(function (Ask_OrderBy) {
    Ask_OrderBy["Address"] = "address";
    Ask_OrderBy["Buyer"] = "buyer";
    Ask_OrderBy["CreatedAt"] = "createdAt";
    Ask_OrderBy["Id"] = "id";
    Ask_OrderBy["Price"] = "price";
    Ask_OrderBy["QuoteToken"] = "quoteToken";
    Ask_OrderBy["Seller"] = "seller";
    Ask_OrderBy["Status"] = "status";
    Ask_OrderBy["TokenId"] = "tokenId";
    Ask_OrderBy["UpdatedAt"] = "updatedAt";
})(Ask_OrderBy = exports.Ask_OrderBy || (exports.Ask_OrderBy = {}));
var BidStatus;
(function (BidStatus) {
    BidStatus["Accepted"] = "Accepted";
    BidStatus["Cancelled"] = "Cancelled";
    BidStatus["New"] = "New";
})(BidStatus = exports.BidStatus || (exports.BidStatus = {}));
var Bid_OrderBy;
(function (Bid_OrderBy) {
    Bid_OrderBy["Address"] = "address";
    Bid_OrderBy["Bidder"] = "bidder";
    Bid_OrderBy["CreatedAt"] = "createdAt";
    Bid_OrderBy["Id"] = "id";
    Bid_OrderBy["Price"] = "price";
    Bid_OrderBy["QuoteToken"] = "quoteToken";
    Bid_OrderBy["Status"] = "status";
    Bid_OrderBy["TokenId"] = "tokenId";
    Bid_OrderBy["UpdatedAt"] = "updatedAt";
})(Bid_OrderBy = exports.Bid_OrderBy || (exports.Bid_OrderBy = {}));
/** Defines the order direction, either ascending or descending */
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "asc";
    OrderDirection["Desc"] = "desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var Token_OrderBy;
(function (Token_OrderBy) {
    Token_OrderBy["Address"] = "address";
    Token_OrderBy["CreatedAt"] = "createdAt";
    Token_OrderBy["Id"] = "id";
    Token_OrderBy["Owner"] = "owner";
    Token_OrderBy["TokenId"] = "tokenId";
    Token_OrderBy["UpdatedAt"] = "updatedAt";
})(Token_OrderBy = exports.Token_OrderBy || (exports.Token_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
    /** Data will be returned even if the subgraph has indexing errors */
    _SubgraphErrorPolicy_["Allow"] = "allow";
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ = exports._SubgraphErrorPolicy_ || (exports._SubgraphErrorPolicy_ = {}));
exports.AsksOfTokenDocument = (0, graphql_tag_1.default) `
    query asksOfToken($address: Bytes!, $tokenId: BigInt!, $status_in: [AskStatus!]!) {
  asks(where: {status_in: $status_in}) {
    id
    address
    tokenId
    seller
    quoteToken
    price
    createdAt
    updatedAt
    status
    buyer
  }
}
    `;
exports.BidsOfTokenDocument = (0, graphql_tag_1.default) `
    query bidsOfToken($address: Bytes!, $tokenId: BigInt!, $status_in: [BidStatus!]!) {
  bids(where: {status_in: $status_in}) {
    id
    address
    tokenId
    bidder
    quoteToken
    price
    createdAt
    updatedAt
    status
  }
}
    `;
exports.TokenByIdDocument = (0, graphql_tag_1.default) `
    query tokenById($tokenId: ID!) {
  token(id: $tokenId) {
    id
    address
    tokenId
    owner
    createdAt
    updatedAt
  }
}
    `;
exports.TokensOfContractDocument = (0, graphql_tag_1.default) `
    query tokensOfContract($contract: Bytes!) {
  tokens(where: {address: $contract}) {
    id
    address
    tokenId
    owner
    createdAt
    updatedAt
  }
}
    `;
exports.TokensOfOwnerDocument = (0, graphql_tag_1.default) `
    query tokensOfOwner($owner: Bytes!) {
  tokens(where: {owner: $owner}) {
    id
    address
    tokenId
    owner
    createdAt
    updatedAt
  }
}
    `;
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        asksOfToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AsksOfTokenDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'asksOfToken', 'query');
        },
        bidsOfToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.BidsOfTokenDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'bidsOfToken', 'query');
        },
        tokenById(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TokenByIdDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'tokenById', 'query');
        },
        tokensOfContract(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TokensOfContractDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'tokensOfContract', 'query');
        },
        tokensOfOwner(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TokensOfOwnerDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'tokensOfOwner', 'query');
        }
    };
}
exports.getSdk = getSdk;
//# sourceMappingURL=generated.js.map