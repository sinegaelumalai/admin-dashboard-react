import { FiMenu, FiSearch, FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
<div className="w-full h-14 bg-white flex items-center justify-between px-5 shadow-sm">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-6 w-1/2">

        {/* Menu Icon */}
        <FiMenu className="text-xl text-gray-600 cursor-pointer" />

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full w-full max-w-md">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <div className="relative">
          <FiBell className="text-xl text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            6
          </span>
        </div>

        {/* Language */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="flag"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-sm">English</span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium">Moni Roy</p>
            <p className="text-gray-400 text-xs">Admin</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;