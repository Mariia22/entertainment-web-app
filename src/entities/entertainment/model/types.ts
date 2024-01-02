import { SerializedError } from "@reduxjs/toolkit"
import { EntertainmentCardDto } from "../api/types"

export type EntertainmentCard = EntertainmentCardDto

export type EntertainmentCardSlice = {
    loading: boolean
    error: SerializedError | null
    cards: EntertainmentCard[]
}
