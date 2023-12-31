import React from "react"
import { Outlet } from "react-router-dom"
import { LayoutHeader } from "../../widgets/LayoutHeader"
import { Logo } from "../../widgets/LayoutHeader/ui/Logo/Logo"
import { Navigation } from "../../shared/ui/Navigation/Navigation"
import { UserAvatar } from "../../shared/ui/UserAvatar/UserAvatar"
import { PageWrapper } from "../../shared/ui/PageWrapper/PageWrapper"

export const BaseLayout = (
    <div className="font-light font-outfit min-w-[375px] overflow-hidden">
        <LayoutHeader>
            <Logo />
            <Navigation />
            <UserAvatar />
        </LayoutHeader>
        <PageWrapper>
            <Outlet />
        </PageWrapper>
    </div>
)
