import { GenericAssetDto } from "../types"

export type SolanaTownAssetDto = GenericAssetDto & {
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