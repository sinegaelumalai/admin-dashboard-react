import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import navlogo from "../assets/navlogo.png";
import bellicon from "../assets/bellicon.png"; // or svg

const Navbar = ({ setIsOpen }) => {
  return (
    <div className="w-full h-14 bg-white flex items-center justify-between px-4 shadow-sm">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 w-full md:w-1/2">

        {/* ✅ MENU BUTTON (mobile only) */}
        <button
          className="md:hidden text-xl text-gray-600"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>

        {/* ✅ DESKTOP MENU ICON */}
        <FiMenu className="hidden md:block text-xl text-gray-600 cursor-pointer" />

        {/* SEARCH */}
        <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full w-full max-w-sm">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* NOTIFICATION */}
        <div className="relative">
          <img
            src={bellicon}
            alt="bell"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
          />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
            6
          </span>
        </div>

        {/* LANGUAGE (hide mobile) */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer">
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="flag"
            className="w-5 h-5 rounded-full"
          />

          <span className="text-sm text-gray-700">English</span>

          {/* dropdown arrow */}
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={navlogo}
            alt="profile"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full"
          />

          <div className="hidden md:block text-sm">
            <p className="font-medium">Moni Roy</p>
            <p className="text-gray-400 text-xs">Admin</p>
          </div>

          {/* Dropdown circle icon */}
          <div className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full">
            <svg
              className="w-3 h-3 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;