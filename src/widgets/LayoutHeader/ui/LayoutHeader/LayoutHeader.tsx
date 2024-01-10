import React from "react"

interface HeaderProps {
    children: React.ReactNode
}

export const LayoutHeader: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header className="grid grid-cols-3 grid-rows-1 pl-4 pr-4 pt-[18px] pb-[18px] items-center justify-evenly bg-primaryPale md:rounded-[10px] md:mt-6 md:ml-4 xl:grid-cols-1 xl:items-start xl:grid-rows-[100px_200px_1fr] xl:justify-items-center">
            {children}
        </header>
    )
}
