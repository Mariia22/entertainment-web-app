import React from "react"
import { Search } from "../../../shared/ui/Search/SearchInput"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { TrendingSection } from "../../../widgets/TrendingSection/TrendingSection"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"
import { useAppSelector } from "../../../shared/model/hooks"
import { selectAllCards } from "../../../entities/entertainment/model/slice"
import { selectSearchMode } from "../../../entities/search/model/slice"
import { SearchOutput } from "../../../shared/ui/Search/SearchOutput"

export const MainPage: React.FC = () => {
    const entertainments = useAppSelector(selectAllCards)
    const isSearchingMode = useAppSelector(selectSearchMode)

    return (
        <main className="xl:ml-5">
            <Search
                placeholder={searchPlaceholder.main}
                movies={entertainments}
            />
            {isSearchingMode ? (
                <SearchOutput />
            ) : (
                <>
                    <div className="relative h-200 md:h-295">
                        <section className="absolute z-10">
                            <HeaderSection>Trending</HeaderSection>
                            <TrendingSection />
                        </section>
                    </div>
                    <HeaderSection>Recommended for you</HeaderSection>
                    <CardsLayout movies={entertainments} />
                </>
            )}
        </main>
    )
}
