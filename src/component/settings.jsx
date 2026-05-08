import { MdOutlineCameraAlt } from "react-icons/md";

const Settings = () => {
  return (
    <div className="p-4 h-screen overflow-hidden">

      {/* Title */}
      <h1 className="text-xl font-semibold mb-3">General Settings</h1>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-2xl 
                      h-[calc(100vh-150px)] 
                      p-6 flex flex-col justify-between">

        {/* TOP CONTENT */}
        <div>

          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <MdOutlineCameraAlt size={20} className="text-gray-600" />
            </div>
            <p className="text-blue-500 text-xs mt-1 cursor-pointer">
              Upload Logo
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="text-xs text-gray-500">Site Name</label>
              <input
                value="Bright Web"
                className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Copy Right</label>
              <input
                value="All rights Reserved@brightweb"
                className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">SEO Title</label>
              <input
                value="Bright web is a hybrid dashboard"
                className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">SEO Description</label>
              <textarea
                rows="4"
                className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md text-sm outline-none resize-none"
              >
                Bright web is a hybrid dashboard
              </textarea>
            </div>

            <div>
              <label className="text-xs text-gray-500">SEO Keywords</label>
              <input
                value="CEO"
                className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md text-sm outline-none"
              />
            </div>

          </div>
        </div>

        {/* SAVE BUTTON */}
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-12 py-2 rounded-lg text-sm">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;