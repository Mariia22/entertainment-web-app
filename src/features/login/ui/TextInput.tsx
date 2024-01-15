import { FormikValues } from "formik"
import React from "react"

export const TextInput: React.FC<FormikValues> = (props) => {
    return (
        <div>
            <input
                className="w-full h-[37px] border-0 bg-primaryPale text-[15px] outline-none caret-contrast placeholder:opacity-50"
                {...props}
                autoComplete="off"
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
            />
        </div>
    )
}
