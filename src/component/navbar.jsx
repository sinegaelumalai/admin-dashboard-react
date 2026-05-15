import { FiSearch } from "react-icons/fi"; // ✅ keep search only
import { useLocation } from "react-router-dom";
import bellicon from "../assets/bellicon.png";
import femalelogo from "../assets/femalelogo.png";
import slogo2 from "../assets/slogo2.png"; // ✅ use your image

const Navbar = ({ setIsOpen }) => {

  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/") return "Overview";
    if (location.pathname === "/transactions") return "Transactions";
    if (location.pathname === "/accounts") return "Accounts";
    if (location.pathname === "/investments") return "Investments";
    if (location.pathname === "/creditcards") return "Credit Cards";
    if (location.pathname === "/loans") return "Loans";
    if (location.pathname === "/settings") return "Settings";
    if (location.pathname === "/settings/preferences") return "Preferences";
    if (location.pathname === "/settings/security") return "Security";

    return "Dashboard";
  };

  return (
    <div className="w-full h-16 bg-gray-50 flex items-center justify-between px-4 md:px-6">

      {/* 🔹 LEFT (MENU IMAGE) */}
      <div
        onClick={() => setIsOpen(prev => !prev)}
        className="md:hidden cursor-pointer"
      >
        <div className="w-6 h-[2px] bg-gray-700 mb-1"></div>
        <div className="w-6 h-[2px] bg-gray-700 mb-1"></div>
        <div className="w-6 h-[2px] bg-gray-700"></div>
      </div>

      {/* 🔹 TITLE */}
      <div className="flex-1 flex justify-center md:justify-start">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-700">
          {getTitle()}
        </h1>
      </div>

      {/* 🔹 RIGHT */}
      <div className="flex items-center gap-3 md:gap-5">

        <div className="hidden md:flex items-center bg-gray-200 px-4 py-2 rounded-full w-72">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div className="md:hidden bg-gray-200 p-2 rounded-full">
          <FiSearch className="text-gray-500" />
        </div>

        <div className="bg-gray-200 p-2 rounded-full cursor-pointer">
          ⚙️
        </div>

        <div className="relative bg-gray-200 p-2 rounded-full cursor-pointer">
          <img src={bellicon} className="w-4 h-4 md:w-5 md:h-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
            1
          </span>
        </div>

        <img
          src={femalelogo}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;