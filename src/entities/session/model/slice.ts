import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginUrl } from "../../../shared/api/baseApi"

const initialState = {
    isAuth: false,
    loading: false,
    error: null,
}

export const login = createAsyncThunk("login/login", async () => {
    const res = await fetch(loginUrl, {
        headers: {
            Accept: "application/json",
        },
    })
    const data = await res.json()
    return data
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(login.rejected, (state) => {
            state.loading = false
        })
    },
    selectors: {
        selectIsAuthorized: (sliceState) => sliceState.isAuth,
    },
})

export const { selectIsAuthorized } = userSlice.selectors
