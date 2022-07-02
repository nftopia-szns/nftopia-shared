import { BaseAssetDto } from "../types"

export type DecentralandAssetDto = BaseAssetDto & {
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
    active_order?: DecentralandActiveOrderAttribute
}

export enum DecentralandAssetCategory {
    Estate = 'estate',
    Parcel = 'parcel',
}

export type DecentralandActiveOrderAttribute = {
    price: number
    expires_at: number
    updated_at: number
}