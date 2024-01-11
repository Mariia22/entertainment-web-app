import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/appStore"
import { DependencyList, useCallback, useEffect } from "react"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useDebounce = (
    effect: () => void,
    dependencies: DependencyList,
    delay: number
) => {
    const callback = useCallback(effect, dependencies)

    useEffect(() => {
        const timeout = setTimeout(callback, delay)
        return () => clearTimeout(timeout)
    }, [callback, delay])
}
