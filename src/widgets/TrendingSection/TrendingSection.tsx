import React, { useEffect, useState } from "react"
import { dataType } from "../../../types/data"
import { Card } from "../../shared/ui/Card/Card"
import { errorMessage } from "../../shared/api/apiError"

interface TrendingSectionProps {
    movies: dataType[]
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ movies }) => {
    const [trendMovies, setTrendMovies] = useState<dataType[]>([])

    useEffect(() => {
        const trend = movies.filter((movie) => movie.isTrending)
        setTrendMovies(trend)
    }, [movies])

    if (trendMovies.length === 0) {
        ;<div className="flex pt-4">{errorMessage.emptyTrending}</div>
    }

    return (
        <div className="flex pt-4">
            {trendMovies.map((movie) => (
                <Card
                    key={movie.title}
                    width="w-240"
                    height="h-140"
                    background={`bg-[url('${movie.thumbnail.trending.small}')]`}
                />
            ))}
        </div>
    )
}
