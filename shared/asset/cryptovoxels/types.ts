import { GenericAssetDto } from "../types"

export type CrytovoxelsAssetDto = GenericAssetDto & {
    attributes: CrytovoxelsAssetAttributes
}

export type CrytovoxelsAssetAttributes = {
    area: number
    width: number
    depth: number
    height: number
    elevation: number
    suburb: string
    island: string
    has_basement: string
    title: string
    "pre-built": boolean
    waterfront: string
    "closest-common": string
}