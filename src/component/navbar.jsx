import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import navlogo from "../assets/navlogo.png";
import bellicon from "../assets/bellicon.png";

const Navbar = ({ setIsOpen }) => {
  const [openLang, setOpenLang] = useState(false);
  // ✅ NEW STATE (add top of component)
  const [openNotif, setOpenNotif] = useState(false);

  const [selectedLang, setSelectedLang] = useState({
    name: "English",
    flag: "https://flagcdn.com/w40/gb.png",
  });

  // ✅ NEW STATE (profile dropdown)
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="w-full h-14 bg-white flex items-center justify-between px-4 shadow-sm">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 w-full md:w-1/2">

        <button
          className="md:hidden text-xl text-gray-600"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>

        <FiMenu className="hidden md:block text-xl text-gray-600 cursor-pointer" />

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
        {/* 🔔 NOTIFICATION DROPDOWN */}
        <div className="relative">

          {/* Bell */}
          <div onClick={() => setOpenNotif(!openNotif)} className="cursor-pointer relative">
            <img
              src={bellicon}
              alt="bell"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
              6
            </span>
          </div>

          {/* Dropdown */}
          {openNotif && (
            <div className="absolute top-10 right-0 w-80 bg-white rounded-2xl shadow-xl z-50 p-4">

              <p className="text-gray-700 font-medium mb-3">Notification</p>

              {/* Settings */}
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 text-lg">⚙️</span>
                </div>
                <div>
                  <p className="text-gray-800 text-sm">Settings</p>
                  <p className="text-gray-400 text-xs">Update Dashboard</p>
                </div>
              </div>

              {/* Event */}
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-500 text-lg">📅</span>
                </div>
                <div>
                  <p className="text-gray-800 text-sm">Event Update</p>
                  <p className="text-gray-400 text-xs">An event date update again</p>
                </div>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-500 text-lg">👤</span>
                </div>
                <div>
                  <p className="text-gray-800 text-sm">Profile</p>
                  <p className="text-gray-400 text-xs">Update your profile</p>
                </div>
              </div>

              {/* Error */}
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-500 text-lg">❗</span>
                </div>
                <div>
                  <p className="text-gray-800 text-sm">Application Error</p>
                  <p className="text-gray-400 text-xs">Check your running application</p>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-3 pt-2 border-t text-gray-400 text-sm cursor-pointer hover:text-gray-600">
                See all notification
              </div>

            </div>
          )}
        </div>

        {/* 🌍 LANGUAGE (UNCHANGED) */}
        <div className="relative hidden md:flex items-center">

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpenLang(!openLang)}
          >
            <img src={selectedLang.flag} className="w-5 h-5 rounded-full" />
            <span className="text-sm text-gray-700">{selectedLang.name}</span>

            <svg
              className={`w-4 h-4 text-gray-500 transition-transform ${openLang ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          {openLang && (
            <div className="absolute top-10 left-0 w-56 bg-white rounded-xl shadow-lg p-3 z-50">
              <p className="text-gray-500 text-sm mb-2">Select Language</p>

              {/* English */}
              <div
                onClick={() => {
                  setSelectedLang({
                    name: "English",
                    flag: "https://flagcdn.com/w40/gb.png",
                  });
                  setOpenLang(false);
                }}
                className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/w40/gb.png" className="w-5 h-5" />
                  <span>English</span>
                </div>
                {selectedLang.name === "English" && <span>✔</span>}
              </div>

              {/* French */}
              <div
                onClick={() => {
                  setSelectedLang({
                    name: "French",
                    flag: "https://flagcdn.com/w40/fr.png",
                  });
                  setOpenLang(false);
                }}
                className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/w40/fr.png" className="w-5 h-5" />
                  <span>French</span>
                </div>
                {selectedLang.name === "French" && <span>✔</span>}
              </div>

              {/* Spanish */}
              <div
                onClick={() => {
                  setSelectedLang({
                    name: "Spanish",
                    flag: "https://flagcdn.com/w40/es.png",
                  });
                  setOpenLang(false);
                }}
                className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/w40/es.png" className="w-5 h-5" />
                  <span>Spanish</span>
                </div>
                {selectedLang.name === "Spanish" && <span>✔</span>}
              </div>
            </div>
          )}
        </div>

        {/* 🔥 PROFILE DROPDOWN (NEW) */}
        <div className="relative">

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpenProfile(!openProfile)}
          >
            <img
              src={navlogo}
              alt="profile"
              className="w-7 h-7 md:w-8 md:h-8 rounded-full"
            />

            <div className="hidden md:block text-sm">
              <p className="font-medium">Moni Roy</p>
              <p className="text-gray-400 text-xs">Admin</p>
            </div>

            <div className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full">
              <svg
                className={`w-3 h-3 text-gray-600 ${openProfile ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Dropdown */}
          {openProfile && (
            <div className="absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-xl z-50 overflow-hidden">

              {/* HEADER */}
              <div className="flex items-center gap-3 p-4">
                <img src={navlogo} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium text-gray-800">Moni Roy</p>
                  <p className="text-sm text-gray-400">Admin</p>
                </div>
              </div>

              {/* MENU */}
              <div className="border-t">

                {/* Manage Account */}
                <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-blue-500 text-lg">👤</span>
                  </div>
                  <span className="text-gray-700">Manage Account</span>
                </div>

                {/* Change Password */}
                <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-100">
                    <span className="text-pink-500 text-lg">🔑</span>
                  </div>
                  <span className="text-gray-700">Change Password</span>
                </div>

                {/* Activity Log */}
                <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-100">
                    <span className="text-purple-500 text-lg">🔄</span>
                  </div>
                  <span className="text-gray-700">Activity Log</span>
                </div>

                {/* Logout */}
                <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-100">
                    <span className="text-red-500 text-lg">🚪</span>
                  </div>
                  <span className="text-gray-700">Log out</span>
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;