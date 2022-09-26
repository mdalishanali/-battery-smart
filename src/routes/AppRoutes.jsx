import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AllComp from "../components/allComp/AllComp";
import Loader from "../components/loader/Loader";
import { Revenue } from "../components/revenue/Revenue";
import AlertTable from "../components/table/AlertTable";
import Ventillation from "../components/ventillation/Ventillation";
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
            exact
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          >
            <Route path="ventillation" element={<Ventillation />} exact />
            <Route path="" element={<AllComp />} exact />
            <Route path="revenue" element={<Revenue />} exact />
          </Route>
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
