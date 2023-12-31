import React, { ReactNode, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../model/hooks"
import {
    fetchContent,
    selectError,
    selectLoading,
} from "../../../entities/entertainment/model/slice"
import { Loading } from "../Loading/Loading"
import { errorMessage } from "../../api/apiError"

interface WrapperProps {
    children: ReactNode
}
export const PageWrapper: React.FC<WrapperProps> = ({ children }) => {
    const loading = useAppSelector(selectLoading)
    const error = useAppSelector(selectError)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchContent())
    }, [])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>{errorMessage.download}</div>
    }

    return <div className="flex flex-col pb-16">{children}</div>
}
