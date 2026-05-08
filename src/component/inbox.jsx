const Inbox = () => {
    return (
        <div className="p-1 space-y-0">

            {/* Title */}
            <h1 className="text-2xl font-bold">Inbox</h1>

            <div className="grid grid-cols-12 gap-4">

                {/* LEFT PANEL */}
                <div className="col-span-3 bg-white rounded-2xl p-4 shadow-sm">

                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4">
                        + Compose
                    </button>

                    <p className="text-sm font-semibold mb-2">My Email</p>

                    <div className="space-y-2 text-sm">

                        <div className="flex justify-between bg-blue-100 p-2 rounded-lg text-blue-600">
                            <span>Inbox</span>
                            <span>1253</span>
                        </div>

                        <div className="flex justify-between p-2">
                            <span>Starred</span>
                            <span>245</span>
                        </div>

                        <div className="flex justify-between p-2">
                            <span>Sent</span>
                            <span>24,532</span>
                        </div>

                        <div className="flex justify-between p-2">
                            <span>Draft</span>
                            <span>09</span>
                        </div>

                        <div className="flex justify-between p-2">
                            <span>Spam</span>
                            <span>14</span>
                        </div>

                        <div className="flex justify-between p-2">
                            <span>Important</span>
                            <span>18</span>
                        </div>

                        <div className="flex justify-between p-2">
                            <span>Bin</span>
                            <span>9</span>
                        </div>

                    </div>

                    {/* Labels */}
                    <p className="text-sm font-semibold mt-6 mb-2">Label</p>

                    <div className="space-y-2 text-sm">

                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-green-400"></span> Primary
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-blue-400"></span> Social
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-orange-400"></span> Work
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-purple-400"></span> Friends
                        </div>

                        <p className="text-gray-400 mt-2">+ Create New Label</p>

                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="col-span-9 bg-white rounded-2xl p-4 shadow-sm">

                    {/* Top bar */}
                    <div className="flex justify-between items-center mb-4">

                        <input
                            type="text"
                            placeholder="Search mail"
                            className="bg-gray-100 px-4 py-2 rounded-full w-1/2 text-sm"
                        />

                        <div className="flex gap-2">
                            <button className="bg-gray-100 p-2 rounded">📥</button>
                            <button className="bg-gray-100 p-2 rounded">ℹ</button>
                            <button className="bg-gray-100 p-2 rounded">🗑</button>
                        </div>

                    </div>

                    {/* Mail List */}
                    <div className="space-y-2 text-sm">

                        {[
                            { name: "Jullu Jalal", tag: "Primary", msg: "Our Bachelor of Commerce program is ACBSP-accredited.", time: "8:38 AM" },
                            { name: "Minerva Barnett", tag: "Work", msg: "Get Best Advertiser In Your Side Pocket", time: "8:13 AM" },
                            { name: "Peter Lewis", tag: "Friends", msg: "Vacation Home Rental Success", time: "7:52 PM" },
                            { name: "Anthony Briggs", tag: "", msg: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM", star: true },
                            { name: "Clifford Morgan", tag: "Social", msg: "Enhance Your Brand Potential With Giant Advertising Blimps", time: "4:13 PM" },
                            { name: "Cecilia Webster", tag: "Friends", msg: "Always Look On The Bright Side Of Life", time: "3:52 PM" },
                            { name: "Harvey Manning", tag: "", msg: "Curling Irons Are As Individual As The Women Who Use Them", time: "2:30 PM", star: true },
                            { name: "Willie Blake", tag: "Primary", msg: "Our Bachelor of Commerce program is ACBSP-accredited.", time: "8:38 AM" },
                            { name: "Minerva Barnett", tag: "Work", msg: "Get Best Advertiser In Your Side Pocket", time: "8:13 AM" },
                            { name: "Fanny Weaver", tag: "", msg: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM", star: true },
                            { name: "Olga Hogan", tag: "Social", msg: "Enhance Your Brand Potential With Giant Advertising Blimps", time: "4:13 PM" },
                            { name: "Lora Houston", tag: "Friends", msg: "Vacation Home Rental Success", time: "7:52 PM" }
                        ].map((mail, i) => (
                            <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg">

                                <div className="flex items-center gap-3">

                                    <input type="checkbox" />
                                    <span>☆</span>

                                    <span className="font-medium">{mail.name}</span>

                                    {mail.tag && (
                                        <span className={`text-xs px-2 py-0.5 rounded 
                      ${mail.tag === "Primary" ? "bg-green-100 text-green-600" : ""}
                      ${mail.tag === "Work" ? "bg-orange-100 text-orange-600" : ""}
                      ${mail.tag === "Friends" ? "bg-purple-100 text-purple-600" : ""}
                      ${mail.tag === "Social" ? "bg-blue-100 text-blue-600" : ""}
                    `}>
                                            {mail.tag}
                                        </span>
                                    )}

                                    <span className="text-gray-500 hidden md:block">
                                        {mail.msg}
                                    </span>

                                </div>

                                <span className="text-gray-400 text-xs">{mail.time}</span>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Inbox;