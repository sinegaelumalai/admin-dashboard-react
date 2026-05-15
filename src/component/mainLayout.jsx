import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const MainLayout = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">

            {/* 🔥 SIDEBAR */}
            <div
                className={`fixed md:static top-0 left-0 h-full z-50 bg-white w-64 
                transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                <Sidebar />
            </div>

            {/* 🔥 MAIN CONTENT */}
            <div className="flex-1 flex flex-col w-full">

                {/* PASS setIsOpen */}
                <Navbar setIsOpen={setIsOpen} />

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default MainLayout;