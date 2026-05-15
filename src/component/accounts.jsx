import lastTransaction from "../assets/transection.png";
import invoice1 from "../assets/invoice1.png";
import invoice2 from "../assets/invoice2.png";
import invoice3 from "../assets/invoice3.png";
import invoice4 from "../assets/invoice4.png";
import creditover from "../assets/creditover.png";
const Accounts = () => {

  const invoices = [
    { name: "Apple Store", price: "$450", img: invoice1 },
    { name: "Michael", price: "$160", img: invoice2 },
    { name: "Playstation", price: "$1085", img: invoice3 },
    { name: "William", price: "$90", img: invoice4 },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen space-y-6">

      {/* 🔹 TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {[
          { title: "My Balance", amount: "$12,750", color: "bg-yellow-100", icon: "💰" },
          { title: "Income", amount: "$5,600", color: "bg-blue-100", icon: "📈" },
          { title: "Expense", amount: "$3,460", color: "bg-pink-100", icon: "💸" },
          { title: "Total Saving", amount: "$7,920", color: "bg-green-100", icon: "🐷" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-400">{item.title}</p>
              <p className="font-semibold">{item.amount}</p>
            </div>
          </div>
        ))}

      </div>

      {/* 🔹 SECOND ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LAST TRANSACTION */}
        <div className="lg:col-span-2 bg-white p-5 rounded-2xl space-y-4">

          <h2 className="font-semibold text-gray-700">Last Transaction</h2>

          <img
            src={lastTransaction}
            alt="last transaction"
            className="w-full h-auto max-h-[350px] object-contain rounded-2xl"
          />

        </div>

        {/* MY CARD */}
        <div className="bg-white p-5 rounded-2xl">

          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-700">My Card</h2>
            <span className="text-blue-500 text-sm cursor-pointer">See All</span>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-5 rounded-2xl">
            <p className="text-sm">Balance</p>
            <h3 className="text-xl font-bold">$5,756</h3>

            <div className="flex justify-between mt-6 text-xs">
              <div>
                <p className="opacity-70">CARD HOLDER</p>
                <p>Eddy Cusuma</p>
              </div>
              <div>
                <p className="opacity-70">VALID THRU</p>
                <p>12/22</p>
              </div>
            </div>

            <p className="mt-6 tracking-widest">3778 **** **** 1234</p>
          </div>

        </div>

      </div>

      {/* 🔹 THIRD ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* DEBIT CREDIT */}
        <div className="lg:col-span-2 bg-white p-5 rounded-2xl">
          <h2 className="font-semibold text-gray-700 mb-4">
            Debit & Credit Overview
          </h2>


          <div className="flex justify-center">
            <img
              src={creditover}
              alt=""
              className="max-w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* INVOICES */}
        <div className="bg-white p-5 rounded-2xl space-y-4">

          <h2 className="font-semibold text-gray-700">Invoices Sent</h2>
          {invoices.map((item, i) => (
            <div key={i} className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                {/* 🔥 IMAGE */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">5h ago</p>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-600">
                {item.price}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Accounts;