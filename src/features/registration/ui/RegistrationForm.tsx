import { Field, Formik } from "formik"
import React from "react"
import { Button } from "../../../shared/ui/Button/Button"
import { registrationSchema } from "../model/registrationFormSchema"
import { TextInput } from "../../../shared/ui/TextInput/TextInput"
import { textsAndPlaceholders } from "../../../shared/model/appTextsAndPlaceHolders"

interface RegistrationFormProps {
    email: string
    password: string
    repeatPassword: string
}

export const RegistrationForm: React.FC = () => {
    return (
        <Formik
            initialValues={{ email: "", password: "", repeatPassword: "" }}
            validationSchema={registrationSchema}
            onSubmit={(values: RegistrationFormProps) => {
                console.log(values)
            }}
        >
            {({ handleSubmit }) => (
                <form
                    className="flex flex-col gap-6 mt-5"
                    autoComplete="on"
                    onSubmit={handleSubmit}
                >
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
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        placeholder="Repeat password"
                    />
                    <Button styles="w-full h-[48px] bg-contrast mt-10 mb-6 rounded-md self-center hover:bg-text hover:text-primaryPale">
                        {textsAndPlaceholders.authForm.registration}
                    </Button>
                </form>
            )}
        </Formik>
    )
}
