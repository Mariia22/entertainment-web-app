import { AuthResponse } from "../../entities/session/model/types"
import { errorMessage } from "./apiError"
import axios from "axios"

export const url = "src/shared/lib/data.json"
export const loginUrl = "src/shared/lib/user.json"

const api = axios.create({
    withCredentials: true,
    baseURL: loginUrl,
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})

api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                const res = await axios.get<AuthResponse>(
                    `${loginUrl}/refresh`,
                    {
                        withCredentials: true,
                    }
                )
                localStorage.setItem("token", res.data.accessToken)
                return api.request(originalRequest)
            } catch (e) {
                console.log("User is not authorized", errorMessage)
            }
        }
        throw error
    }
)

export default api
