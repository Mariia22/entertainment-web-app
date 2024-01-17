import React, { ReactNode, useEffect } from "react"
import { useAppDispatch } from "../../../shared/model/hooks"
import { checkAuth } from "../model/slice"

interface SessionProps {
    children: ReactNode
}

export const SessionProvider: React.FC<SessionProps> = ({ children }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(checkAuth)
        }
    }, [])

    return <div>{children}</div>
}
