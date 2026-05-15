const Security = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-2xl p-6 md:p-8 space-y-6">

        {/* 🔹 TABS */}
        <div className="flex gap-6 border-b pb-2 text-sm">
          <span className="text-gray-400 cursor-pointer">Edit Profile</span>
          <span className="text-gray-400 cursor-pointer">Preferences</span>
          <span className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Security
          </span>
        </div>

        {/* 🔹 TWO FACTOR */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">
            Two-factor Authentication
          </h3>

          <div className="flex items-center gap-3">
            <div className="w-10 h-5 bg-green-400 rounded-full flex items-center p-1">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>

            <p className="text-sm text-gray-600">
              Enable or disable two factor authentication
            </p>
          </div>
        </div>

        {/* 🔹 PASSWORD */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-700">Change Password</h3>

          <div className="max-w-md">
            <label className="text-sm text-gray-600">Current Password</label>
            <input
              type="password"
              placeholder="**********"
              className="w-full mt-2 px-4 py-3 rounded-full border border-gray-200"
            />
          </div>

          <div className="max-w-md">
            <label className="text-sm text-gray-600">New Password</label>
            <input
              type="password"
              placeholder="**********"
              className="w-full mt-2 px-4 py-3 rounded-full border border-gray-200"
            />
          </div>
        </div>

        {/* 🔹 SAVE */}
        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full">
            Save
          </button>
        </div>

      </div>

    </div>
  );
};

export default Security;