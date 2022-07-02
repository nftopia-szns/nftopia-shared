import { BaseAssetDto } from "../types"

export type CrytovoxelsAssetDto = BaseAssetDto & {
    attributes: CrytovoxelsAssetAttributes
}

export type CrytovoxelsAssetAttributes = {
    area: number
    width: number
    depth: number
    height: number
    elevation: number
    suburb: CryptovoxelsAttributeSuburb
    island: CryptovoxelsAttributeIsland
    has_basement: string
    title: string
    "pre-built": boolean
    waterfront: string
    "closest-common": string
}

export enum CryptovoxelsAttributeIsland {
    OriginCity = "Origin City"
}

export enum CryptovoxelsAttributeSuburb {
    Area51 = "Area 51",
    Axies = "Axies",
    Babylon = "Babylon",
    DeepSouth = "Deep South",
    Doom = "Doom",
    FantasyFields = "Fantasy Fields",
    Frankfurt = "Frankfurt",
    Gangnam = "Gangnam",
    Hiro = "Hiro",
    Junkyard = "Junkyard",
    Kitties = "Kitties",
    LeMarais = "Le Marais",
    LittleTokyo = "Little Tokyo",
    Makers = "Makers",
    Memes = "Memes",
    Moon = "Moon",
    MusicDistrict = "Music District",
    NorthPole = "North Pole",
    NorthTerrace = "North Terrace",
    Oasis = "Oasis",
    Punks = "Punks",
    Rome = "Rome",
    Scripting = "Scripting",
    Shenzhen = "Shenzhen",
    TeAro = "Te Aro",
    TheCenter = "The Center",
    WestEnd = "West End",
}