const Todo = () => {
  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">To-Do List</h1>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
          Add New Task
        </button>
      </div>

      {/* List Container */}
      <div className="space-y-3">

        {/* Item 1 */}
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-700">Meeting with CEO</p>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            ☆
            <span className="border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs">×</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-700">Pick up kids from school</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-yellow-400">★</span>
            <span className="border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs text-gray-400">×</span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-700">Shopping with Brother</p>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            ☆
            <span className="border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs">×</span>
          </div>
        </div>

        {/* ACTIVE ITEM */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-xl px-4 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <input type="checkbox" checked readOnly className="w-4 h-4 accent-white" />
            <p className="text-sm">Review with HR</p>
          </div>

          <button className="bg-white/20 px-3 py-1 rounded-lg text-sm">
            🗑
          </button>
        </div>

        {/* Item 5 */}
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-700">Going to Dia’s School</p>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            ☆
            <span className="border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs">×</span>
          </div>
        </div>

        {/* Item 6 */}
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-700">Check design files</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-yellow-400">★</span>
            <span className="border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs text-gray-400">×</span>
          </div>
        </div>

        {/* Item 7 */}
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-700">Update File</p>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            ☆
            <span className="border rounded-full w-6 h-6 flex items-center justify-center text-xs">×</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Todo;