import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { navigationList } from "../appNavigation"

export const BaseLayout = (
    <div className="max-w-[375px] overflow-hidden mt-[18px] ml-4 mr-4">
        <div>
            {navigationList.map((link) => (
                <NavLink key={link.id} to={link.path}>
                    {link.icon}
                </NavLink>
            ))}
        </div>
        <Outlet />
    </div>
)
