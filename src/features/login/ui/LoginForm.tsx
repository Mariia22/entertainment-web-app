import { Field, Formik } from "formik"
import React from "react"
import { loginSchema } from "../model/loginFormSchema"
import { Button } from "../../../shared/ui/Button/Button"
import { TextInput } from "../../../shared/ui/TextInput/TextInput"
import { textsAndPlaceholders } from "../../../shared/model/appTextsAndPlaceHolders"

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
            {({ handleSubmit }) => (
                <form
                    className="flex flex-col gap-6 mt-6"
                    autoComplete="on"
                    onSubmit={handleSubmit}
                >
                    <Field
                        id="email"
                        name="email"
                        placeholder="Email address"
                        component={TextInput}
                    />
                    <Field
                        id="password"
                        name="password"
                        type="password"
                        component={TextInput}
                        placeholder="Password"
                    />
                    <Button styles="w-[336px] h-[48px] bg-contrast mt-10 mb-6 rounded-md self-center hover:bg-text hover:text-primaryPale">
                        {textsAndPlaceholders.authForm.login}
                    </Button>
                </form>
            )}
        </Formik>
    )
}
