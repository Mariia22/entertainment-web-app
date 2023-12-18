import React from "react"
import { createHashRouter } from "react-router-dom"
import { BaseLayout } from "./ui/baseLayout"
import { MainPage } from "../pages/main"
import { MoviePage } from "../pages/movie"
import { SeriesPage } from "../pages/series"
import { BookmarkPage } from "../pages/bookmark"

export const appRouter = () =>
    createHashRouter([
        {
            element: BaseLayout,
            errorElement: <div>error</div>,

            children: [
                {
                    path: "/",
                    element: <MainPage />,
                },
                {
                    path: "movies",
                    element: <MoviePage />,
                },
                {
                    path: "tv-series",
                    element: <SeriesPage />,
                },
                {
                    path: "bookmark",
                    element: <BookmarkPage />,
                },
            ],
        },
    ])
