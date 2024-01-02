import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { appRouter } from "./appRouter"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./appStore"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <RouterProvider router={appRouter()} />
        </ReduxProvider>
    </React.StrictMode>
)
