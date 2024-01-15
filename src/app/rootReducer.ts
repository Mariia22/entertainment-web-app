import { combineReducers } from "@reduxjs/toolkit"
import { entertainmentSlice } from "../entities/entertainment/model/slice"
import { searchSlice } from "../entities/search/model/slice"
import { userSlice } from "../entities/session/model/slice"

export const rootReducer = combineReducers({
    [entertainmentSlice.name]: entertainmentSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
    [userSlice.name]: userSlice.reducer,
})
