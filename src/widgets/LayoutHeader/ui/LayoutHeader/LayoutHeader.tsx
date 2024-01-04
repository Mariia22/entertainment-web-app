import React from "react"

interface HeaderProps {
    children: React.ReactNode
}

export const LayoutHeader: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header className="grid grid-cols-[1fr_2fr_1fr] grid-rows-1 pl-4 pr-4 pt-[18px] pb-[18px] bg-primaryPale md:rounded-[10px] md:mt-6">
            {children}
        </header>
    )
}
