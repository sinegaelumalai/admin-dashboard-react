import cardstat from "../assets/cardstat.png";
import cr1 from "../assets/cr1.png";
import cr2 from "../assets/cr2.png";
import cr3 from "../assets/cr3.png";
import ct1 from "../assets/ct1.png";
import ct2 from "../assets/ct2.png";
import ct3 from "../assets/ct3.png";
import ct4 from "../assets/ct4.png";


const CreditCards = () => {
    return (
        <div className="p-4 md:p-6 bg-gray-100 min-h-screen space-y-6">

            {/* 🔹 MY CARDS */}
            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">My Cards</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* Card 1 */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-5 rounded-2xl">
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
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-5 rounded-2xl">
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

                    {/* Card 3 */}
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

            {/* 🔹 SECOND ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* CARD EXPENSE */}
                <div className="bg-white p-5 rounded-2xl">
                    <h2 className="font-semibold text-gray-700 mb-4">
                        Card Expense Statistics
                    </h2>

                    <img
                        src={cardstat}
                        alt=""
                        className="w-full h-[200px] object-contain"
                    />
                </div>

                {/* CARD LIST */}
                <div className="lg:col-span-2 bg-white p-5 rounded-2xl space-y-5">

                    <h2 className="font-semibold text-gray-700 text-lg">Card List</h2>

                    {[
                        {
                            bank: "DBL Bank",
                            number: "**** **** 5600",
                            name: "William",
                            img: cr1,
                        },
                        {
                            bank: "BRC Bank",
                            number: "**** **** 4300",
                            name: "Michel",
                            img: cr2,
                        },
                        {
                            bank: "ABM Bank",
                            number: "**** **** 7560",
                            name: "Edward",
                            img: cr3,
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl"
                        >

                            {/* LEFT SIDE */}
                            <div className="flex items-center gap-4">

                                {/* IMAGE */}
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-12 h-12 rounded-xl object-cover"
                                />

                                {/* DETAILS */}
                                <div className="flex flex-wrap md:flex-nowrap items-center gap-6 text-sm">

                                    <div>
                                        <p className="text-gray-400">Card Type</p>
                                        <p className="text-blue-500">Secondary</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">Bank</p>
                                        <p className="text-gray-700">{item.bank}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">Card Number</p>
                                        <p className="text-gray-700">{item.number}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">Namain Card</p>
                                        <p className="text-gray-700">{item.name}</p>
                                    </div>

                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <span className="text-blue-500 text-sm cursor-pointer whitespace-nowrap">
                                View Details
                            </span>

                        </div>
                    ))}

                </div>

            </div>

            {/* 🔹 THIRD ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* 🔹 ADD NEW CARD */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl space-y-5">

                    <h2 className="text-lg font-semibold text-gray-700">
                        Add New Card
                    </h2>

                    <p className="text-sm text-blue-400 leading-relaxed">
                        Credit Card generally means a plastic card issued by Scheduled Commercial
                        Banks assigned to a Cardholder, with a credit limit, that can be used to
                        purchase goods and services on credit or obtain cash advances.
                    </p>

                    {/* FORM */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Card Type */}
                        <div>
                            <label className="text-sm text-gray-600">Card Type</label>
                            <input
                                type="text"
                                placeholder="Classic"
                                className="w-full mt-2 px-4 py-3 rounded-full border border-gray-200 outline-none text-sm"
                            />
                        </div>

                        {/* Name */}
                        <div>
                            <label className="text-sm text-gray-600">Name On Card</label>
                            <input
                                type="text"
                                placeholder="My Cards"
                                className="w-full mt-2 px-4 py-3 rounded-full border border-gray-200 outline-none text-sm"
                            />
                        </div>

                        {/* Card Number */}
                        <div>
                            <label className="text-sm text-gray-600">Card Number</label>
                            <input
                                type="text"
                                placeholder="**** **** **** ****"
                                className="w-full mt-2 px-4 py-3 rounded-full border border-gray-200 outline-none text-sm"
                            />
                        </div>

                        {/* Expiry */}
                        <div>
                            <label className="text-sm text-gray-600">Expiration Date</label>
                            <input
                                type="text"
                                placeholder="25 January 2025"
                                className="w-full mt-2 px-4 py-3 rounded-full border border-gray-200 outline-none text-sm"
                            />
                        </div>

                    </div>

                    {/* BUTTON */}
                    <button className="mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-sm">
                        Add Card
                    </button>

                </div>

                {/* 🔹 CARD SETTING */}
                <div className="bg-white p-6 rounded-2xl space-y-5">

                    <h2 className="text-lg font-semibold text-gray-700">
                        Card Setting
                    </h2>

                    {[
                        { name: "Block Card", img: ct1 },
                        { name: "Change Pic Code", img: ct2 },
                        { name: "Add to Google Pay", img: ct3 },
                        { name: "Add to Apple Pay", img: ct4 },
                        { name: "Add to Apple Store", img: ct4 },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">

                            {/* IMAGE */}
                            <img
                                src={item.img}
                                alt=""
                                className="w-12 h-12 rounded-xl object-cover"
                            />

                            {/* TEXT */}
                            <div>
                                <p className="text-sm font-semibold text-gray-700">
                                    {item.name}
                                </p>
                                <p className="text-xs text-blue-400">
                                    Withdraw without any card
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default CreditCards;