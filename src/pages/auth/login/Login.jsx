import { Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import { loginValidation } from "../../../validation/auth.validation";
import {
  handleErrorWithToast,
  handleToastMsg,
} from "../../../helpers/toastMessage";
import axios from "axios";

const setUser = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("jwt", JSON.stringify(token));
};

const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const login = (user, setSubmitDisable) => {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    setLoader(true);
    setSubmitDisable(true);
    axios
      .post(`${baseUrl}/auth/login`, user)
      .then(({ data }) => {
        const { token, user } = data;
        setUser(user, token);
        handleORegisterSuccess('Successfullt Logged In')
        setLoader(false);
        setSubmitDisable(true);
      })
      .catch((error) => {
        console.log("error", error);
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
      <h2>Sign into your account</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          login(values, actions.setSubmitting);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={loginValidation}
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
              <h1>Login </h1>
              <div>
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

                <TextField
                  name="password"
                  id="password"
                  label="Password"
                  value={values.password}
                  type="password"
                  helperText={
                    errors.password && touched.password
                      ? "Please enter valid password"
                      : "Enter password"
                  }
                  error={errors.password && touched.password ? true : false}
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
                  Login
                </Button>
                <br />
                <br />
              </div>
            </Form>
          );
        }}
      </Formik>
      <p>
        Don't have an account?
        <Link to={"/register"}>Register here</Link>
      </p>
    </>
  );
};

export default Login;
