import React from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppDispatch, useAppSelector } from "../../../shared/model/hooks"
import {
    changeCardBookmark,
    selectSeries,
} from "../../../entities/entertainment/model/slice"

export const SeriesPage: React.FC = () => {
    const movies = useAppSelector(selectSeries)
    const dispatch = useAppDispatch()

    function handleClick(key: string): void {
        dispatch(changeCardBookmark(key))
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
