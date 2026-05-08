import cant1 from "../assets/cant1.jpeg";
import cant2 from "../assets/cant2.jpeg";
import cant3 from "../assets/cant3.jpeg";
import cant4 from "../assets/cant4.jpeg";
import cant5 from "../assets/cant5.jpeg";
import cant6 from "../assets/cant6.jpeg";

const Contact = () => {
    return (
        <div className="p-4">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Contact</h1>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    Add New Contact
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                    <img src={cant1} alt="" className="w-full h-48 object-cover" />
                    <div className="text-center p-4">
                        <h3 className="font-medium">Jason Price</h3>
                        <p className="text-xs text-gray-400 mt-1">kuliman.jeremy@yahoo.com</p>

                        <button className="mt-3 border border-gray-300 px-4 py-1.5 rounded-lg text-sm flex items-center justify-center gap-2 mx-auto">
                            ✉ Message
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                    <img src={cant2} alt="" className="w-full h-48 object-cover" />
                    <div className="text-center p-4">
                        <h3 className="font-medium">Duane Dean</h3>
                        <p className="text-xs text-gray-400 mt-1">rusty.botsford@wilfrid.io</p>

                        <button className="mt-3 border border-gray-300 px-4 py-1.5 rounded-lg text-sm flex items-center justify-center gap-2 mx-auto">
                            ✉ Message
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                    <img src={cant3} alt="" className="w-full h-48 object-cover" />
                    <div className="text-center p-4">
                        <h3 className="font-medium">Jonathan Barker</h3>
                        <p className="text-xs text-gray-400 mt-1">cora_haley@quinn.biz</p>

                        <button className="mt-3 border border-gray-300 px-4 py-1.5 rounded-lg text-sm flex items-center justify-center gap-2 mx-auto">
                            ✉ Message
                        </button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                    <img src={cant4} alt="" className="w-full h-48 object-cover" />
                    <div className="text-center p-4">
                        <h3 className="font-medium">Rosie Glover</h3>
                        <p className="text-xs text-gray-400 mt-1">lockman.marques@hotmail.com</p>

                        <button className="mt-3 border border-gray-300 px-4 py-1.5 rounded-lg text-sm flex items-center justify-center gap-2 mx-auto">
                            ✉ Message
                        </button>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                    <img src={cant5} alt="" className="w-full h-48 object-cover" />
                    <div className="text-center p-4">
                        <h3 className="font-medium">Patrick Greer</h3>
                        <p className="text-xs text-gray-400 mt-1">pearlie.eichmann@trevion.net</p>

                        <button className="mt-3 border border-gray-300 px-4 py-1.5 rounded-lg text-sm flex items-center justify-center gap-2 mx-auto">
                            ✉ Message
                        </button>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                    <img src={cant6} alt="" className="w-full h-48 object-cover" />
                    <div className="text-center p-4">
                        <h3 className="font-medium">Darrell Ortega</h3>
                        <p className="text-xs text-gray-400 mt-1">chaya.shields@ferry.info</p>

                        <button className="mt-3 border border-gray-300 px-4 py-1.5 rounded-lg text-sm flex items-center justify-center gap-2 mx-auto">
                            ✉ Message
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;