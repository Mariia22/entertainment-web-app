import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { EntertainmentCard, EntertainmentCardSlice } from "./types"
import { url } from "../../../shared/api/baseApi"

const initialState: EntertainmentCardSlice = {
    loading: false,
    error: null,
    cards: [],
}

export const fetchContent = createAsyncThunk(
    "entertainment/fetchContent",
    async () => {
        const res = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
        })
        const data = await res.json()
        return data
    }
)

export const entertainmentSlice = createSlice({
    name: "entertainment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.loading = false
            state.cards = [...action.payload]
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
    },
    selectors: {
        selectAllCards: (sliceState) => sliceState.cards,
        selectLoading: (sliceState) => sliceState.loading,
        selectError: (sliceState) => sliceState.error,
        selectMovies: (sliceState) => {
            return sliceState.cards.filter(
                (movie: EntertainmentCard) => movie.category === "Movie"
            )
        },
        selectSeries: (sliceState) => {
            return sliceState.cards.filter(
                (movie: EntertainmentCard) => movie.category === "TV Series"
            )
        },
        selectBookmarksMovies: (sliceState) => {
            return sliceState.cards.filter(
                (movie: EntertainmentCard) =>
                    movie.category === "Movie" && movie.isBookmarked === true
            )
        },
        selectBookmarksSeries: (sliceState) => {
            return sliceState.cards.filter(
                (movie: EntertainmentCard) =>
                    movie.category === "TV Series" &&
                    movie.isBookmarked === true
            )
        },
    },
})

export const {
    selectAllCards,
    selectLoading,
    selectError,
    selectMovies,
    selectSeries,
    selectBookmarksMovies,
    selectBookmarksSeries,
} = entertainmentSlice.selectors
