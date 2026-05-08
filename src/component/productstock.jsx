import pro1 from "../assets/pro1.jpeg";
import pro2 from "../assets/pro2.jpeg";
import pro3 from "../assets/pro3.jpeg";
import pro4 from "../assets/pro4.jpeg";
import pro5 from "../assets/pro5.jpeg";

const ProductStock = () => {
    return (
        <div className="p-2 space-y-0">

            {/* Title + Search */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Product Stock</h1>

                <input
                    type="text"
                    placeholder="Search product name"
                    className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">

                {/* Header */}
                <div className="grid grid-cols-7 px-5 py-3 text-xs font-semibold text-gray-400 border-b border-gray-200">
                    <span>Image</span>
                    <span>Product Name</span>
                    <span>Category</span>
                    <span>Price</span>
                    <span>Piece</span>
                    <span>Available Color</span>
                    <span>Action</span>
                </div>

                {/* Row */}
                {[
                    { img: pro1, name: "Apple Watch Series 4", cat: "Digital Product", price: "$690.00", piece: 63 },
                    { img: pro2, name: "Microsoft Headsquare", cat: "Digital Product", price: "$190.00", piece: 13 },
                    { img: pro3, name: "Women’s Dress", cat: "Fashion", price: "$640.00", piece: 635 },
                    { img: pro4, name: "Samsung A50", cat: "Mobile", price: "$400.00", piece: 67 },
                    { img: pro5, name: "Camera", cat: "Electronic", price: "$420.00", piece: 52 },
                    { img: pro2, name: "Microsoft Headsquare", cat: "Digital Product", price: "$190.00", piece: 13 },
                    { img: pro3, name: "Women’s Dress", cat: "Fashion", price: "$640.00", piece: 635 },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-7 px-5 py-4 items-center text-sm border-b border-gray-100 hover:bg-gray-50"
                    >

                        {/* Image */}
                        <div>
                            <img
                                src={item.img}
                                alt=""
                                className="w-12 h-12 rounded-lg object-cover"
                            />
                        </div>

                        {/* Name */}
                        <span className="font-medium">{item.name}</span>

                        {/* Category */}
                        <span className="text-gray-500">{item.cat}</span>

                        {/* Price */}
                        <span>{item.price}</span>

                        {/* Piece */}
                        <span>{item.piece}</span>

                        {/* Colors */}
                        {/* 3 colors */}


                        {/* 4 colors */}
                        <div className="flex gap-2">
                            
                            <span className="w-4 h-4 bg-black rounded-full"></span>
                            <span className="w-4 h-4 bg-red-400 rounded-full"></span>
                            <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
                            <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button className="px-2 py-1 border border-gray-200 rounded text-gray-500">
                                ✏
                            </button>
                            <button className="px-2 py-1 border border-gray-200 rounded text-red-500">
                                🗑
                            </button>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default ProductStock;