import { Outlet } from "react-router-dom";

import OwnerSidebar from "../components/owner/OwnerSidebar";
import OwnerTopbar from "../components/owner/OwnerTopbar";
import OwnerMobileSidebar from "../components/owner/OwnerMobileSidebar";

function OwnerLayout() {
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

          <OwnerSidebar />

        </div>

        {/* Mobile Sidebar */}

        <div className="xl:hidden">

          <OwnerMobileSidebar />

        </div>

        {/* Main Content */}

        <main className="min-w-0 flex-1">

          <OwnerTopbar />

          <div className="p-4 md:p-6 lg:p-8">

            <Outlet />

          </div>

        </main>

      </div>
    </div>
  );
}

export default OwnerLayout;