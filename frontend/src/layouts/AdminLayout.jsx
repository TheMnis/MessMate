import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminTopbar from "../components/admin/AdminTopbar";
import AdminMobileSidebar from "../components/admin/AdminMobileSidebar";

function AdminLayout() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--color-background)",
      }}
    >
      <div className="flex">

        {/* Desktop Sidebar */}

        <div className="hidden xl:block">

          <AdminSidebar />

        </div>

        {/* Mobile Sidebar */}

        <div className="xl:hidden">

          <AdminMobileSidebar />

        </div>

        {/* Main Content */}

        <main className="min-w-0 flex-1">

          <AdminTopbar />

          <div className="p-4 md:p-6 lg:p-8">

            <Outlet />

          </div>

        </main>

      </div>

    </div>
  );
}

export default AdminLayout;