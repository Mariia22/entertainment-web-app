import React, { useEffect, useState } from "react"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { dataType } from "../../../../types/data"
import { url } from "../../../shared/api/baseApi"
import { TrendingSection } from "../../../widgets/TrendingSection/TrendingSection"
import { errorMessage } from "../../../shared/api/apiError"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"

export const MainPage: React.FC = () => {
    const [movies, setMovies] = useState<dataType[]>([])
    const [error, setError] = useState<string>("")

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((movies) => setMovies(movies))
            .catch((error) => setError(error))
    }, [])

    return (
        <>
            <Search placeholder={searchPlaceholder.main} />
            {error.length > 0 ? (
                errorMessage.download
            ) : (
                <section className="flex flex-col mt-6">
                    <HeaderSection>Trending</HeaderSection>
                    <TrendingSection movies={movies} />
                </section>
            )}
        </>
    )
}
