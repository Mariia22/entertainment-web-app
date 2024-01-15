import React from "react"

interface LinkProps {
    text: string
    link: string
    handleClick: () => void
}

export const LoginFormLink: React.FC<LinkProps> = ({
    text,
    link,
    handleClick,
}) => {
    return (
        <div className="flex self-center gap-2">
            <p>{text}</p>
            <a className="text-contrast cursor-pointer" onClick={handleClick}>
                {link}
            </a>
        </div>
    )
}
