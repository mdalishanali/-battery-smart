import {
  Button,
  Checkbox,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { createAlertValidation } from "../../validation/createAlertValidation";
import {
  handleErrorWithToast,
  handleToastMsg,
} from "../../helpers/toastMessage";
import axios from "axios";
import { authAxios } from "../../helpers/authAxios";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const baseUrl = import.meta.env.VITE_APP_API_URL;

const CreateAlert = () => {
  const [loader, setLoader] = useState(false);

  const createAlertApiCall = (data, resetForm, setSubmitDisable) => {
    setLoader(true);
    setSubmitDisable(true);
    authAxios
      .post(`alert`, data)
      .then(({ data }) => {
        setLoader(false);
        handleToastMsg("Alert created successfully");
        resetForm();
      })
      .catch((error) => {
        handleErrorWithToast(error);
        setLoader(false);
        setSubmitDisable(false);
      });
  };
  return (
    <section>
      <h2>Create Alert</h2>

      <Formik
        initialValues={{
          name: "",
          criteria: "",
          value: "",
          days: [],
          email: "",
          phone: "",
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          createAlertApiCall(values, resetForm, setSubmitting);
          console.log(values);
          setTimeout(() => {
            setSubmitting(true);
          }, 500);
        }}
        validationSchema={createAlertValidation}
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
              <div>
                <TextField
                  name="name"
                  id="name"
                  label="Name"
                  value={values.name}
                  type="text"
                  helperText={
                    errors.name && touched.name ? errors.name : "Enter name"
                  }
                  error={errors.name && touched.name ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <br />
                <InputLabel id="criteria">Criteria</InputLabel>

                <Select
                  label="Criteria"
                  labelId="criteria"
                  id="criteria"
                  name="criteria"
                  value={values.criteria}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.criteria && touched.criteria ? true : false}
                  fullWidth
                >
                  <MenuItem value={"Greater"}>Greater</MenuItem>
                  <MenuItem value={"Less"}>Less</MenuItem>
                </Select>
                <br />
                <br />

                <TextField
                  name="value"
                  id="value"
                  label="Value"
                  value={values.value}
                  type="number"
                  helperText={
                    errors.value && touched.value
                      ? "Please enter valid value"
                      : "Enter value"
                  }
                  error={errors.value && touched.value ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <br />
                {/* alishan */}
                <InputLabel id="demo-multiple-name-label">Days</InputLabel>
                <Select
                  labelId="days"
                  id="days"
                  name="days"
                  multiple
                  value={values.days}
                  fullWidth
                  onChange={handleChange}
                >
                  {days.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                {/* alishan */}
                <br />
                <br />

                <TextField
                  name="email"
                  id="email"
                  label="Email"
                  value={values.email}
                  type="email"
                  helperText={
                    errors.email && touched.email
                      ? "Please enter valid email"
                      : "Enter email"
                  }
                  error={errors.email && touched.email ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <br />
                <TextField
                  name="phone"
                  id="value"
                  label="Phone"
                  value={values.phone}
                  type="text"
                  helperText={
                    errors.phone && touched.phone
                      ? "Please enter valid phone"
                      : "Enter phone"
                  }
                  error={errors.phone && touched.phone ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
                <br />
                <br />
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default CreateAlert;
