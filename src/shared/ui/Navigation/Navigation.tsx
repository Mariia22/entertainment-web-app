import React from "react"
import { navigationList } from "../../../app/appNavigation"
import { NavLink } from "react-router-dom"

export const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-evenly xl:flex-col xl:h-[100%] xl:justify-between">
            {navigationList.map((link) => (
                <NavLink
                    key={link.id}
                    to={link.path}
                    className="fill-secondary hover:fill-text [&.active]:fill-text"
                >
                    {link.icon}
                </NavLink>
            ))}
        </nav>
    )
}
