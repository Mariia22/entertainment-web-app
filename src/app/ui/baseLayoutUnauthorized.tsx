import React from "react"
import { Outlet } from "react-router-dom"

export const BaseLayoutUnauthorized = (
    <div className="flex flex-col justify-center items-center font-light font-outfit min-w-[375px] h-screen overflow-hidden">
        <Outlet />
    </div>
)
