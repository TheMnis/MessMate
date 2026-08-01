import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/Users";
import Messes from "../pages/admin/Messes";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";

function AdminRoutes() {
  return (
    <Routes>

      <Route
        element={<AdminLayout />}
      >

        <Route
          index
          element={
            <Navigate
              to="/admin/dashboard"
              replace
            />
          }
        />

        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="users"
          element={<Users />}
        />

        <Route
          path="messes"
          element={<Messes />}
        />

        <Route
          path="reports"
          element={<Reports />}
        />

        <Route
          path="settings"
          element={<Settings />}
        />

      </Route>

    </Routes>
  );
}

export default AdminRoutes;