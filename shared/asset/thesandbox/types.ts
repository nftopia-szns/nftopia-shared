import { GenericAssetDto } from "../types"

export type TheSandBoxAssetDto = GenericAssetDto & {
    attributes: TheSandBoxAssetAttributes
}

export type TheSandBoxAssetAttributes = {
    category: TheSandBoxAssetCategory
    
    // estate doesn't have coordinate
    x?: number
    y?: number

    land_type: TheSandBoxAssetType
}

export enum TheSandBoxAssetCategory {
    Estate = 'estate', 
    Land = 'land'
}

export enum TheSandBoxAssetType {
    Regular = 'regular',
    Premium = 'premium'
}