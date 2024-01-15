import React from "react"
import { Outlet } from "react-router-dom"
import { Logo } from "../../widgets/LayoutHeader/ui/Logo/Logo"

export const BaseLayoutUnauthorized = (
    <div className="flex flex-col items-center font-light font-outfit min-w-[375px] mt-20 overflow-hidden">
        <Logo />
        <Outlet />
    </div>
)
