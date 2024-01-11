import React from "react"
import { useAppSelector } from "../../model/hooks"
import {
    selectSearchCount,
    selectSearchQuery,
    selectSearchResults,
} from "../../../entities/search/model/slice"
import { HeaderSection } from "../HeaderSection/HeaderSection"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"

export const SearchOutput: React.FC = () => {
    const count = useAppSelector(selectSearchCount)
    const query = useAppSelector(selectSearchQuery)
    const searchResults = useAppSelector(selectSearchResults)

    return (
        <>
            <HeaderSection>{`Found ${count} results for ${query}`}</HeaderSection>
            <CardsLayout movies={searchResults} />
        </>
    )
}
