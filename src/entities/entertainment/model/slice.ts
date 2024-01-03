import {
    PayloadAction,
    createAsyncThunk,
    createSelector,
    createSlice,
} from "@reduxjs/toolkit"
import { EntertainmentCard, EntertainmentCardSlice } from "./types"
import { url } from "../../../shared/api/baseApi"
import { category } from "../api/types"
import { RootState } from "../../../app/appStore"

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
    reducers: {
        changeCardBookmark: (state, action: PayloadAction<string>) => {
            state.cards.map((card) => {
                if (action.payload !== card.title) return card
                return {
                    ...card,
                    isBookmarked: !card.isBookmarked,
                }
            })
        },
    },
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
    },
})

export const selectMovies = createSelector(
    (state: RootState) => state.entertainment.cards,
    (cards): EntertainmentCard[] =>
        cards.filter(
            (card: EntertainmentCard) => card.category === category.movie
        )
)

export const selectSeries = createSelector(
    (state: RootState) => state.entertainment.cards,
    (cards): EntertainmentCard[] =>
        cards.filter(
            (card: EntertainmentCard) => card.category === category.series
        )
)

export const selectBookmarksMovies = createSelector(
    (state: RootState) => state.entertainment.cards,
    (cards): EntertainmentCard[] =>
        cards.filter(
            (card: EntertainmentCard) =>
                card.category === category.movie && card.isBookmarked === true
        )
)

export const selectBookmarksSeries = createSelector(
    (state: RootState) => state.entertainment.cards,
    (cards): EntertainmentCard[] =>
        cards.filter(
            (card: EntertainmentCard) =>
                card.category === category.series && card.isBookmarked === true
        )
)

export const selectTrends = createSelector(
    (state: RootState) => state.entertainment.cards,
    (cards): EntertainmentCard[] =>
        cards.filter((card: EntertainmentCard) => card.isTrending)
)

export const { changeCardBookmark } = entertainmentSlice.actions
export const { selectAllCards, selectLoading, selectError } =
    entertainmentSlice.selectors
