import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Checkbox,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { authAxios } from "../../helpers/authAxios";
import { handleErrorWithToast } from "../../helpers/toastMessage";
import { createAlertValidation } from "../../validation/createAlertValidation";

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const UpdateAlertDialog = ({ item, handleUpdate }) => {
  const { name, criteria, value, email, days, phone, _id } = item;
  const [open, setOpen] = useState(false);

  const updateAlert = (data) => {
    handleUpdate(_id, data);
    closeDialog();
  };

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => openDialog()}>Edit</button>
      <Dialog
        open={open}
        onClose={() => closeDialog()}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Edit Your ALert</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              name: name,
              criteria: criteria,
              value: value,
              days: days,
              email: email,
              phone: phone,
            }}
            enableReinitialize
            onSubmit={(values, { resetForm, setSubmitting }) => {
              updateAlert(values);
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
                      {week.map((name) => (
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
                    &nbsp;
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => closeDialog()}
                    >
                      Cancel
                    </Button>
                    <br />
                    <br />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateAlertDialog;
