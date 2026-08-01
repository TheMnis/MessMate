import { Routes, Route } from "react-router-dom";

import OwnerLayout from "../layouts/OwnerLayout";

import OwnerDashboard from "../pages/owner/OwnerDashboard";
import Students from "../pages/owner/Students";
import OwnerMenu from "../pages/owner/OwnerMenu";
import Meals from "../pages/owner/Meals";
import Inventory from "../pages/owner/Inventory";
import Reports from "../pages/owner/Reports";
import Subscriptions from "../pages/owner/Subscriptions";
import Profile from "../pages/owner/Profile";

function OwnerRoutes() {
  return (
    <Routes>
      <Route element={<OwnerLayout />}>
        <Route
          index
          element={<OwnerDashboard />}
        />

        <Route
          path="dashboard"
          element={<OwnerDashboard />}
        />

        <Route
          path="students"
          element={<Students />}
        />

        <Route
          path="menu"
          element={<OwnerMenu />}
        />

        <Route
          path="meals"
          element={<Meals />}
        />

        <Route
          path="inventory"
          element={<Inventory />}
        />

        <Route
          path="subscriptions"
          element={<Subscriptions />}
        />

        <Route
          path="reports"
          element={<Reports />}
        />

        <Route
          path="profile"
          element={<Profile />}
        />
      </Route>
    </Routes>
  );
}

export default OwnerRoutes;