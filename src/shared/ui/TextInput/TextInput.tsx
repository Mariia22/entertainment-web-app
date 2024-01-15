import { FieldProps } from "formik"
import React from "react"

interface TextInputProps {
    type?: string
}

export const TextInput: React.FC<TextInputProps & FieldProps> = ({
    field,
    form: { touched, errors },
    ...props
}) => (
    <div className="relative">
        <input
            type="text"
            {...field}
            {...props}
            className="w-full h-[37px] border-b border-secondary pl-4 pb-[18px] bg-primaryPale text-[15px] outline-none caret-contrast placeholder:opacity-50 focus:border-text autofill:bg-primaryPale"
        />
        {touched[field.name] && errors[field.name] && (
            <div className="absolute top-0 right-0 text-contrast">
                <>{errors[field.name]}</>
            </div>
        )}
    </div>
)
