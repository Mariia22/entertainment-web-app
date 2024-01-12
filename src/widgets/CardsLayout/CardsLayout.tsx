import React from "react"
import { EntertainmentCardDto } from "../../entities/entertainment/api/types"
import { Card } from "../Card/Card"
import { CardDescription } from "../CardDescription/CardDescription"

interface CardsLayoutProps {
    movies: EntertainmentCardDto[]
}

export const CardsLayout: React.FC<CardsLayoutProps> = ({ movies }) => {
    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 pl-4 mt-6 pr-4 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-10 xl:gap-y-8">
            {movies.map((item) => (
                <Card
                    key={item.title}
                    title={item.title}
                    url={item.thumbnail.regular.small}
                    isBookmarked={item.isBookmarked}
                    isTrendingSection={false}
                >
                    <CardDescription
                        title={item.title}
                        year={item.year}
                        genre={item.category}
                        rating={item.rating}
                        isTrending={false}
                    />
                </Card>
            ))}
        </div>
    )
}
