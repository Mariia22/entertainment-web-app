import React, { useEffect } from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { errorMessage } from "../../../shared/api/apiError"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppDispatch, useAppSelector } from "../../../shared/model/hooks"
import {
    fetchContent,
    selectBookmarksMovies,
    selectBookmarksSeries,
    selectError,
    selectLoading,
} from "../../../entities/entertainment/model/slice"
import { Loading } from "../../../shared/ui/Loading/Loading"

export const BookmarkPage: React.FC = () => {
    const moviesBookmarks = useAppSelector(selectBookmarksMovies)
    const seriesBookmarks = useAppSelector(selectBookmarksSeries)
    const loading = useAppSelector(selectLoading)
    const error = useAppSelector(selectError)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchContent())
    }, [])

    function handleClick(): void {}

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>{errorMessage.download}</div>
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
