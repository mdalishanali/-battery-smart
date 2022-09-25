import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import {
  handleErrorWithToast,
  handleToastMsg,
} from "../../../helpers/toastMessage";
import { registerValidation } from "../../../validation/auth.validation";
const baseUrl = import.meta.env.VITE_APP_API_URL;

const setUser = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("jwt", JSON.stringify(token));
};
const Register = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const registerUser = (user, setSubmitDisable) => {
    setLoader(true);
    setSubmitDisable(true);
    axios
      .post(`${baseUrl}/auth/register`, user)
      .then(({ data }) => {
        const { token, user } = data;
        setUser(user, token);
        setLoader(false);
        handleORegisterSuccess("Successfully registered..");
        setSubmitDisable(true);
      })
      .catch((error) => {
        handleErrorWithToast(error);
        setLoader(false);
        setSubmitDisable(false);
      });
  };

  const handleORegisterSuccess = (msg) => {
    handleToastMsg(msg);
    navigate("/dashboard");
  };
  return (
    <>
      {loader && <Loader />}
      <h2>Create your account</h2>
      <div className="registerForm">
        <Formik
          initialValues={{
            email: "",
            name: {
              first: "",
              last: "",
            },
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, actions) => {
            registerUser(values, actions.setSubmitting);
            setTimeout(() => {
              actions.setSubmitting(true);
            }, 500);
          }}
          validationSchema={registerValidation}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
            } = props;
            return (
              <Form>
                <h1>Sign up</h1>

                <TextField
                  name="name.first"
                  id="name.first"
                  label="First Name"
                  value={values.name.first}
                  type="text"
                  helperText={
                    errors.name?.first && touched.name?.first
                      ? errors.name?.first
                      : "Enter your first name."
                  }
                  error={
                    errors.name?.first && touched.name?.first ? true : false
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <br />

                <TextField
                  name="name.last"
                  id="name.last"
                  label="Last Name"
                  value={values.name.last}
                  type="text"
                  helperText={
                    errors.name?.last && touched.name?.last
                      ? errors.name?.last
                      : "Enter your last name."
                  }
                  error={errors.name?.last && touched.name?.last ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <br />
                <TextField
                  name="password"
                  id="password"
                  label="Password"
                  value={values.password}
                  type="password"
                  helperText={
                    errors.password && touched.password
                      ? "Please valid password. One uppercase, one lowercase, one special character and no spaces"
                      : "One uppercase, one lowercase, one special character and no spaces"
                  }
                  error={errors.password && touched.password ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <br />
                <TextField
                  name="confirmPassword"
                  id="confirmPassword"
                  label="Confirm password"
                  value={values.confirmPassword}
                  type="password"
                  helperText={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : "Re-enter password to confirm"
                  }
                  error={
                    errors.confirmPassword && touched.confirmPassword
                      ? true
                      : false
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="password"
                />
                <br />
                <br />
                <TextField
                  name="email"
                  id="email"
                  label="Email-id"
                  value={values.email}
                  type="email"
                  helperText={
                    errors.email && touched.email
                      ? errors.email
                      : "Enter email-id"
                  }
                  error={errors.email && touched.email ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={isSubmitting}
                >
                  Register
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
      <p>
        Already have an account?
        <Link to={"/login"}>Login</Link>
      </p>
    </>
  );
};

export default Register;
