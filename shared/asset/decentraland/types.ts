import { GenericAssetDto } from "../types"

export type DecentralandAssetDto = GenericAssetDto & {
    attributes: DecentralandAssetAttributes
}

export type DecentralandAssetAttributes = {
    category: DecentralandAssetCategory
    
    // estate doesn't have coordinate
    x?: number, 
    y?: number,

    // estate
    estate_size?: number

    // sales
    sales?: number
    sold_at?: number
    active_order?: object
}

export enum DecentralandAssetCategory {
    Estate = 'estate',
    Parcel = 'parcel',
}