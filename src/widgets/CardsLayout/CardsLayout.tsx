import React from "react"
import { EntertainmentCardDto } from "../../entities/entertainment/api/types"
import { Card } from "../../shared/ui/Card/Card"

interface CardsLayoutProps {
    movies: EntertainmentCardDto[]
    handleClick: (key: string) => void
}

export const CardsLayout: React.FC<CardsLayoutProps> = ({
    movies,
    handleClick,
}) => {
    return (
        <div className="grid grid-cols-2 gap-y-4 pt-4">
            {movies.map((item) => (
                <Card
                    key={item.title}
                    title={item.title}
                    width="w-164"
                    height="h-110"
                    url={item.thumbnail.regular.small}
                    isBookmarked={item.isBookmarked}
                    year={item.year}
                    genre={item.category}
                    rating={item.rating}
                    isTrendingSection={false}
                    handleClick={handleClick}
                />
            ))}
        </div>
    )
}
