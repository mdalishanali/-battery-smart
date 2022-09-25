import toast from "react-hot-toast";

export const handleErrorWithToast = (error) => {
  if (error?.response?.data?.message) {
    toast.error(error.response.data?.message);
  } else {
    toast.error("Sorry, Something went wrong");
  }
};

export const handleToastMsg = (msg) => {
  toast.success(msg);
};

export const handleToastErrorMsg = (msg) => {
  toast.error(msg);
};
