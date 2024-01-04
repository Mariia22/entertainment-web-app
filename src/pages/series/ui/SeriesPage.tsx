import React from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppSelector } from "../../../shared/model/hooks"
import { selectSeries } from "../../../entities/entertainment/model/slice"

export const SeriesPage: React.FC = () => {
    const movies = useAppSelector(selectSeries)

    return (
        <>
            <Search placeholder={searchPlaceholder.series} />
            <>
                <HeaderSection>TV Series</HeaderSection>
                <CardsLayout movies={movies} />
            </>
        </>
    )
}
