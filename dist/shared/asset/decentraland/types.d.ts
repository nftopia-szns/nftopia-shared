import { GenericAssetDto } from "../types";
export declare type DecentralandAssetDto = GenericAssetDto & {
    attributes: DecentralandAssetAttributes;
};
export declare type DecentralandAssetAttributes = {
    category: DecentralandAssetCategory;
    x?: number;
    y?: number;
    estate_size?: number;
    sales?: number;
    sold_at?: number;
    active_order?: object;
};
export declare enum DecentralandAssetCategory {
    Estate = "estate",
    Parcel = "parcel"
}
//# sourceMappingURL=types.d.ts.map