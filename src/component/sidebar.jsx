import { NavLink } from "react-router-dom";
import {
    MdDashboard,
    MdOutlineInventory2,
    MdFavoriteBorder,
    MdInbox,
    MdList,
    MdOutlineBarChart,
    MdOutlineCalendarToday,
    MdOutlineContacts,
    MdOutlineSettings,
    MdLogout
} from "react-icons/md";

const Sidebar = () => {

    const menuClass =
        "flex items-center gap-2 py-2 px-3 text-xs rounded-md text-gray-600 hover:bg-blue-100";

    const activeClass =
        "flex items-center gap-2 py-2 px-3 text-xs rounded-md bg-blue-500 text-white";

    return (
        <div className="w-64 min-h-screen shadow-md flex flex-col">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-500 px-4 py-3">
                Dash<span className="text-black">Stack</span>
            </h1>

            {/* MENU + BOTTOM SPLIT */}
            <div className="flex flex-col h-full">

                {/* TOP MENU */}
                <div className="space-y-1">

                    <NavLink to="/" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdDashboard size={20} /> Dashboard
                    </NavLink>

                    <NavLink to="/products" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdOutlineInventory2 size={20} /> Products
                    </NavLink>

                    <NavLink to="/favorites" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdFavoriteBorder size={20} /> Favorites
                    </NavLink>

                    <NavLink to="/inbox" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdInbox size={20} /> Inbox
                    </NavLink>

                    <NavLink to="/orders" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdList size={20} /> Order Lists
                    </NavLink>

                    <NavLink to="/stock" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdOutlineInventory2 size={20} /> Product Stock
                    </NavLink>

                    {/* Pages */}
                    <p className="text-gray-400 text-xs mt-4 px-4">PAGES</p>

                    <NavLink to="/pricing" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdOutlineBarChart size={20} /> Pricing
                    </NavLink>

                    <NavLink to="/calendar" className={menuClass}>
                        <MdOutlineCalendarToday size={20} /> Calendar
                    </NavLink>

                    <NavLink to="/todo" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdList size={20} /> To-Do
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdOutlineContacts size={20} /> Contact
                    </NavLink>

                    <NavLink to="/invoice" className={menuClass}>
                        <MdOutlineBarChart size={20} /> Invoice
                    </NavLink>

                    <NavLink to="/uielements" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdOutlineBarChart size={20} /> UI Elements
                    </NavLink>

                    <NavLink to="/team" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdOutlineContacts size={20} /> Team
                    </NavLink>


                    <NavLink to="/settings" className={({ isActive }) => isActive ? activeClass : menuClass}>
                        <MdOutlineSettings size={20} /> Settings
                    </NavLink>



                </div>

                <div className="mt-2 mb-6 px-0">
                    <NavLink to="/logout" className={menuClass}>
                        <MdLogout size={20} /> Logout
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;