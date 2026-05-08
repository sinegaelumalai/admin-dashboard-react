import { FiMenu, FiSearch, FiBell } from "react-icons/fi";

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
          <FiBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
            6
          </span>
        </div>

        {/* LANGUAGE (hide mobile) */}
        <div className="hidden md:flex items-center gap-1 cursor-pointer">
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="flag"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-sm">English</span>
        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full"
          />
          <div className="hidden md:block text-sm">
            <p className="font-medium">Moni Roy</p>
            <p className="text-gray-400 text-xs">Admin</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;