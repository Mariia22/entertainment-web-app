import { Field, Form, Formik } from "formik"
import React from "react"
import { loginSchema } from "../model/loginFormSchema"
import { Button } from "../../../shared/ui/Button/Button"
import { TextInput } from "../../../shared/ui/TextInput/TextInput"
import { textsAndPlaceholders } from "../../../shared/model/appTextsAndPlaceHolders"
import { useAppDispatch } from "../../../shared/model/hooks"
import { login } from "../../../entities/session/model/slice"

export const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch()

    function handleSubmit(email: string, password: string): void {
        dispatch(login({ email, password }))
    }

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values) => handleSubmit(values.email, values.password)}
        >
            <Form className="flex flex-col gap-6 mt-6" autoComplete="on">
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
                <Button
                    styles="w-full h-[48px] bg-contrast mt-10 mb-6 rounded-md self-center hover:bg-text hover:text-primaryPale"
                    type="submit"
                >
                    {textsAndPlaceholders.authForm.login}
                </Button>
            </Form>
        </Formik>
    )
}
