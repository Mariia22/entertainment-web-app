import React from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Search } from "../../../widgets/Search/SearchInput"
import { searchPlaceholder } from "../../../widgets/Search/searchPlaceholder"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppSelector } from "../../../shared/model/hooks"
import { selectSeries } from "../../../entities/entertainment/model/slice"
import { selectSearchMode } from "../../../entities/search/model/slice"
import { SearchOutput } from "../../../widgets/Search/SearchOutput"

export const SeriesPage: React.FC = () => {
    const movies = useAppSelector(selectSeries)
    const isSearchingMode = useAppSelector(selectSearchMode)

    return (
        <main className="xl:ml-5">
            <Search placeholder={searchPlaceholder.series} movies={movies} />
            {isSearchingMode ? (
                <SearchOutput />
            ) : (
                <>
                    {movies.length > 0 && (
                        <>
                            <HeaderSection>TV Series</HeaderSection>
                            <CardsLayout movies={movies} />
                        </>
                    )}
                </>
            )}
        </main>
    )
}
