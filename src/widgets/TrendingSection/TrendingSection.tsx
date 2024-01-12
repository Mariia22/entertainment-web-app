import React from "react"
import { Card } from "../Card/Card"
import { errorMessage } from "../../shared/api/apiError"
import { useAppSelector } from "../../shared/model/hooks"
import { selectTrends } from "../../entities/entertainment/model/slice"

export const TrendingSection: React.FC = () => {
    const trendMovies = useAppSelector(selectTrends)

    if (trendMovies.length === 0) {
        return <div className="flex pt-4">{errorMessage.emptyTrending}</div>
    }

    return (
        <div className="flex w-screen pt-4 ml-4 gap-4 overflow-x-scroll md:gap-x-10">
            {trendMovies.map((movie) => (
                <Card
                    key={movie.title}
                    title={movie.title}
                    url={movie.thumbnail.trending.small}
                    isBookmarked={movie.isBookmarked}
                    year={movie.year}
                    genre={movie.category}
                    rating={movie.rating}
                    isTrendingSection={true}
                />
            ))}
        </div>
    )
}
