import * as Yup from "yup"

export const registrationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .required("Required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Include at least one Uppercase, Lowercase, Number and a special character"
        ),
    repeatPassword: Yup.string()
        .required("Required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Include at least one Uppercase, Lowercase, Number and a special character"
        ),
})
