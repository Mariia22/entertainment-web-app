import { Formik } from "formik"
import React from "react"
import { loginSchema } from "../model/loginFormSchema"
import { Button } from "../../../shared/ui/Button/Button"
import { TextInput } from "../../../shared/ui/TextInput/TextInput"

interface LoginFormProps {
    email: string
    password: string
}

export const LoginForm: React.FC = () => {
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values: LoginFormProps) => {
                console.log(values)
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <form
                    className="flex flex-col gap-6 mt-6"
                    autoComplete="on"
                    onSubmit={handleSubmit}
                >
                    <TextInput
                        id="email"
                        name="email"
                        placeholder="Email address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={errors.email && touched.email && errors.email}
                    />
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error={
                            errors.password &&
                            touched.password &&
                            errors.password
                        }
                    />
                    <Button styles="w-[336px] h-[48px] bg-contrast mt-10 mb-6 rounded-md self-center hover:bg-text hover:text-primaryPale">
                        Login to your account
                    </Button>
                </form>
            )}
        </Formik>
    )
}
