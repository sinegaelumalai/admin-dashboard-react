import chip from "../assets/chip.png";
import expense from "../assets/expense.png";
import weeklyack from "../assets/weeklyack.png";
import qcktransfer from "../assets/qcktransfer.png";
import blhistory from "../assets/blhistory.png";
import leftlogo from "../assets/leftlogo.png";

const Dashboard = () => {
    return (
        <div className="p-4 md:p-6 bg-gray-100 min-h-screen space-y-6">

            {/* 🔹 TOP SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT - MY CARDS */}
                <div className="lg:col-span-2 space-y-4">

                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-lg text-gray-700">My Cards</h2>
                        <span className="text-blue-500 text-sm cursor-pointer">See All</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* CARD 1 */}
                        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-5 rounded-2xl relative">
                            <img src={leftlogo} className="w-10 absolute top-4 right-4 opacity-80" />

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

                        {/* CARD 2 */}
                        <div className="bg-white border p-5 rounded-2xl relative">
                            <img src={chip} className="w-10 absolute top-4 right-4 opacity-60" />

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

                {/* RIGHT - RECENT TRANSACTION */}
                <div className="bg-white p-5 rounded-2xl shadow-sm">
                    <h2 className="font-semibold text-lg text-gray-700 mb-4">
                        Recent Transaction
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">💳</div>
                                <div>
                                    <p className="text-sm">Deposit from my</p>
                                    <p className="text-xs text-gray-400">28 January 2021</p>
                                </div>
                            </div>
                            <p className="text-red-500 text-sm">-$850</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">💲</div>
                                <div>
                                    <p className="text-sm">Deposit Paypal</p>
                                    <p className="text-xs text-gray-400">25 January 2021</p>
                                </div>
                            </div>
                            <p className="text-green-500 text-sm">+$2,500</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">🟢</div>
                                <div>
                                    <p className="text-sm">Jemi Wilson</p>
                                    <p className="text-xs text-gray-400">21 January 2021</p>
                                </div>
                            </div>
                            <p className="text-green-500 text-sm">+$5,400</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* 🔹 SECOND ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* WEEKLY ACTIVITY */}
                <div className="lg:col-span-2 bg-white p-2 rounded-2xl">
                    <img
                        src={weeklyack}
                        alt="expense"
                        className="w-[600px] h-90 "
                    />

                </div>

                {/* EXPENSE STATISTICS */}
                <div className="bg-white p-5 rounded-2xl">
                    <h2 className="font-semibold text-lg text-gray-700 mb-4">
                        Expense Statistics
                    </h2>

                    <img
                        src={expense}
                        alt="expense"
                        className="w-full h-52 object-contain"
                    />
                </div>

            </div>

            {/* 🔹 THIRD ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* QUICK TRANSFER */}
                <div className="bg-white p-5 rounded-2xl">
                    <h2 className="font-semibold mb-4">Quick Transfer</h2>

                    <img
                        src={qcktransfer}
                        alt="expense"
                        className="w-full h-75 object-contain"
                    />


                </div>

                {/* BALANCE HISTORY */}
                <div className="lg:col-span-2 bg-white p-5 rounded-2xl">
                    <h2 className="font-semibold mb-4">Balance History</h2>
                    <img
                        src={blhistory}
                        alt="expense"
                        className="w-full h-75 object-contain"
                    />

                </div>

            </div>

        </div>
    );
};

export default Dashboard;