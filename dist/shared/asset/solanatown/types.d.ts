import { BaseAssetDto } from "../types";
export declare type SolanaTownAssetDto = BaseAssetDto & {
    attributes: SolanaTownAssetAttributes;
};
export declare type SolanaTownAssetAttributes = {
    type: SolanaTownAssetType;
    x?: number;
    y?: number;
};
export declare enum SolanaTownAssetType {
    Residential = "residential"
}
//# sourceMappingURL=types.d.ts.map