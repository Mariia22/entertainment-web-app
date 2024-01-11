import React from "react"
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
                    className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-primary opacity-50 cursor-pointer hover:bg-text"
                    onClick={() => handleClick(title)}
                >
                    {isBookmarked ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 fill-text  hover:stroke-primary hover:fill-none"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M20.6094 9C20.7491 9 20.8828 9.02776 21.0104 9.08328C21.2109 9.16347 21.3704 9.28993 21.4889 9.46266C21.6074 9.63538 21.6667 9.82661 21.6667 10.0364V21.9636C21.6667 22.1734 21.6074 22.3646 21.4889 22.5373C21.3704 22.7101 21.2109 22.8365 21.0104 22.9167C20.895 22.9661 20.7613 22.9907 20.6094 22.9907C20.3177 22.9907 20.0655 22.892 19.8529 22.6946L15.8333 18.7713L11.8138 22.6946C11.5951 22.8982 11.3429 23 11.0573 23C10.9175 23 10.7839 22.9722 10.6562 22.9167C10.4557 22.8365 10.2962 22.7101 10.1777 22.5373C10.0592 22.3646 10 22.1734 10 21.9636V10.0364C10 9.82661 10.0592 9.63538 10.1777 9.46266C10.2962 9.28993 10.4557 9.16347 10.6562 9.08328C10.7839 9.02776 10.9175 9 11.0573 9H20.6094Z"
                                strokeWidth="1.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 stroke-text hover:stroke-primary"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
                                strokeWidth="1.5"
                            />
                        </svg>
                    )}
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
