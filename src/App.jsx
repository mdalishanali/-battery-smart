import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import HotToast from "./components/hotToast/HotToast";

function App() {
  return (
    <>
      <HotToast />
      <AppRoutes />
    </>
  );
}

export default App;
