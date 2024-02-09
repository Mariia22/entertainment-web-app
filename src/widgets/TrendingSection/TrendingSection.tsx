import React from "react"
import { Card } from "../Card/Card"
import { errorMessage } from "../../shared/api/apiError"
import { useAppSelector } from "../../shared/model/hooks"
import { selectTrends } from "../../entities/entertainment/model/slice"
import { CardDescription } from "../CardDescription/CardDescription"

export const TrendingSection: React.FC = () => {
  const trendMovies = useAppSelector(selectTrends)

  if (trendMovies.length === 0) {
    return <div className="flex pt-4">{errorMessage.emptyTrending}</div>
  }

  return (
    <div className="flex w-screen pt-4 gap-4 overflow-x-scroll max-w-[1240px] md:gap-x-10">
      {trendMovies.map((movie) => (
        <Card
          key={movie.title}
          title={movie.title}
          url={movie.thumbnail.trending.small}
          isBookmarked={movie.isBookmarked}
          isTrendingSection={true}
        >
          <CardDescription
            title={movie.title}
            year={movie.year}
            genre={movie.category}
            rating={movie.rating}
            isTrending={true}
          />
        </Card>
      ))}
    </div>
  )
}
