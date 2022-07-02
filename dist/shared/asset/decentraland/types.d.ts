import { BaseAssetDto } from "../types";
export declare type DecentralandAssetDto = BaseAssetDto & {
    attributes: DecentralandAssetAttributes;
};
export declare type DecentralandAssetAttributes = {
    category: DecentralandAssetCategory;
    distance_to_plaza: number;
    distance_to_district: number;
    distance_to_road: number;
    x?: number;
    y?: number;
    estate_size?: number;
    sales?: number;
    sold_at?: number;
    active_order?: DecentralandActiveOrderAttribute;
};
export declare enum DecentralandAssetCategory {
    Estate = "estate",
    Parcel = "parcel"
}
export declare type DecentralandActiveOrderAttribute = {
    price: number;
    expires_at: number;
    updated_at: number;
};
//# sourceMappingURL=types.d.ts.map