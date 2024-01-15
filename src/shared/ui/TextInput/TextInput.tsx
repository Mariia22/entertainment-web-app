import { FormikValues } from "formik"
import React from "react"

export const TextInput: React.FC<FormikValues> = (props) => {
    return (
        <div>
            <input
                className="w-full h-[37px] border-b border-secondary pl-4 pb-[18px] bg-primaryPale text-[15px] outline-none caret-contrast placeholder:opacity-50 focus:border-text autofill:bg-primaryPale"
                {...props}
                autoComplete="on"
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
            />
        </div>
    )
}
