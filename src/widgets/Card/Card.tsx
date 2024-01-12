import React, { ReactNode, useState } from "react"
import { useAppDispatch } from "../../shared/model/hooks"
import { changeCardBookmark } from "../../entities/entertainment/model/slice"
import { Bookmark } from "../Bookmark/Bookmark"
import { PlayVideoButton } from "../../features/card-playVideo/ui/PlayButton"

interface CardProps {
    url: string
    isBookmarked: boolean
    title: string
    isTrendingSection: boolean
    children: ReactNode
}

export const Card: React.FC<CardProps> = ({
    url,
    isBookmarked,
    title,
    isTrendingSection,
    children,
}) => {
    const dispatch = useAppDispatch()
    const [isHovering, setIsHovering] = useState(false)

    function handleClick(): void {
        dispatch(changeCardBookmark(title))
    }

    function handleMouseEnter() {
        setIsHovering(true)
    }

    function handleMouseLeave() {
        setIsHovering(false)
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
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isHovering && <PlayVideoButton />}
            </div>
            <Bookmark isBookmarked={isBookmarked} handleClick={handleClick} />
            {children}
        </div>
    )
}
