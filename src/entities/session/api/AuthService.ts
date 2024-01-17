import { AxiosResponse } from "axios"
import api from "../../../shared/api/baseApi"
import { AuthResponse } from "../model/types"

export default class AuthService {
    static async login(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>("", { email, password })
    }

    static async registration(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>("", { email, password })
    }
}
