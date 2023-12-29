import React, { useEffect, useState } from "react"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { errorMessage } from "../../../shared/api/apiError"
import { Search } from "../../../shared/ui/Search/Search"
import { searchPlaceholder } from "../../../shared/ui/Search/searchPlaceholder"
import { dataType } from "../../../../types/data"
import { url } from "../../../shared/api/baseApi"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"

export const SeriesPage: React.FC = () => {
    const [movies, setMovies] = useState<dataType[]>([])
    const [error, setError] = useState<string>("")

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((movies) =>
                movies.filter(
                    (movie: dataType) => movie.category === "TV Series"
                )
            )
            .then((filteredMovies) => setMovies(filteredMovies))
            .catch((error) => setError(error))
    }, [])

    function handleClick(key: string): void {
        const newMovies = movies.map((movie) => {
            if (movie.title === key) {
                movie.isBookmarked = !movie.isBookmarked
            }
            return movie
        })
        setMovies([...newMovies])
    }

    return (
        <>
            <Search placeholder={searchPlaceholder.series} />
            {error.length > 0 ? (
                errorMessage.download
            ) : (
                <section className="flex flex-col mt-6">
                    <HeaderSection>TV Series</HeaderSection>
                    <CardsLayout movies={movies} handleClick={handleClick} />
                </section>
            )}
        </>
    )
}
