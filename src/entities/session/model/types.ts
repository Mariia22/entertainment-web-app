import { SerializedError } from "@reduxjs/toolkit"

export interface AuthResponse {
    accessToken: string
    refreshToken: string
}

export interface AuthSliceState {
    isAuth: boolean
    error: SerializedError | null
}
