import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import OwnerLogin from "../pages/auth/OwnerLogin";
import OwnerRegister from "../pages/auth/OwnerRegister";

import ProtectedRoute from "./ProtectedRoute";
import StudentRoutes from "./StudentRoutes";
import OwnerRoutes from "./OwnerRoutes";
import AdminRoutes from "./AdminRoutes";

import NotFound from "../pages/error/NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/owner/login" element={<OwnerLogin />} />

      <Route path="/owner/register" element={<OwnerRegister />} />

      {/* Student Routes */}
      <Route path="/student/*" element={<StudentRoutes />} />

      {/* Owner Routes */}
      <Route
        path="/owner/*"
        element={<ProtectedRoute allowedRoles={["Owner"]} />}
      >
        <Route path="*" element={<OwnerRoutes />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;