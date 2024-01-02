import React, { useEffect } from "react"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { TrendingSection } from "../../../widgets/TrendingSection/TrendingSection"
import { errorMessage } from "../../../shared/api/apiError"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppDispatch, useAppSelector } from "../../../shared/model/hooks"
import {
    selectAllCards,
    selectLoading,
    selectError,
    fetchContent,
} from "../../../entities/entertainment/model/slice"
import { Loading } from "../../../shared/ui/Loading/Loading"

export const MainPage: React.FC = () => {
    const entertainments = useAppSelector(selectAllCards)
    const loading = useAppSelector(selectLoading)
    const error = useAppSelector(selectError)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchContent())
    }, [])

    function handleClick(): void {
        // const newMovies = entertainments.map((movie) => {
        //   if (movie.title === key) {
        //     movie.isBookmarked = !movie.isBookmarked
        //   }
        //   return movie
        // })
        //setMovies([...newMovies])
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>{errorMessage.download}</div>
    }

    return (
        <>
            <Search placeholder={searchPlaceholder.main} />
            <section className="flex flex-col mt-6">
                <HeaderSection>Trending</HeaderSection>
                <TrendingSection
                    movies={entertainments}
                    handleClick={handleClick}
                />
            </section>
            <section className="flex flex-col mt-6">
                <HeaderSection>Recommended for you</HeaderSection>
                <CardsLayout
                    movies={entertainments}
                    handleClick={handleClick}
                />
            </section>
        </>
    )
}
