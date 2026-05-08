import revenue from "../assets/revenue.png";
import sales from '../assets/sales.jpeg';
import round from '../assets/round.jpeg';

const Dashboard = () => {
    return (
        <div className="p-0 space-y-2">

            {/* Title */}
            <h1 className="text-2xl font-bold">Dashboard</h1>

            {/* Revenue Card (IMPORTANT FIX) */}
            <div className="bg-white p-4 md:p-5 rounded-2xl shadow-sm">

                {/* Header */}
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-base md:text-lg font-semibold">Revenue</h2>
                    <button className="bg-gray-100 px-2.5 py-1 rounded text-xs md:text-sm">
                        October
                    </button>
                </div>

                {/* Image */}
                <img
                    src={revenue}
                    alt="revenue"
                    className="w-full h-44 md:h-52 lg:h-60 object-cover"
                />

                {/* Legend */}
                <div className="flex justify-center gap-4 mt-3 text-xs md:text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span> Sales
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 bg-purple-400 rounded-full"></span> Profit
                    </span>
                </div>

            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Customers */}
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                    <h3 className="font-semibold mb-3">Customers</h3>

                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-200">
                        <img
                            src={round}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex justify-between mt-4 text-center">
                        <div>
                            <p className="text-lg font-bold">34,249</p>
                            <p className="text-xs text-gray-400">New Customers</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">1420</p>
                            <p className="text-xs text-gray-400">Repeated</p>
                        </div>
                    </div>
                </div>

                {/* Featured Product */}
                <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col justify-between">
                    <h3 className="font-semibold mb-3">Featured Product</h3>

                    <div className="flex justify-between items-center">
                        <button className="bg-gray-100 p-1.5 rounded-full">◀</button>
                        <button className="bg-gray-100 p-1.5 rounded-full">▶</button>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-sm">Beats Headphone 2019</p>
                        <p className="text-blue-500 font-bold">$89.00</p>
                    </div>
                </div>

                {/* Sales Analytics */}
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                    <img
                        src={sales}
                        alt="Sales"
                        className="w-full h-40 object-cover"
                    />
                </div>

            </div>

        </div>
    );
};

export default Dashboard;