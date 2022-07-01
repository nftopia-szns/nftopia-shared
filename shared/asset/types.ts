import { ChainId, BlockchainNetwork } from "../network/types"
import { MetaversePlatform } from "../platform/types"
import { CrytovoxelsAssetDto } from "./cryptovoxels"
import { DecentralandAssetDto } from "./decentraland"
import { SolanaTownAssetDto } from "./solanatown"
import { TheSandBoxAssetDto } from "./thesandbox"

export type BaseAssetDto = {
    platform: MetaversePlatform
    network: BlockchainNetwork
    chain_id: ChainId
    contract_address?: string,
    id: string
    name: string
    description: string
    owner: string
    image: string
    external_url: string
}

export type GenericAssetDto =
    DecentralandAssetDto |
    TheSandBoxAssetDto | 
    CrytovoxelsAssetDto |
    SolanaTownAssetDto
