import React from "react"

interface CardProps {
    width: string
    height: string
    url: string
}

export const Card: React.FC<CardProps> = ({ width, height, url }) => {
    return (
        <div
            style={{ backgroundImage: `url(${url})` }}
            className={`block ${width} ${height} bg-cover bg-no-repeat bg-center rounded-lg`}
        />
    )
}
