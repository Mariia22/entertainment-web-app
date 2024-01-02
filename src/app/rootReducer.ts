import { combineReducers } from "@reduxjs/toolkit"
import { entertainmentSlice } from "../entities/entertainment/model/slice"

export const rootReducer = combineReducers({
    [entertainmentSlice.name]: entertainmentSlice.reducer,
})
