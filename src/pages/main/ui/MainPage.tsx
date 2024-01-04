import React from "react"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { TrendingSection } from "../../../widgets/TrendingSection/TrendingSection"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppSelector } from "../../../shared/model/hooks"
import { selectAllCards } from "../../../entities/entertainment/model/slice"

export const MainPage: React.FC = () => {
    const entertainments = useAppSelector(selectAllCards)

    return (
        <>
            <Search placeholder={searchPlaceholder.main} />
            <div className="relative h-[200px]">
                <section className="absolute z-10 h-[200px]">
                    <HeaderSection>Trending</HeaderSection>
                    <TrendingSection />
                </section>
            </div>
            <HeaderSection>Recommended for you</HeaderSection>
            <CardsLayout movies={entertainments} />
        </>
    )
}
