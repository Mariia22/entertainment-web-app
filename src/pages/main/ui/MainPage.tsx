import React from "react"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { TrendingSection } from "../../../widgets/TrendingSection/TrendingSection"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppDispatch, useAppSelector } from "../../../shared/model/hooks"
import {
    changeCardBookmark,
    selectAllCards,
} from "../../../entities/entertainment/model/slice"

export const MainPage: React.FC = () => {
    const entertainments = useAppSelector(selectAllCards)
    const dispatch = useAppDispatch()

    function handleClick(key: string): void {
        dispatch(changeCardBookmark(key))
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
