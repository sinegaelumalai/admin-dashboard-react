import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />
                {/* Content */}
                <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

export default MainLayout;