import React from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Search } from "../../../shared/ui/Search/SearchInput"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppSelector } from "../../../shared/model/hooks"
import {
    selectBookmarksMovies,
    selectBookmarksSeries,
} from "../../../entities/entertainment/model/slice"
import { selectSearchMode } from "../../../entities/search/model/slice"
import { SearchOutput } from "../../../shared/ui/Search/SearchOutput"

export const BookmarkPage: React.FC = () => {
    const moviesBookmarks = useAppSelector(selectBookmarksMovies)
    const seriesBookmarks = useAppSelector(selectBookmarksSeries)
    const movies = [...moviesBookmarks, ...seriesBookmarks]
    const isSearchingMode = useAppSelector(selectSearchMode)

    return (
        <main className="xl:ml-5">
            <Search placeholder={searchPlaceholder.bookmark} movies={movies} />
            {isSearchingMode ? (
                <SearchOutput />
            ) : (
                <>
                    <section>
                        <HeaderSection>Bookmarked Movies</HeaderSection>
                        <CardsLayout movies={moviesBookmarks} />
                    </section>
                    <section>
                        <HeaderSection>Bookmarked TV Series</HeaderSection>
                        <CardsLayout movies={seriesBookmarks} />
                    </section>
                </>
            )}
        </main>
    )
}
