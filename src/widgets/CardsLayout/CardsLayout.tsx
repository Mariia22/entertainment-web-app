import React from "react"
import { EntertainmentCardDto } from "../../entities/entertainment/api/types"
import { Card } from "../../shared/ui/Card/Card"

interface CardsLayoutProps {
    movies: EntertainmentCardDto[]
}

export const CardsLayout: React.FC<CardsLayoutProps> = ({ movies }) => {
    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 pl-4 mt-6 pr-4 md:grid-cols-3">
            {movies.map((item) => (
                <Card
                    key={item.title}
                    title={item.title}
                    width="w-164"
                    widthTablet="w-220"
                    widthDesktop="w-280"
                    heightTablet="h-140"
                    heightDesktop="h-174"
                    height="h-110"
                    url={item.thumbnail.regular.small}
                    isBookmarked={item.isBookmarked}
                    year={item.year}
                    genre={item.category}
                    rating={item.rating}
                    isTrendingSection={false}
                />
            ))}
        </div>
    )
}
