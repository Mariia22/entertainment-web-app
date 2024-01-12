import React from "react"
import { Search } from "../../../widgets/Search/SearchInput"
import { useAppSelector } from "../../../shared/model/hooks"
import { selectSeries } from "../../../entities/entertainment/model/slice"
import { selectSearchMode } from "../../../entities/search/model/slice"
import { SearchOutput } from "../../../widgets/Search/SearchOutput"
import { textsAndPlaceholders } from "../../../shared/model/appTextsAndPlaceHolders"
import { EntertainmentSection } from "../../../shared/ui/EntertainmentSection/EntertainmentSection"

export const SeriesPage: React.FC = () => {
    const series = useAppSelector(selectSeries)
    const isSearchingMode = useAppSelector(selectSearchMode)

    return (
        <main className="xl:ml-5">
            <Search
                placeholder={textsAndPlaceholders.search.series}
                movies={series}
            />
            {isSearchingMode ? (
                <SearchOutput />
            ) : (
                <EntertainmentSection
                    header={textsAndPlaceholders.sectionHeaders.series}
                    entertainments={series}
                />
            )}
        </main>
    )
}
