import watchgery from '../assets/watchg.jpeg';
const Favorites = () => {
    return (
        <>
            <div className="p-0 space-y-0">

                {/* Title */}
                <h1 className="text-2xl font-bold p-2">Favorites</h1>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-4 shadow-sm relative"
                        >

                            {/* Image Section */}
                            <div className="relative flex justify-center">

                                <img
                                    src={watchgery}
                                    alt="watch"
                                    className="h-44 object-contain"
                                />

                                {/* Left Arrow */}
                                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full text-sm">
                                    ◀
                                </button>

                                {/* Right Arrow */}
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full text-sm">
                                    ▶
                                </button>

                            </div>

                            {/* Details */}
                            <h3 className="mt-3 font-medium">Random Product Name</h3>

                            <p className="text-blue-500 text-sm">$00.00</p>

                            {/* Rating */}
                            <div className="text-orange-400 text-sm mt-1">
                                ★★★★☆ <span className="text-gray-400">(00)</span>
                            </div>

                            {/* Button */}
                            <button className="mt-3 bg-gray-100 px-3 py-1.5 rounded-lg text-xs">
                                Edit Product
                            </button>

                            {/* Heart Icon */}
                            <div className="absolute right-4 bottom-4 text-red-500">
                                ❤️
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Favorites;