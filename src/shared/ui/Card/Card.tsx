import React from "react"
import NonBookmarkedIcon from "../../../app/assets/icons/icon-bookmark-empty.svg"
import BookmarkedIcon from "../../../app/assets/icons/icon-bookmark-full.svg"

interface CardProps {
    width: string
    height: string
    url: string
    isBookmarked: boolean
    handleClick: (key: string) => void
    title: string
}

export const Card: React.FC<CardProps> = ({
    width,
    height,
    url,
    isBookmarked,
    handleClick,
    title,
}) => {
    return (
        <div
            style={{ backgroundImage: `url(${url})` }}
            className={`relative block ${width} ${height} bg-cover bg-no-repeat bg-center rounded-lg`}
        >
            <div
                className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-primary opacity-50 cursor-pointer"
                onClick={() => handleClick(title)}
            >
                {isBookmarked ? <NonBookmarkedIcon /> : <BookmarkedIcon />}
            </div>
        </div>
    )
}
