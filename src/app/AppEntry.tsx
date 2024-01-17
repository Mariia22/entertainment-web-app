import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { appRouter } from "./appRouter"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./appStore"
import { SessionProvider } from "../entities/session/lib/SessionProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <SessionProvider>
                <RouterProvider router={appRouter()} />
            </SessionProvider>
        </ReduxProvider>
    </React.StrictMode>
)
