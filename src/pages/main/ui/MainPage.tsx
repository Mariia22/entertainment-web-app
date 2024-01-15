import React from "react"
import { Search } from "../../../widgets/Search/SearchInput"
import { TrendingSection } from "../../../widgets/TrendingSection/TrendingSection"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { useAppSelector } from "../../../shared/model/hooks"
import { selectAllCards } from "../../../entities/entertainment/model/slice"
import { selectSearchMode } from "../../../entities/search/model/slice"
import { SearchOutput } from "../../../widgets/Search/SearchOutput"
import { textsAndPlaceholders } from "../../../shared/model/appTextsAndPlaceHolders"
import { EntertainmentSection } from "../../../shared/ui/EntertainmentSection/EntertainmentSection"

export const MainPage: React.FC = () => {
    const entertainments = useAppSelector(selectAllCards)
    const isSearchingMode = useAppSelector(selectSearchMode)

    return (
        <main className="xl:ml-5">
            <Search
                placeholder={textsAndPlaceholders.search.main}
                movies={entertainments}
            />
            {isSearchingMode ? (
                <SearchOutput />
            ) : (
                <>
                    <div className="relative h-200 md:h-295">
                        <section className="absolute z-10 pl-8">
                            <HeaderSection>
                                {textsAndPlaceholders.sectionHeaders.trends}
                            </HeaderSection>
                            <TrendingSection />
                        </section>
                    </div>
                    <EntertainmentSection
                        header={
                            textsAndPlaceholders.sectionHeaders.recommendations
                        }
                        entertainments={entertainments}
                    />
                </>
            )}
        </main>
    )
}
