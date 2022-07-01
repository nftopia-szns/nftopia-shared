import { BaseAssetDto } from "../types"

export type SolanaTownAssetDto = BaseAssetDto & {
    attributes: SolanaTownAssetAttributes
}

export type SolanaTownAssetAttributes = {
    type: SolanaTownAssetType
    
    x?: number
    y?: number
}

export enum SolanaTownAssetType {
    Residential = 'residential', 
}