import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { AuthGuard } from "./Protected";

// lazy loading
const Login = lazy(() => import("../pages/auth/login/Login"));
const Register = lazy(() => import("../pages/auth/register/Register"));
const Home = lazy(() => import("../pages/home/Home"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          />
          {/* <Route
            path="*"
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
