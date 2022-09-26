import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const createAlertValidation = Yup.object().shape({
  name: Yup.string().required("Required"),
  criteria: Yup.string().required("Required"),
  value: Yup.string().required("Required"),
  days: Yup.array().required("Required"),
  email: Yup.string().email().required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Required"),
});
