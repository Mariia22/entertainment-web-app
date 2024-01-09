import React from "react"
import NonBookmarkedIcon from "../../../app/assets/icons/icon-bookmark-empty.svg"
import BookmarkedIcon from "../../../app/assets/icons/icon-bookmark-full.svg"
import PointIcon from "../../../app/assets/icons/icon-point.svg"
import MovieIcon from "../../../app/assets/icons/icon-category-movie.svg"
import SeriesIcon from "../../../app/assets/icons/icon-category-tv.svg"
import { category } from "../../../entities/entertainment/api/types"
import { useAppDispatch } from "../../model/hooks"
import { changeCardBookmark } from "../../../entities/entertainment/model/slice"

interface CardProps {
    url: string
    isBookmarked: boolean
    title: string
    year: number
    genre: category
    rating: string
    isTrendingSection: boolean
}

export const Card: React.FC<CardProps> = ({
    url,
    isBookmarked,
    title,
    year,
    genre,
    rating,
    isTrendingSection,
}) => {
    const dispatch = useAppDispatch()

    function handleClick(key: string): void {
        dispatch(changeCardBookmark(key))
    }

    return (
        <div className="relative flex flex-col">
            <div
                style={{ backgroundImage: `url(${url})` }}
                className={`relative block bg-cover bg-no-repeat bg-center rounded-lg 
        ${
            isTrendingSection
                ? "w-240 h-140 md:w-470 md:h-230"
                : "w-164 h-110 md:w-220 md:h-140 xl:w-280 xl:h-174"
        }`}
            >
                <div
                    className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-primary opacity-50 cursor-pointer"
                    onClick={() => handleClick(title)}
                >
                    {isBookmarked ? <BookmarkedIcon /> : <NonBookmarkedIcon />}
                </div>
            </div>
            <div
                className={`grid grid-rows-2 gap-1 mt-2 w-242 ${
                    isTrendingSection && "absolute left-4 bottom-4"
                }`}
            >
                <div
                    className={`flex items-center opacity-75 ${
                        isTrendingSection
                            ? "text-[12px] gap-2"
                            : "text-[11px] gap-[6px]"
                    }`}
                >
                    {year}
                    <PointIcon />
                    <div
                        className={`flex items-center ${
                            isTrendingSection ? "gap-[6px]" : "gap-1"
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
                        isTrendingSection ? "text-[15px]" : "text-sm"
                    } font-medium`}
                >
                    {title}
                </p>
            </div>
        </div>
    )
}
