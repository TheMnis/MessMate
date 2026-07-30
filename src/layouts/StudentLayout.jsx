import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function StudentLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />

      {/* Main Content */}

      <div className="flex-1 flex flex-col lg:ml-0">

        <Topbar
          toggleSidebar={openSidebar}
        />

        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">

          {children}

        </main>

      </div>

    </div>
  );
}

export default StudentLayout;