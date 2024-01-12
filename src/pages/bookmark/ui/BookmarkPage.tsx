import React from "react"
import { Search } from "../../../widgets/Search/SearchInput"
import { useAppSelector } from "../../../shared/model/hooks"
import {
    selectBookmarksMovies,
    selectBookmarksSeries,
} from "../../../entities/entertainment/model/slice"
import { selectSearchMode } from "../../../entities/search/model/slice"
import { SearchOutput } from "../../../widgets/Search/SearchOutput"
import { textsAndPlaceholders } from "../../../shared/model/appTextsAndPlaceHolders"
import { EntertainmentSection } from "../../../shared/ui/EntertainmentSection/EntertainmentSection"

export const BookmarkPage: React.FC = () => {
    const moviesBookmarks = useAppSelector(selectBookmarksMovies)
    const seriesBookmarks = useAppSelector(selectBookmarksSeries)
    const movies = [...moviesBookmarks, ...seriesBookmarks]
    const isSearchingMode = useAppSelector(selectSearchMode)

    return (
        <main className="xl:ml-5">
            <Search
                placeholder={textsAndPlaceholders.search.bookmark}
                movies={movies}
            />
            {isSearchingMode ? (
                <SearchOutput />
            ) : (
                <>
                    <EntertainmentSection
                        header={
                            textsAndPlaceholders.sectionHeaders.bookmarkedMovies
                        }
                        entertainments={moviesBookmarks}
                    />
                    <EntertainmentSection
                        header={
                            textsAndPlaceholders.sectionHeaders
                                .bookmarkedTVSeries
                        }
                        entertainments={seriesBookmarks}
                    />
                </>
            )}
        </main>
    )
}
