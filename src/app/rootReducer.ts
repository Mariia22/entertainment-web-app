import { combineReducers } from "@reduxjs/toolkit"
import { entertainmentSlice } from "../entities/entertainment/model/slice"
import { searchSlice } from "../entities/search/model/slice"

export const rootReducer = combineReducers({
    [entertainmentSlice.name]: entertainmentSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
})
