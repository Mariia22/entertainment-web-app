import React from "react"
import { useAppSelector } from "../../shared/model/hooks"
import {
    selectSearchCount,
    selectSearchQuery,
    selectSearchResults,
} from "../../entities/search/model/slice"
import { HeaderSection } from "../../shared/ui/HeaderSection/HeaderSection"
import { CardsLayout } from "../CardsLayout/CardsLayout"

export const SearchOutput: React.FC = () => {
    const count = useAppSelector(selectSearchCount)
    const query = useAppSelector(selectSearchQuery)
    const searchResults = useAppSelector(selectSearchResults)

    return (
        <section>
            <HeaderSection>{`Found ${count} results for ${query}`}</HeaderSection>
            <CardsLayout cards={searchResults} />
        </section>
    )
}
