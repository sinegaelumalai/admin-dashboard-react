import ser1 from "../assets/ser1.png";
import ser2 from "../assets/ser2.png";
import ser3 from "../assets/ser3.png";
import ser4 from "../assets/ser4.png";
import ser5 from "../assets/ser5.png";
import ser6 from "../assets/ser6.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

const Services = () => {
    return (
        <div className="p-4 md:p-6 bg-gray-100 min-h-screen space-y-6">

            {/* 🔹 TOP CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {[
                    { title: "Life Insurance", sub: "Unlimited protection", img: s1 },
                    { title: "Shopping", sub: "Buy. Think. Grow", img: s2 },
                    { title: "Safety", sub: "We are your allies", img: s3 },
                ].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl flex items-center gap-4">

                        <img src={item.img} className="w-12 h-12 rounded-full object-cover" />

                        <div>
                            <p className="font-semibold text-gray-700">{item.title}</p>
                            <p className="text-sm text-blue-400">{item.sub}</p>
                        </div>

                    </div>
                ))}

            </div>

            {/* 🔹 TITLE */}
            <h2 className="text-lg font-semibold text-gray-700">
                Bank Services List
            </h2>

            {/* 🔹 LIST */}
            <div className="space-y-4">

                {[
                    { title: "Business loans", img: ser1 },
                    { title: "Checking accounts", img: ser2 },
                    { title: "Savings accounts", img: ser3 },
                    { title: "Debit and credit cards", img: ser4 },
                    { title: "Life Insurance", img: ser5 },
                    { title: "Business loans", img: ser6 },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white p-4 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                    >

                        {/* LEFT */}
                        <div className="flex items-center gap-4">

                            <img
                                src={item.img}
                                alt=""
                                className="w-12 h-12 rounded-xl object-cover"
                            />

                            <div>
                                <p className="font-semibold text-gray-700 text-sm">
                                    {item.title}
                                </p>
                                <p className="text-xs text-blue-400">
                                    It is a long established
                                </p>
                            </div>

                        </div>

                        {/* MIDDLE */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 text-sm text-gray-500 flex-1">

                            {[1, 2, 3].map((_, idx) => (
                                <div key={idx}>
                                    <p className="font-medium text-gray-700">Lorem Ipsum</p>
                                    <p className="text-blue-400 text-xs">Many publishing</p>
                                </div>
                            ))}

                        </div>

                        {/* RIGHT BUTTON */}
                        <button
                            className={`px-5 py-2 rounded-full text-sm border
              ${i === 2
                                    ? "border-blue-600 text-blue-600"
                                    : "border-gray-300 text-gray-600"
                                }`}
                        >
                            View Details
                        </button>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Services;