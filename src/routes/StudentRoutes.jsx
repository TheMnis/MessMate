import { Routes, Route } from "react-router-dom";

import StudentDashboard from "../pages/student/StudentDashboard";
import StudentMenu from "../pages/student/StudentMenu";
import Attendance from "../pages/student/Attendance";
import Subscription from "../pages/student/Subscription";
import Notifications from "../pages/student/Notifications";
import Profile from "../pages/student/Profile";

function StudentRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<StudentDashboard />} />
      <Route path="menu" element={<StudentMenu />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="subscription" element={<Subscription />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default StudentRoutes;