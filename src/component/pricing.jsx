const Pricing = () => {
    return (
        <div className="p-6 space-y-6">

            {/* Title */}
            <h1 className="text-2xl font-semibold">Pricing</h1>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* CARD */}
                {[
                    {
                        title: "Basic",
                        price: "$14.99",
                        highlight: false,
                    },
                    {
                        title: "Standard",
                        price: "$49.99",
                        highlight: false,
                    },
                    {
                        title: "Premium",
                        price: "$89.99",
                        highlight: true,
                    },
                ].map((plan, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between relative overflow-hidden"
                    >

                        {/* Top Content */}
                        <div className="text-center space-y-4">

                            <h2 className="text-lg font-semibold">{plan.title}</h2>

                            <p className="text-sm text-gray-500">Monthly Charge</p>

                            <h1 className="text-4xl font-bold text-blue-500">
                                {plan.price}
                            </h1>

                            <hr className="my-4" />

                            <div className="space-y-3 text-sm text-gray-600">

                                <p>Free Setup</p>
                                <p>Bandwidth Limit 10 GB</p>
                                <p>20 User Connection</p>

                                <p className="text-gray-300">Analytics Report</p>
                                <p className="text-gray-300">Public API Access</p>
                                <p className="text-gray-300">Plugins Intregation</p>
                                <p className="text-gray-300">Custom Content Management</p>

                            </div>

                        </div>

                        {/* Bottom */}
                        <div className="mt-6 text-center space-y-3">

                            <button
                                className={`px-6 py-2 rounded-full border text-sm ${plan.highlight
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "text-blue-500 border-blue-500"
                                    }`}
                            >
                                Get Started
                            </button>

                            <p className="text-xs underline text-gray-500 cursor-pointer">
                                Start Your 30 Day Free Trial
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Pricing;