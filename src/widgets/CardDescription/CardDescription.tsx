import React from "react"
import { category } from "../../entities/entertainment/api/types"
import PointIcon from "../../app/assets/icons/icon-point.svg"
import MovieIcon from "../../app/assets/icons/icon-category-movie.svg"
import SeriesIcon from "../../app/assets/icons/icon-category-tv.svg"

interface CardDescriptionProps {
    isTrending: boolean
    title: string
    year: number
    genre: category
    rating: string
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
    isTrending,
    year,
    genre,
    rating,
    title,
}) => {
    return (
        <div
            className={`grid grid-rows-2 gap-1 mt-2 w-242 ${
                isTrending && "absolute left-4 bottom-4"
            }`}
        >
            <div
                className={`flex items-center opacity-75 ${
                    isTrending ? "text-[12px] gap-2" : "text-[11px] gap-[6px]"
                }`}
            >
                {year}
                <PointIcon />
                <div
                    className={`flex items-center ${
                        isTrending ? "gap-[6px]" : "gap-1"
                    }`}
                >
                    {genre === category.movie && <MovieIcon />}
                    {genre === category.series && <SeriesIcon />}
                    <p>{genre}</p>
                </div>
                <PointIcon />
                <p>{rating}</p>
            </div>
            <p
                className={`${
                    isTrending
                        ? "text-[15px] md:text-[24px]"
                        : "text-[14px] md:text-[18px]"
                } font-medium`}
            >
                {title}
            </p>
        </div>
    )
}
