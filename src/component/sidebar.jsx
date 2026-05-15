import { useState } from "react";
import { NavLink } from "react-router-dom";
import bankdeshlogo from "../assets/bankdeshlogo.png";
import slogo1 from "../assets/slogo1.png";
import slogo2 from "../assets/slogo2.png";
import slogo3 from "../assets/slogo3.png";
import slogo4 from "../assets/slogo4.png";
import slogo5 from "../assets/slogo5.png";
import slogo6 from "../assets/slogo6.png";
import slogo7 from "../assets/slogo7.png";
import slogo8 from "../assets/slogo8.png";
import slogo9 from "../assets/slogo9.png"; // ✅ FIXED

const Sidebar = () => {

  const [open, setOpen] = useState(false); // ✅ FIXED

  const menuClass =
    "flex items-center gap-3 py-3 px-4 text-sm rounded-md text-gray-400 hover:text-blue-500";

  const activeClass =
    "flex items-center gap-3 py-3 px-4 text-sm rounded-md text-blue-600 font-semibold";

  return (
    <>
      {/* 🔹 Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 shadow">
        <h1 className="text-lg font-bold text-blue-500">Dashboard</h1>

        {/* ✅ MENU BUTTON IMAGE */}
        <img
          src={slogo1}
          className="w-6 h-6 cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* 🔹 Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔹 Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-100 z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >

        {/* 🔹 Close button */}
        <div className="md:hidden flex justify-end p-4">
          <img
            src={slogo2}
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* 🔹 Menu */}
        <div className="space-y-2 mt-4">

          <img
            src={bankdeshlogo}
            alt=""
            className="w-[200px] h-10 pl-3"
          />

          <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? activeClass : menuClass}>
            <img src={slogo1} className="w-5 h-5" /> Dashboard
          </NavLink>

          <NavLink to="/transactions" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? activeClass : menuClass}>
            <img src={slogo2} className="w-5 h-5" /> Transactions
          </NavLink>

          <NavLink to="/accounts" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? activeClass : menuClass}>
            <img src={slogo3} className="w-5 h-5" /> Accounts
          </NavLink>

          <NavLink to="/investments" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? activeClass : menuClass}>
            <img src={slogo4} className="w-5 h-5" /> Investments
          </NavLink>

          <NavLink to="/creditcards" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? activeClass : menuClass}>
            <img src={slogo5} className="w-5 h-5" /> Credit Cards
          </NavLink>

          <NavLink to="/loans" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? activeClass : menuClass}>
            <img src={slogo6} className="w-5 h-5" /> Loans
          </NavLink>

          <NavLink to="/services" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? activeClass : menuClass}>
            <img src={slogo7} className="w-5 h-5" /> Services
          </NavLink>

          {/* Disabled */}
          <div className="flex items-center gap-3 py-3 px-4 text-sm text-gray-300 cursor-not-allowed">
            <img src={slogo8} className="w-5 h-5 opacity-50" />
            My Privileges
          </div>

          <NavLink to="/settings" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? activeClass : menuClass}>
            <img src={slogo9} className="w-5 h-5" /> Settings
          </NavLink>

        </div>
      </div>
    </>
  );
};

export default Sidebar;