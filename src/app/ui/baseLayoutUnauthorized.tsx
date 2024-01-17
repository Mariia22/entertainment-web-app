import React from "react"
import { Outlet } from "react-router-dom"
import LogoIcon from "../../app/assets/icons/logo.svg"

export const BaseLayoutUnauthorized: React.ReactNode = (
    <div className="flex flex-col items-center font-light font-outfit min-w-[375px] mt-20 overflow-hidden">
        <LogoIcon />
        <Outlet />
    </div>
)
