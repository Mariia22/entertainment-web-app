import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SearchSliceType } from "./types"
import { EntertainmentCard } from "../../entertainment/model/types"

const initialState: SearchSliceType = {
    isSearchingMode: false,
    searchQuery: "",
    countSearchResults: 0,
    searchResults: [],
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeSearchMode: (state, action: PayloadAction<boolean>) => {
            state.isSearchingMode = action.payload
        },
        changeSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },
        changeSearchResults: (
            state,
            action: PayloadAction<EntertainmentCard[]>
        ) => {
            state.searchResults = [...action.payload]
            state.countSearchResults = state.searchResults.length
        },
    },
    selectors: {
        selectSearchMode: (sliceState) => sliceState.isSearchingMode,
        selectSearchCount: (sliceState) => sliceState.countSearchResults,
        selectSearchQuery: (sliceState) => sliceState.searchQuery,
        selectSearchResults: (sliceState) => sliceState.searchResults,
    },
})

export const {
    selectSearchMode,
    selectSearchCount,
    selectSearchQuery,
    selectSearchResults,
} = searchSlice.selectors

export const { changeSearchMode, changeSearchQuery, changeSearchResults } =
    searchSlice.actions
