import imp1 from "../assets/imp1.jpeg";
import imp2 from "../assets/imp2.png";
import imp3 from "../assets/imp3.png";
import imp4 from "../assets/imp4.png";
import imp5 from "../assets/imp5.png";
import imp6 from "../assets/imp6.png";
import imp7 from "../assets/imp7.png";
import imp8 from "../assets/imp8.png";
import imp9 from "../assets/imp9.png";
import imp10 from "../assets/imp10.png";
import imp11 from "../assets/imp11.png";
import imp12 from "../assets/imp12.png";

const Team = () => {
    const data = [
        { img: imp1, name: "Jason Price", role: "Admin", email: "janick_parisian@yahoo.com" },
        { img: imp2, name: "Jukkoe Sisao", role: "CEO", email: "sibyl_lozey@gmail.com" },
        { img: imp3, name: "Harriet King", role: "CTO", email: "nadia_block@hotmail.com" },
        { img: imp4, name: "Lenora Benson", role: "Lead", email: "feil.wallace@kunde.us" },

        { img: imp5, name: "Olivia Reese", role: "Strategist", email: "kemmer.hattie@cremin.us" },
        { img: imp6, name: "Bertha Valdez", role: "CEO", email: "loraine.koelpin@tromp.io" },
        { img: imp7, name: "Harriet Payne", role: "Digital Marketer", email: "nannie_west@estrella.tv" },
        { img: imp8, name: "George Bryant", role: "Social Media", email: "delmer.kling@gmail.com" },

        { img: imp9, name: "Lily French", role: "Strategist", email: "lucienne.herman@hotmail.com" },
        { img: imp10, name: "Howard Adkins", role: "CEO", email: "wiegand.leonor@herman.us" },
        { img: imp11, name: "Earl Bowman", role: "Digital Marketer", email: "waino_altenwerth@nicolette.tv" },
        { img: imp12, name: "Patrick Padilla", role: "Social Media", email: "octavia.nienow@gleichner.net" },
    ];

    return (
        <div className="p-4 space-y-4">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Team</h1>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    Add New Member
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-4 shadow-sm text-center border border-gray-100"
                    >

                        {/* Avatar */}
                        <div className="flex justify-center">
                            <img
                                src={item.img}
                                alt=""
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        </div>

                        {/* Name */}
                        <h3 className="mt-3 font-medium text-sm">{item.name}</h3>

                        {/* Role */}
                        <p className="text-xs text-gray-400">{item.role}</p>

                        {/* Email */}
                        <p className="text-xs text-gray-400 mt-1 break-all">
                            {item.email}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Team;