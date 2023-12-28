import React, { useEffect, useState } from "react"
import { dataType } from "../../../types/data"
import { Card } from "../../shared/ui/Card/Card"

interface RecommendSectionProps {
    movies: dataType[]
    handleClick: (key: string) => void
}

export const RecommendSection: React.FC<RecommendSectionProps> = ({
    movies,
    handleClick,
}) => {
    const [recommendMovies, setRecommendMovies] = useState<dataType[]>([])

    useEffect(() => {
        setRecommendMovies([...movies])
    }, [movies])

    return (
        <div className="grid grid-cols-2 gap-y-4 pt-4">
            {recommendMovies.map((movie) => (
                <Card
                    key={movie.title}
                    title={movie.title}
                    width="w-164"
                    height="h-110"
                    url={movie.thumbnail.regular.small}
                    isBookmarked={movie.isBookmarked}
                    handleClick={handleClick}
                />
            ))}
        </div>
    )
}
