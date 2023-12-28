import React from "react"

interface HeaderProps {
    children: string
}

export const HeaderSection: React.FC<HeaderProps> = ({ children }) => {
    return <h2 className="text-xl">{children}</h2>
}
