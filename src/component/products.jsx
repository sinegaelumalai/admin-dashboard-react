import watch from "../assets/watch.jpeg";
const Products = () => {
    return (
        <>

            <div className="p-0 space-y-0">

                {/* Title */}
                <h1 className="text-2xl font-bold p-2">Products</h1>

                {/* 🔵 Banner */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl p-6 text-white relative overflow-hidden">

                    <p className="text-sm opacity-80">September 12-22</p>

                    <h2 className="text-2xl md:text-3xl font-bold mt-2 max-w-md">
                        Enjoy free home delivery in this summer
                    </h2>

                    <p className="text-sm mt-2 opacity-80">
                        Designer Dresses - Pick from trendy Designer Dress.
                    </p>

                    <button className="mt-4 bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-lg text-sm font-medium">
                        Get Started
                    </button>

                    {/* Arrows */}
                    <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full">
                        ◀
                    </button>

                    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full">
                        ▶
                    </button>
                </div>

                {/* 🛍️ Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-4 shadow-sm relative 
            ${index === 1 ? "border-1 border-none" : ""}`}
                        >

                            {/* Image */}
                            <div className="flex justify-center">
                                <img
                                    src={watch}
                                    alt="watch"
                                    className="h-40 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="mt-3 font-medium">Apple Watch Series 4</h3>

                            {/* Price */}
                            <p className="text-blue-500 font-semibold text-sm">$120.00</p>

                            {/* Rating */}
                            <div className="text-orange-400 text-sm mt-1">
                                ★★★★☆ <span className="text-gray-400">(131)</span>
                            </div>

                            {/* Button */}
                            <button className="mt-3 bg-gray-100 px-3 py-1.5 rounded-lg text-xs">
                                Edit Product
                            </button>

                            {/* Heart */}
                            <div className="absolute right-4 top-4 text-gray-400">
                                ♡
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Products;