import femalelogo from "../assets/femalelogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Settings = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-2xl p-6 md:p-8 space-y-6">

        {/* 🔹 TABS */}

        <div className="flex gap-6 border-b pb-2 text-sm">

          {/* Edit Profile */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `pb-1 ${isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-400"
              }`
            }
          >
            Edit Profile
          </NavLink>

          {/* Preferences */}
          <NavLink
            to="/settings/preferences"
            className={({ isActive }) =>
              `pb-1 ${isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-400"
              }`
            }
          >
            Preferences
          </NavLink>

          {/* Security */}
          <NavLink
            to="/settings/security"
            className={({ isActive }) =>
              `pb-1 ${isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-400"
              }`
            }
          >
            Security
          </NavLink>

        </div>

        {/* 🔹 CONTENT */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* PROFILE IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-fit">
              <img
                src={femalelogo}
                alt=""
                className="w-28 h-28 rounded-full object-cover"
              />

              {/* ✅ FIXED POSITION */}
              <div className="absolute top-2 right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer shadow-md">
                ✎
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">

            {[
              "Your Name",
              "User Name",
              "Email",
              "Password",
              "Date of Birth",
              "Present Address",
              "Permanent Address",
              "City",
              "Postal Code",
              "Country",
            ].map((label, i) => (
              <div key={i}>
                <label className="text-sm text-gray-600">{label}</label>
                <input
                  type="text"
                  placeholder={
                    label === "Password"
                      ? "**********"
                      : label === "Email"
                        ? "charlenereed@gmail.com"
                        : label === "Date of Birth"
                          ? "25 January 1990"
                          : label === "City"
                            ? "San Jose"
                            : label === "Postal Code"
                              ? "45962"
                              : label === "Country"
                                ? "USA"
                                : "Charlene Reed"
                  }
                  className="w-full mt-2 px-4 py-3 rounded-full border border-gray-200 outline-none text-sm text-gray-600"
                />
              </div>
            ))}

          </div>

        </div>

        {/* 🔹 SAVE BUTTON */}
        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-sm">
            Save
          </button>
        </div>

      </div>

    </div>
  );
};

export default Settings;