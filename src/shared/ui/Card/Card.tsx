import React from "react"

interface CardProps {
    width: string
    height: string
    background: string
}

export const Card: React.FC<CardProps> = ({ width, height, background }) => {
    return (
        <div
            className={`block ${width} ${height} ${background} border-4 rounded-lg `}
        />
    )
}
