import * as Yup from "yup";
export const registerValidation = Yup.object().shape({
        email: Yup.string().email().required("Enter valid email-id"),
        name: Yup.object().shape({
                first: Yup.string().matches(/[A-Z]/, 'Name should start with uppercase')
                        .matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Please enter first name"),
                last: Yup.string().matches(/[A-Z]/, 'Name should start with uppercase')
                        .matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Please enter last name"),
        }),
        password: Yup.string()
                .matches(
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
                )
                .required(
                        "Please valid password. One uppercase, one lowercase, one special character and no spaces"
                ),
        confirmPassword: Yup.string()
                .required("Required")
                .test(
                        "password-match",
                        "Password musth match",
                        function (value) {
                                return this.parent.password === value;
                        }
                ),
})

export const loginValidation = Yup.object().shape({
        email: Yup.string().email().required("Enter valid email-id"),
        password: Yup.string()
                .matches(
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
                )
                .required(
                        "Please enter valid password."
                ),
});
