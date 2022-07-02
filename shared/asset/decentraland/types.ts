import { BaseAssetDto } from "../types"

export type DecentralandAssetDto = BaseAssetDto & {
    attributes: DecentralandAssetAttributes
}

export type DecentralandAssetAttributes = {
    category: DecentralandAssetCategory
    
    // promixity
    distance_to_plaza: number
    distance_to_district: number
    distance_to_road: number

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