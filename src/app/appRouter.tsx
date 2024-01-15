import React, { ReactElement } from "react"
import { Navigate, createHashRouter } from "react-router-dom"
import { BaseLayout } from "./ui/baseLayout"
import { MainPage } from "../pages/main"
import { MoviePage } from "../pages/movie"
import { SeriesPage } from "../pages/series"
import { BookmarkPage } from "../pages/bookmark"
import { LoginPage } from "../pages/login"
import { BaseLayoutUnauthorized } from "./ui/baseLayoutUnauthorized"
import { useAppSelector } from "../shared/model/hooks"
import { selectIsAuthorized } from "../entities/session/model/slice"

type AuthGuardProps = {
    children: ReactElement
}

function GuestGuard({ children }: AuthGuardProps) {
    const isAuthorized = useAppSelector(selectIsAuthorized)

    if (!isAuthorized) return <Navigate to="/login" />

    return children
}

function AuthGuard({ children }: AuthGuardProps) {
    const isAuthorized = useAppSelector(selectIsAuthorized)

    if (isAuthorized) return <Navigate to="/" />

    return children
}

export const appRouter = () =>
    createHashRouter([
        {
            element: BaseLayoutUnauthorized,
            errorElement: <div>error</div>,
            children: [
                {
                    path: "/login",
                    element: (
                        <AuthGuard>
                            <LoginPage />
                        </AuthGuard>
                    ),
                },
            ],
        },
        {
            element: BaseLayout,
            errorElement: <div>error</div>,

            children: [
                {
                    path: "/",
                    element: (
                        <GuestGuard>
                            <MainPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: "/movies",
                    element: (
                        <GuestGuard>
                            <MoviePage />
                        </GuestGuard>
                    ),
                },
                {
                    path: "/tv-series",
                    element: (
                        <GuestGuard>
                            <SeriesPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: "/bookmark",
                    element: (
                        <GuestGuard>
                            <BookmarkPage />
                        </GuestGuard>
                    ),
                },
            ],
        },
    ])
