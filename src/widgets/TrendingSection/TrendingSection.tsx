import React, { useEffect, useState } from "react"
import { dataType } from "../../../types/data"
import { Card } from "../../shared/ui/Card/Card"
import { errorMessage } from "../../shared/api/apiError"

interface TrendingSectionProps {
    movies: dataType[]
    handleClick: (key: string) => void
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({
    movies,
    handleClick,
}) => {
    const [trendMovies, setTrendMovies] = useState<dataType[]>([])

    useEffect(() => {
        const trend = movies.filter((movie) => movie.isTrending)
        setTrendMovies(trend)
    }, [movies])

    if (trendMovies.length === 0) {
        return <div className="flex pt-4">{errorMessage.emptyTrending}</div>
    }

    return (
        <div className="flex w-screen pt-4 gap-4">
            {trendMovies.map((movie) => (
                <Card
                    key={movie.title}
                    title={movie.title}
                    width="w-240"
                    height="h-140"
                    url={movie.thumbnail.trending.small}
                    isBookmarked={movie.isBookmarked}
                    year={movie.year}
                    genre={movie.category}
                    rating={movie.rating}
                    isTrendingSection={true}
                    handleClick={handleClick}
                />
            ))}
        </div>
    )
}
