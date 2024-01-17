import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AuthSliceState } from "./types"
import axios from "axios"
import { loginUrl } from "../../../shared/api/baseApi"
import AuthService from "../api/AuthService"

const initialState: AuthSliceState = {
    isAuth: false,
    error: null,
}

export const login = createAsyncThunk(
    "login/login",
    async ({ email, password }: Record<string, string>) => {
        const res = await AuthService.login(email, password)
        return res.data
    }
)

export const registration = createAsyncThunk(
    "login/registration",
    async ({ email, password }: Record<string, string>) => {
        const res = await AuthService.registration(email, password)
        return res.data
    }
)

export const checkAuth = createAsyncThunk("login/checkAuth", async () => {
    const res = await axios.get(`${loginUrl}/refresh`, {
        withCredentials: true,
    })
    return res.data
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        turnOnIsAuth: (state) => {
            state.isAuth = true
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isAuth = true
            localStorage.setItem("token", action.payload.accessToken)
        })
        builder.addCase(login.rejected, (state, action) => {
            state.error = action.error
        })
        builder.addCase(registration.fulfilled, (state, action) => {
            state.isAuth = true
            localStorage.setItem("token", action.payload.accessToken)
        })
        builder.addCase(registration.rejected, (state, action) => {
            state.error = action.error
        })
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.isAuth = true
            localStorage.setItem("token", action.payload.accessToken)
        })
        builder.addCase(checkAuth.rejected, (state, action) => {
            state.error = action.error
        })
    },
    selectors: {
        selectIsAuthorized: (sliceState) => sliceState.isAuth,
        selectAuthError: (sliceState) => sliceState.error,
    },
})

export const { turnOnIsAuth } = userSlice.actions
export const { selectIsAuthorized, selectAuthError } = userSlice.selectors
