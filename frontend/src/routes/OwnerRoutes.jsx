import { Routes, Route } from "react-router-dom";

import OwnerDashboard from "../pages/owner/OwnerDashboard";
import OwnerMenu from "../pages/owner/OwnerMenu";
import Students from "../pages/owner/Students";
import Inventory from "../pages/owner/Inventory";
import Reports from "../pages/owner/Reports";
import Subscriptions from "../pages/owner/Subscriptions";
import Profile from "../pages/owner/Profile";

function OwnerRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<OwnerDashboard />} />
      <Route path="menu" element={<OwnerMenu />} />
      <Route path="students" element={<Students />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="reports" element={<Reports />} />
      <Route path="subscriptions" element={<Subscriptions />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default OwnerRoutes;