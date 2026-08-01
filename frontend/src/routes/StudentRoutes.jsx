import { Routes, Route, Navigate } from "react-router-dom";

import StudentLayout from "../layouts/StudentLayout";

import StudentDashboard from "../pages/student/StudentDashboard";
import StudentMenu from "../pages/student/StudentMenu";
import Attendance from "../pages/student/Attendance";
import Subscription from "../pages/student/Subscription";
import Notifications from "../pages/student/Notifications";
import Profile from "../pages/student/Profile";

function StudentRoutes() {
  return (
    <Routes>
      <Route element={<StudentLayout />}>
        <Route
          index
          element={<Navigate to="dashboard" replace />}
        />

        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="menu" element={<StudentMenu />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default StudentRoutes;