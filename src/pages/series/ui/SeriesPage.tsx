import React, { useEffect } from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { errorMessage } from "../../../shared/api/apiError"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppDispatch, useAppSelector } from "../../../shared/model/hooks"
import {
    fetchContent,
    selectError,
    selectLoading,
    selectSeries,
} from "../../../entities/entertainment/model/slice"
import { Loading } from "../../../shared/ui/Loading/Loading"

export const SeriesPage: React.FC = () => {
    const movies = useAppSelector(selectSeries)
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
            <Search placeholder={searchPlaceholder.series} />
            <section className="flex flex-col mt-6">
                <HeaderSection>TV Series</HeaderSection>
                <CardsLayout movies={movies} handleClick={handleClick} />
            </section>
        </>
    )
}
