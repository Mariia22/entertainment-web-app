import { Formik } from "formik"
import React from "react"
import { Button } from "../../../shared/ui/Button/Button"
import { registrationSchema } from "../model/registrationFormSchema"
import { TextInput } from "../../../shared/ui/TextInput/TextInput"

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
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <form
                    className="flex flex-col gap-6 mt-5"
                    autoComplete="off"
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
                    <TextInput
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        placeholder="Repeat password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.repeatPassword}
                        error={
                            errors.repeatPassword &&
                            touched.repeatPassword &&
                            errors.repeatPassword
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
