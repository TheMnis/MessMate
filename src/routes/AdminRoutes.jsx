import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/Users";
import Messes from "../pages/admin/Messes";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="messes" element={<Messes />} />
      <Route path="reports" element={<Reports />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}

export default AdminRoutes;