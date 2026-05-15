import invebar from "../assets/invebar.png";
import m1 from '../assets/m1.png';
import apple1 from "../assets/apple1.png";
import google2 from "../assets/google2.png";
import tesla3 from "../assets/telsa3.png";
const Investments = () => {
    return (
        <div className="p-4 md:p-6 bg-gray-100 min-h-screen space-y-6">

            {/* 🔹 TOP CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {[
                    {
                        title: "Total Invested Amount",
                        value: "$150,000",
                        color: "bg-green-100",
                        icon: "💰",
                    },
                    {
                        title: "Number of Investments",
                        value: "1,250",
                        color: "bg-pink-100",
                        icon: "📊",
                    },
                    {
                        title: "Rate of Return",
                        value: "+5.80%",
                        color: "bg-blue-100",
                        icon: "🔁",
                    },
                ].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color}`}>
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">{item.title}</p>
                            <p className="font-semibold">{item.value}</p>
                        </div>
                    </div>
                ))}

            </div>

            {/* 🔹 CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* YEARLY INVESTMENT */}
                <div className="bg-white p-5 rounded-2xl">
                    <h2 className="font-semibold text-gray-700 mb-4">
                        Yearly Total Investment
                    </h2>

                    <div className="w-full h-[220px]">
                        <img
                            src={invebar}
                            alt="investment chart"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* MONTHLY REVENUE */}
                <div className="bg-white p-5 rounded-2xl">
                    <h2 className="font-semibold text-gray-700 mb-4">
                        Monthly Revenue
                    </h2>
                    <img
                        src={m1}
                        alt="investment chart"
                        className="w-full h-[280px] object-cover rounded-xl"
                    />
                </div>

            </div>

            {/* 🔹 BOTTOM SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* 🔹 MY INVESTMENT */}
                <div className="bg-white p-5 rounded-2xl space-y-4">

                    <h2 className="font-semibold text-gray-700 text-lg">My Investment</h2>

                    {[
                        {
                            name: "Apple Store",
                            amount: "$54,000",
                            return: "+16%",
                            color: "text-green-500",
                            img: apple1,
                            sub: "E-commerce, Marketplace",
                        },
                        {
                            name: "Samsung Mobile",
                            amount: "$25,300",
                            return: "-4%",
                            color: "text-red-500",
                            img: google2,
                            sub: "E-commerce, Marketplace",
                        },
                        {
                            name: "Tesla Motors",
                            amount: "$8,200",
                            return: "+25%",
                            color: "text-green-500",
                            img: tesla3,
                            sub: "Electric Vehicles",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50 p-4 rounded-xl"
                        >

                            {/* LEFT */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-xl object-cover"
                                />

                                <div>
                                    <p className="text-sm font-semibold text-gray-800">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-blue-500">{item.sub}</p>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="flex justify-between sm:justify-end gap-6 w-full sm:w-auto text-sm">

                                <div className="text-center">
                                    <p className="font-semibold text-gray-800">{item.amount}</p>
                                    <p className="text-xs text-gray-400">Investment Value</p>
                                </div>

                                <div className="text-center">
                                    <p className={`font-semibold ${item.color}`}>
                                        {item.return}
                                    </p>
                                    <p className="text-xs text-gray-400">Return Value</p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                <div className="bg-white p-5 rounded-2xl">

                    <h2 className="font-semibold text-gray-700 text-lg mb-6">
                        Trending Stock
                    </h2>

                    {/* HEADER */}
                    <div className="grid grid-cols-4 text-gray-400 text-sm mb-4">
                        <span>SL No</span>
                        <span>Name</span>
                        <span>Price</span>
                        <span>Return</span>
                    </div>

                    {/* DATA */}
                    <div className="space-y-4 text-gray-700 text-sm">

                        {[
                            { name: "Trivago", price: "$520", return: "+5%", color: "text-green-500" },
                            { name: "Canon", price: "$480", return: "+10%", color: "text-green-500" },
                            { name: "Uber Food", price: "$350", return: "-3%", color: "text-red-500" },
                            { name: "Nokia", price: "$940", return: "+2%", color: "text-green-500" },
                            { name: "Tiktok", price: "$670", return: "-12%", color: "text-red-500" },
                        ].map((item, i) => (
                            <div key={i} className="grid grid-cols-4 items-center">

                                <span>{String(i + 1).padStart(2, "0")}.</span>
                                <span>{item.name}</span>
                                <span>{item.price}</span>
                                <span className={item.color}>{item.return}</span>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Investments;