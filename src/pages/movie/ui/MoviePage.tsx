import React from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Search } from "../../../shared/ui/Search/SearchInput"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppSelector } from "../../../shared/model/hooks"
import { selectMovies } from "../../../entities/entertainment/model/slice"
import { selectSearchMode } from "../../../entities/search/model/slice"
import { SearchOutput } from "../../../shared/ui/Search/SearchOutput"

export const MoviePage: React.FC = () => {
    const movies = useAppSelector(selectMovies)
    const isSearchingMode = useAppSelector(selectSearchMode)

    return (
        <main className="xl:ml-5">
            <Search placeholder={searchPlaceholder.movies} movies={movies} />
            {isSearchingMode ? (
                <SearchOutput />
            ) : (
                <>
                    {movies.length > 0 && (
                        <>
                            <HeaderSection>Movies</HeaderSection>
                            <CardsLayout movies={movies} />
                        </>
                    )}
                </>
            )}
        </main>
    )
}
