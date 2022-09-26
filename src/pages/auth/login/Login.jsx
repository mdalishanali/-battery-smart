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
import { useDispatch } from "react-redux";
import { authLoginAction } from "../../../redux/auth/action";

const setUser = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("jwt", JSON.stringify(token));
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = (user) => {
    dispatch(authLoginAction(user, handleRegisterSuccess, handleError));
  };

  const handleRegisterSuccess = () => {
    handleToastMsg("Logged in successfully...");
    navigate("/dashboard");
  };

  const handleError = (error) => {
    handleErrorWithToast(error);
  };

  return (
    <>
      <h2>Sign into your account</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          login(values);
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
                <Button type="submit" variant="contained" color="secondary">
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
