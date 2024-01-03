import React from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppDispatch, useAppSelector } from "../../../shared/model/hooks"
import {
    changeCardBookmark,
    selectBookmarksMovies,
    selectBookmarksSeries,
} from "../../../entities/entertainment/model/slice"

export const BookmarkPage: React.FC = () => {
    const moviesBookmarks = useAppSelector(selectBookmarksMovies)
    const seriesBookmarks = useAppSelector(selectBookmarksSeries)
    const dispatch = useAppDispatch()

    function handleClick(key: string): void {
        dispatch(changeCardBookmark(key))
    }

    return (
        <>
            <Search placeholder={searchPlaceholder.bookmark} />
            <section className="flex flex-col mt-6">
                <HeaderSection>Bookmarked Movies</HeaderSection>
                <CardsLayout
                    movies={moviesBookmarks}
                    handleClick={handleClick}
                />
            </section>
            <section className="flex flex-col mt-6">
                <HeaderSection>Bookmarked TV Series</HeaderSection>
                <CardsLayout
                    movies={seriesBookmarks}
                    handleClick={handleClick}
                />
            </section>
        </>
    )
}
