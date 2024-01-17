import { Field, Form, Formik } from "formik"
import React from "react"
import { Button } from "../../../shared/ui/Button/Button"
import { registrationSchema } from "../model/registrationFormSchema"
import { TextInput } from "../../../shared/ui/TextInput/TextInput"
import { textsAndPlaceholders } from "../../../shared/model/appTextsAndPlaceHolders"
import { useAppDispatch } from "../../../shared/model/hooks"
import { turnOnIsAuth } from "../../../entities/session/model/slice"

export const RegistrationForm: React.FC = () => {
    const dispatch = useAppDispatch()

    function handleSubmit(): void {
        //While server is in development
        //dispatch(registration({ email, password }))
        dispatch(turnOnIsAuth())
    }

    return (
        <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            validationSchema={registrationSchema}
            onSubmit={handleSubmit}
            //onSubmit={(values) => handleSubmit(values.email, values.password)}
        >
            <Form className="flex flex-col gap-6 mt-5" autoComplete="on">
                <Field
                    component={TextInput}
                    id="email"
                    name="email"
                    placeholder="Email address"
                />
                <Field
                    component={TextInput}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <Field
                    component={TextInput}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                />
                <Button
                    styles="w-full h-[48px] bg-contrast mt-10 mb-6 rounded-md self-center hover:bg-text hover:text-primaryPale"
                    type="submit"
                >
                    {textsAndPlaceholders.authForm.registration}
                </Button>
            </Form>
        </Formik>
    )
}
