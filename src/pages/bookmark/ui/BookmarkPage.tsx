import React from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppSelector } from "../../../shared/model/hooks"
import {
    selectBookmarksMovies,
    selectBookmarksSeries,
} from "../../../entities/entertainment/model/slice"

export const BookmarkPage: React.FC = () => {
    const moviesBookmarks = useAppSelector(selectBookmarksMovies)
    const seriesBookmarks = useAppSelector(selectBookmarksSeries)

    return (
        <>
            <Search placeholder={searchPlaceholder.bookmark} />
            <section>
                <HeaderSection>Bookmarked Movies</HeaderSection>
                <CardsLayout movies={moviesBookmarks} />
            </section>
            <section>
                <HeaderSection>Bookmarked TV Series</HeaderSection>
                <CardsLayout movies={seriesBookmarks} />
            </section>
        </>
    )
}
