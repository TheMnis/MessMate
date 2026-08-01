import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

import StudentRoutes from "./StudentRoutes";
import OwnerRoutes from "./OwnerRoutes";
import AdminRoutes from "./AdminRoutes";

import NotFound from "../pages/error/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Public */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />

      {/* Student */}

      <Route
        path="/student/*"
        element={<StudentRoutes />}
      />

      {/* Owner */}

      <Route
        path="/owner/*"
        element={<OwnerRoutes />}
      />

      {/* Admin */}

      <Route
        path="/admin/*"
        element={<AdminRoutes />}
      />

      {/* 404 */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;