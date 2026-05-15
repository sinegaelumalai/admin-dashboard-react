import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const MainLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* ✅ FIXED */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col md:ml-64">

        <Navbar setIsOpen={setIsOpen} />

        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default MainLayout;