import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";

const UpdateAlertDialog = () => {
  //   const { title, description, isCompleted, _id } = todo;
  const [open, setOpen] = useState(false);

  const updateTodo = (todo) => {
    handleUpdate(_id, todo);
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
          {/* <Formik
            initialValues={{
              title: title,
              description: description,
              isCompleted: isCompleted,
            }}
            enableReinitialize
            onSubmit={(values, actions) => {
              updateTodo(values);
              setTimeout(() => {
                actions.setSubmitting(false);
              }, 500);
            }}
        //     validationSchema={todoValidation}
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
                <Form style={{ padding: "15px" }}>
                  <TextField
                    name="title"
                    id="title"
                    label="Title"
                    value={values.title}
                    type="text"
                    helperText={
                      errors.title && touched.title ? errors.title : null
                    }
                    error={errors.title && touched.title ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <br />
                  <br />
                  <TextField
                    name="description"
                    id="description"
                    label="Description"
                    value={values.description}
                    type="text"
                    helperText={
                      errors.description && touched.description
                        ? errors.description
                        : null
                    }
                    error={
                      errors.description && touched.description ? true : false
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <br />
                  <br />
                  <TextField
                    name="isCompleted"
                    id="isCompleted"
                    label="isCompleted"
                    value={values.isCompleted}
                    type="text"
                    helperText={
                      errors.isCompleted && touched.isCompleted
                        ? errors.isCompleted
                        : null
                    }
                    error={
                      errors.isCompleted && touched.isCompleted ? true : false
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <br />
                  <br />

                  <DialogActions>
                    <Button
                      color="secondary"
                      disabled={isSubmitting}
                      onClick={() => closeDialog()}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      disabled={isSubmitting}
                    >
                      Update Todo
                    </Button>
                  </DialogActions>
                </Form>
              );
            }}
          </Formik> */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateAlertDialog;
