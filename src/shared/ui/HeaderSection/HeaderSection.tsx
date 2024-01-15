import React from "react"

interface HeaderProps {
    children: string
}

export const HeaderSection: React.FC<HeaderProps> = ({ children }) => {
    return <h2 className="mt-6 text-xl">{children}</h2>
}
