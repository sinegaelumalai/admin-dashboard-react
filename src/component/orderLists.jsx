const OrderLists = () => {
    const orders = [
        { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "04 Sep 2019", type: "Electric", status: "Completed" },
        { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "28 May 2019", type: "Book", status: "Processing" },
        { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "23 Nov 2019", type: "Medicine", status: "Rejected" },
        { id: "00004", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "05 Feb 2019", type: "Mobile", status: "Completed" },
        { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "29 Jul 2019", type: "Watch", status: "Processing" },
        { id: "00006", name: "Alfred Murray", address: "543 Weimann Mountain", date: "15 Aug 2019", type: "Medicine", status: "Completed" },
        { id: "00007", name: "Maggie Sullivan", address: "New Scottieberg", date: "21 Dec 2019", type: "Watch", status: "Processing" },
        { id: "00008", name: "Rosie Todd", address: "New Jon", date: "30 Apr 2019", type: "Medicine", status: "On Hold" },
        { id: "00009", name: "Dollie Hines", address: "124 Lyla Forge Suite 975", date: "09 Jan 2019", type: "Book", status: "In Transit" },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-600";
            case "Processing":
                return "bg-purple-100 text-purple-600";
            case "Rejected":
                return "bg-red-100 text-red-500";
            case "On Hold":
                return "bg-orange-100 text-orange-500";
            case "In Transit":
                return "bg-blue-100 text-blue-500";
            default:
                return "";
        }
    };

    return (
        <div className="p-3 space-y-3">

            {/* Title */}
            <h1 className="text-xl font-semibold">Order Lists</h1>

            {/* 🔍 Filter Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex overflow-hidden">

                {/* Icon */}
                <div className="px-4 py-3 border-r border-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 text-lg">⚲</span>
                </div>

                {/* Filter By */}
                <div className="px-6 py-3 border-r border-gray-200 flex items-center text-sm text-gray-600">
                    Filter By
                </div>

                {/* Date */}
                <div className="px-8 py-3 border-r border-gray-200 flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50">
                    Date <span className="text-gray-500">⌄</span>
                </div>

                {/* Order Type */}
                <div className="px-8 py-3 border-r border-gray-200 flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50">
                    Order Type <span className="text-gray-500">⌄</span>
                </div>

                {/* Order Status */}
                <div className="px-8 py-3 border-r border-gray-200 flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50">
                    Order Status <span className="text-gray-500">⌄</span>
                </div>

                {/* Reset */}
                <div className="px-8 py-3 flex items-center gap-2 text-sm text-red-500 cursor-pointer hover:bg-gray-50">
                    ⟲ Reset Filter
                </div>

            </div>

            {/* 📊 Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">

                {/* Header */}
                <div className="grid grid-cols-6 px-5 py-3 text-xs font-semibold text-gray-400 border-b">
                    <span>ID</span>
                    <span>NAME</span>
                    <span>ADDRESS</span>
                    <span>DATE</span>
                    <span>TYPE</span>
                    <span>STATUS</span>
                </div>

                {/* Rows */}
                {orders.map((order, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-6 px-5 py-3 text-sm items-center border-b last:border-none hover:bg-gray-50">
                        <span className="text-gray-700">{order.id}</span>
                        <span className="font-medium">{order.name}</span>
                        <span className="text-gray-500">{order.address}</span>
                        <span>{order.date}</span>
                        <span>{order.type}</span>

                        <span>
                            <span className={`px-3 py-1 rounded-md text-xs font-medium ${getStatusStyle(order.status)}`}>
                                {order.status}
                            </span>
                        </span>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default OrderLists;