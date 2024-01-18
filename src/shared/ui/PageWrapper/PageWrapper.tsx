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
        return (
            <div>{`${
                errorMessage.download
            },  (error - ${error.message?.toLowerCase()})`}</div>
        )
    }

    return (
        <div className="flex flex-col pl-4 pr-4 pb-16 md:pl-6 md:pr-6 xl:pl-8 xl:pr-8">
            {children}
        </div>
    )
}
