import React from "react"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"

export const MainPage: React.FC = () => {
    return (
        <>
            <Search placeholder={searchPlaceholder.main} />
        </>
    )
}
