import * as Yup from "yup"

export const loginSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Can't be empty"),
    password: Yup.string()
        .required("Can't be empty")
        .min(8, "Password should be 8 chars minimum")
        .matches(
            /^(?=.*[@$!%*#?&]){8,}$/,
            "Include at least one special character"
        ),
})
