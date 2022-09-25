import React from "react";
import { Toaster } from "react-hot-toast";

const HotToast = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        success: {
          theme: {
            primary: "#4aed88",
            duration: 100000,
          },
        },
      }}
    />
  );
};

export default HotToast;
