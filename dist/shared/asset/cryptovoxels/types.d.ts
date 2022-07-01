import { BaseAssetDto } from "../types";
export declare type CrytovoxelsAssetDto = BaseAssetDto & {
    attributes: CrytovoxelsAssetAttributes;
};
export declare type CrytovoxelsAssetAttributes = {
    area: number;
    width: number;
    depth: number;
    height: number;
    elevation: number;
    suburb: string;
    island: string;
    has_basement: string;
    title: string;
    "pre-built": boolean;
    waterfront: string;
    "closest-common": string;
};
//# sourceMappingURL=types.d.ts.map