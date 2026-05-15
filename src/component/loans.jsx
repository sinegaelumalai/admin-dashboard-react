const Loans = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen space-y-6">

      {/* 🔹 TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {[
          { title: "Personal Loans", amount: "$50,000", color: "bg-blue-100", icon: "👤" },
          { title: "Corporate Loans", amount: "$100,000", color: "bg-yellow-100", icon: "💼" },
          { title: "Business Loans", amount: "$500,000", color: "bg-pink-100", icon: "📊" },
          { title: "Custom Loans", amount: "Choose Money", color: "bg-green-100", icon: "🛠️" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm">

            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color}`}>
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-gray-400">{item.title}</p>
              <p className="font-semibold text-gray-800">{item.amount}</p>
            </div>

          </div>
        ))}

      </div>

      {/* 🔹 TABLE */}
      <div className="bg-white p-5 rounded-2xl">

        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Active Loans Overview
        </h2>

        {/* 🔥 IMPORTANT FOR MOBILE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[800px] text-sm text-gray-600">

            {/* HEADER */}
            <thead className="text-gray-400 border-b">
              <tr>
                <th className="py-3 text-left">SL No</th>
                <th className="text-left">Loan Money</th>
                <th className="text-left">Left to repay</th>
                <th className="text-left">Duration</th>
                <th className="text-left">Interest rate</th>
                <th className="text-left">Installment</th>
                <th className="text-left">Repay</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>

              {[
                ["$100,000", "$40,500", "8 Months", "12%", "$2,000 / month"],
                ["$500,000", "$250,000", "36 Months", "10%", "$8,000 / month"],
                ["$900,000", "$40,500", "12 Months", "12%", "$5,000 / month"],
                ["$50,000", "$40,500", "25 Months", "5%", "$2,000 / month"],
                ["$50,000", "$40,500", "5 Months", "16%", "$10,000 / month"],
                ["$80,000", "$25,500", "14 Months", "8%", "$2,000 / month"],
                ["$12,000", "$5,500", "9 Months", "13%", "$500 / month"],
                ["$160,000", "$100,800", "3 Months", "12%", "$900 / month"],
              ].map((item, i) => (
                <tr key={i} className=" last:border-none">

                  <td className="py-4">{String(i + 1).padStart(2, "0")}.</td>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                  <td>{item[4]}</td>

                  {/* 🔥 BUTTON */}
                  <td>
                    <button
                      className={`px-4 py-1 rounded-full text-sm border 
                      ${i === 0
                          ? "border-blue-600 text-blue-600"
                          : "border-gray-400 text-gray-600"
                        }`}
                    >
                      Repay
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

            {/* 🔹 FOOTER TOTAL */}
            <tfoot>
              <tr className="text-red-500 font-medium">
                <td className="py-4">Total</td>
                <td>$125,000</td>
                <td>$750,000</td>
                <td></td>
                <td></td>
                <td>$50,000 / month</td>
                <td></td>
              </tr>
            </tfoot>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Loans;