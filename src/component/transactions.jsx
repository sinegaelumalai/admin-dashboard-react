const Transactions = () => {
    return (
        <div className="p-4 md:p-6 bg-gray-100 min-h-screen space-y-6">

            {/* 🔹 TOP SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* MY CARDS */}
                <div className="lg:col-span-2 space-y-4">

                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-700">My Cards</h2>
                        <span className="text-blue-500 text-sm cursor-pointer">+ Add Card</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Card 1 */}
                        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-5 rounded-2xl">
                            <p className="text-sm">Balance</p>
                            <h3 className="text-xl font-bold">$5,756</h3>

                            <div className="flex justify-between mt-6 text-xs">
                                <div>
                                    <p className="opacity-70">CARD HOLDER</p>
                                    <p>Eddy Cusuma</p>
                                </div>
                                <div>
                                    <p className="opacity-70">VALID THRU</p>
                                    <p>12/22</p>
                                </div>
                            </div>

                            <p className="mt-6 tracking-widest">3778 **** **** 1234</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border p-5 rounded-2xl">
                            <p className="text-sm text-gray-400">Balance</p>
                            <h3 className="text-xl font-bold">$5,756</h3>

                            <div className="flex justify-between mt-6 text-xs text-gray-500">
                                <div>
                                    <p>CARD HOLDER</p>
                                    <p className="text-gray-700">Eddy Cusuma</p>
                                </div>
                                <div>
                                    <p>VALID THRU</p>
                                    <p className="text-gray-700">12/22</p>
                                </div>
                            </div>

                            <p className="mt-6 tracking-widest text-gray-600">
                                3778 **** **** 1234
                            </p>
                        </div>

                    </div>
                </div>

                {/* MY EXPENSE */}
                <div className="bg-white p-5 rounded-2xl">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        My Expense
                    </h2>

                    {/* Fake Bars */}
                    <div className="flex justify-between items-end h-40">
                        {[40, 70, 50, 30, 90, 60].map((h, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div
                                    className={`w-6 rounded-lg ${i === 4 ? "bg-teal-400" : "bg-gray-200"
                                        }`}
                                    style={{ height: `${h}px` }}
                                ></div>
                                <span className="text-xs text-gray-400">
                                    {["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"][i]}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="text-right mt-2 text-sm font-semibold text-gray-600">
                        $12,500
                    </p>
                </div>

            </div>

            {/* 🔹 TRANSACTIONS TABLE */}
            <div className="bg-white p-5 rounded-2xl">

                {/* Tabs */}
                <div className="flex gap-6 border-b pb-2 text-sm">
                    <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">
                        All Transactions
                    </span>
                    <span className="text-gray-400 cursor-pointer">Income</span>
                    <span className="text-gray-400 cursor-pointer">Expense</span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mt-4">

                    <table className="w-full text-sm text-left">

                        <thead className="text-gray-400 border-b">
                            <tr>
                                <th className="py-3">Description</th>
                                <th>Transaction ID</th>
                                <th>Type</th>
                                <th>Card</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Receipt</th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-600">

                            {[
                                {
                                    name: "Spotify Subscription",
                                    amount: "-$2,500",
                                    color: "text-red-500",
                                },
                                {
                                    name: "Freepik Sales",
                                    amount: "+$750",
                                    color: "text-green-500",
                                },
                                {
                                    name: "Mobile Service",
                                    amount: "-$150",
                                    color: "text-red-500",
                                },
                                {
                                    name: "Wilson",
                                    amount: "-$1050",
                                    color: "text-red-500",
                                },
                                {
                                    name: "Emilly",
                                    amount: "+$840",
                                    color: "text-green-500",
                                },
                            ].map((item, i) => (
                                <tr key={i} className="border-b last:border-none">

                                    <td className="py-4 flex items-center gap-2">
                                        <span className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
                                            ⬇
                                        </span>
                                        {item.name}
                                    </td>

                                    <td>#12548796</td>
                                    <td>Transfer</td>
                                    <td>1234 ****</td>
                                    <td>25 Jan, 10:40 PM</td>

                                    <td className={item.color}>{item.amount}</td>

                                    <td>
                                        <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-full text-xs hover:bg-blue-500 hover:text-white">
                                            Download
                                        </button>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default Transactions;