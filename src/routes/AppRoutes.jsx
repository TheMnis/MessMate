import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

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

      {/* Student Routes */}
      <Route path="/student/*" element={<StudentRoutes />} />

      {/* Owner Routes */}
      <Route path="/owner/*" element={<OwnerRoutes />} />

      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;