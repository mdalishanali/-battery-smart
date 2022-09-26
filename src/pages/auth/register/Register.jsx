import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import {
  handleErrorWithToast,
  handleToastMsg,
} from "../../../helpers/toastMessage";
import { authRegisterAction } from "../../../redux/auth/action";
import { registerValidation } from "../../../validation/auth.validation";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerUser = (user) => {
    dispatch(authRegisterAction(user, handleRegisterSuccess, handleError));
  };

  const handleRegisterSuccess = () => {
    handleToastMsg("Account created successfully...");
    navigate("/dashboard");
  };

  const handleError = (error) => {
    handleErrorWithToast(error);
  };

  return (
    <>
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
            registerUser(values);
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
