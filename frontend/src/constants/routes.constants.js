export const ROUTES = {
  /* ---------- Public ---------- */

  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",

  /* ---------- Student ---------- */

  STUDENT: "/student",
  STUDENT_DASHBOARD: "/student/dashboard",
  STUDENT_ATTENDANCE: "/student/attendance",
  STUDENT_MENU: "/student/menu",
  STUDENT_NOTIFICATIONS: "/student/notifications",
  STUDENT_SUBSCRIPTION: "/student/subscription",
  STUDENT_PROFILE: "/student/profile",

  /* ---------- Owner ---------- */

  OWNER: "/owner",
  OWNER_DASHBOARD: "/owner/dashboard",
  OWNER_STUDENTS: "/owner/students",
  OWNER_MENU: "/owner/menu",
  OWNER_MEALS: "/owner/meals",
  OWNER_INVENTORY: "/owner/inventory",
  OWNER_SUBSCRIPTIONS: "/owner/subscriptions",
  OWNER_REPORTS: "/owner/reports",
  OWNER_PROFILE: "/owner/profile",

  /* ---------- Admin ---------- */

  ADMIN: "/admin",
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_USERS: "/admin/users",
  ADMIN_MESSES: "/admin/messes",
  ADMIN_REPORTS: "/admin/reports",
  ADMIN_SETTINGS: "/admin/settings",

  /* ---------- Error ---------- */

  NOT_FOUND: "*",
};

export default ROUTES;