import { GenericAssetDto } from "../types";
export declare type TheSandBoxAssetDto = GenericAssetDto & {
    attributes: TheSandBoxAssetAttributes;
};
export declare type TheSandBoxAssetAttributes = {
    category: TheSandBoxAssetCategory;
    x?: number;
    y?: number;
    land_type: TheSandBoxAssetType;
};
export declare enum TheSandBoxAssetCategory {
    Estate = "estate",
    Land = "land"
}
export declare enum TheSandBoxAssetType {
    Regular = "regular",
    Premium = "premium"
}
//# sourceMappingURL=types.d.ts.map