import React, { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    styles: string
    handleClick?: () => void
    type?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonProps> = ({
    children,
    styles,
    handleClick,
    type = "button",
}) => {
    return (
        <button
            className={`flex justify-around items-center ${styles}`}
            onClick={handleClick}
            type={type}
        >
            {children}
        </button>
    )
}
