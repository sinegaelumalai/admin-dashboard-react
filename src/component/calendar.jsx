const Calendar = () => {
  return (
    <div className="p-4 grid grid-cols-12 gap-4">

      {/* LEFT PANEL */}
      <div className="col-span-3 bg-white rounded-2xl p-4 shadow-sm flex flex-col justify-between">

        <div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm">
            + Add New Event
          </button>

          <h3 className="mt-4 text-sm font-medium text-gray-600">
            You are going to
          </h3>

          {/* Event Item */}
          {[
            {
              title: "Design Conference",
              date: "Today 07:19 AM",
              place: "56 Davion Mission Suite 157",
            },
            {
              title: "Weekend Festival",
              date: "16 October 2019 at 5:00 PM",
              place: "853 Moore Flats Suite 158",
            },
            {
              title: "Glastonbury Festival",
              date: "20–22 October 2019",
              place: "646 Walter Road Apt. 571",
            },
            {
              title: "Ultra Europe 2019",
              date: "25 October 2019 at 10:00 PM",
              place: "506 Satterfield Tunnel Apt. 963",
            },
          ].map((event, i) => (
            <div key={i} className="flex gap-3 mt-4">

              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>

              <div className="text-sm">
                <p className="font-medium">{event.title}</p>
                <p className="text-gray-400 text-xs">{event.date}</p>
                <p className="text-gray-400 text-xs">{event.place}</p>

                {/* avatars */}
                <div className="flex items-center gap-1 mt-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-blue-100 text-blue-500 text-xs flex items-center justify-center rounded-full">
                    15+
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 bg-gray-100 py-2 rounded-lg text-sm">
          See More
        </button>
      </div>

      {/* RIGHT PANEL */}
      <div className="col-span-9 bg-white rounded-2xl p-4 shadow-sm">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">

          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Today</span>
            <h2 className="text-lg font-semibold">
              ◀ October 2019 ▶
            </h2>
          </div>

          <div className="flex bg-gray-100 rounded-lg text-sm">
            <button className="px-3 py-1">Day</button>
            <button className="px-3 py-1">Week</button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-lg">
              Month
            </button>
          </div>

        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
          {["MON","TUE","WED","THE","FRI","SAT","SUN"].map((d,i)=>(
            <div key={i} className="py-2 font-medium">{d}</div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-[1px] bg-gray-200">

          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="bg-white h-24 p-1 text-xs text-gray-500 relative"
            >
              <span className="absolute top-1 right-1 text-xs">
                {i + 1}
              </span>

              {/* sample event */}
              {i === 10 && (
                <div className="absolute bottom-2 left-1 right-1 bg-purple-200 text-purple-700 text-[10px] px-1 py-0.5 rounded">
                  Design Conference
                </div>
              )}

              {i === 20 && (
                <div className="absolute bottom-2 left-1 right-1 bg-pink-200 text-pink-700 text-[10px] px-1 py-0.5 rounded">
                  Weekend Festival
                </div>
              )}

              {i === 25 && (
                <div className="absolute bottom-2 left-1 right-1 bg-blue-200 text-blue-700 text-[10px] px-1 py-0.5 rounded">
                  Glastonbury Festival
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Calendar;