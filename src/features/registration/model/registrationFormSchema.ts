import * as Yup from "yup"

export const registrationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Can't be empty"),
    password: Yup.string()
        .required("Can't be empty")
        .min(8, "It should be 8 chars minimum")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Add a special character"
        ),
    repeatPassword: Yup.string()
        .required("Can't be empty")
        .min(8, "It should be 8 chars minimum")
        .matches(/^(?=.*[@$!%*#?&]){8,}$/, "Add a special character"),
})
