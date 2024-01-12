import React, { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    styles: string
    handleClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
    children,
    styles,
    handleClick,
}) => {
    return (
        <button
            className={`flex justify-around items-center ${styles}`}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
