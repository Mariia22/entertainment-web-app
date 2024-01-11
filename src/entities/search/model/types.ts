import { EntertainmentCard } from "../../entertainment/model/types"

export interface SearchSliceType {
    isSearchingMode: boolean
    searchQuery: string
    countSearchResults: number
    searchResults: EntertainmentCard[]
}
