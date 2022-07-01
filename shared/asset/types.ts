import { ChainId, BlockchainNetwork } from "../network/types"
import { MetaversePlatform } from "../platform/types"
import { CrytovoxelsAssetDto } from "./cryptovoxels"
import { DecentralandAssetDto } from "./decentraland"
import { SolanaTownAssetDto } from "./solanatown"
import { TheSandBoxAssetDto } from "./thesandbox"

export type GenericAssetDto = {
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

export type AssetDto =
    DecentralandAssetDto |
    TheSandBoxAssetDto | 
    CrytovoxelsAssetDto |
    SolanaTownAssetDto
