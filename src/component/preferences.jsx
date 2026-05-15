const Preferences = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-2xl p-6 md:p-8 space-y-6">

        {/* 🔹 TABS */}
        <div className="flex gap-6 border-b pb-2 text-sm">
          <span className="text-gray-400 cursor-pointer">Edit Profile</span>
          <span className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Preferences
          </span>
          <span className="text-gray-400">Security</span>
        </div>

        {/* 🔹 FORM */}
        <div className="space-y-6">

          {/* TOP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="text-sm text-gray-600">Currency</label>
              <input
                type="text"
                placeholder="USD"
                className="w-full mt-2 px-4 py-3 rounded-full border border-gray-200"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Time Zone</label>
              <input
                type="text"
                placeholder="(GMT-12:00) International Date Line West"
                className="w-full mt-2 px-4 py-3 rounded-full border border-gray-200"
              />
            </div>

          </div>

          {/* NOTIFICATIONS */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Notification</h3>

            {[
              { text: "I send or receive digital currency", active: true },
              { text: "I receive merchant order", active: false },
              { text: "There are recommendation for my account", active: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mb-3">

                <div className={`w-10 h-5 rounded-full flex items-center p-1 
                  ${item.active ? "bg-green-400" : "bg-gray-300"}`}>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <p className="text-sm text-gray-600">{item.text}</p>

              </div>
            ))}

          </div>

          {/* SAVE */}
          <div className="flex justify-end">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full">
              Save
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Preferences;