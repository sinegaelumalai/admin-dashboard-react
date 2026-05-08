import inv1 from "../assets/inv1.jpeg";
import inv2 from "../assets/inv2.jpeg";
import inv3 from "../assets/inv3.png";

const UIElements = () => {
    return (
        <div className="p-4 space-y-4">

            {/* Title */}
            <h1 className="text-xl font-semibold">UI Elements</h1>

            {/* Top Card */}
            <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <h2 className="text-sm font-medium mb-3">Bar Chart</h2>
                <img src={inv1} alt="" className="w-full h-44 object-cover rounded-lg" />
            </div>

            {/* Center Card */}
            <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <h2 className="text-sm font-medium mb-3">Pie Chart</h2>
                <img src={inv2} alt="" className="w-full h-50 object-cover rounded-lg" />
            </div>

            {/* Bottom */}
            <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <h2 className="text-sm font-medium mb-3">Donut Chart</h2>
                <img src={inv3} className="w-full h-48 object-cover rounded-lg" />
            </div>

        </div>
    );
};

export default UIElements;