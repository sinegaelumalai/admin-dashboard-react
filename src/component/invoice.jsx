const Invoice = () => {
  return (
    <div className="p-4">

      {/* Title */}
      <h1 className="text-xl font-semibold mb-4">Invoice</h1>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

        {/* Top Section */}
        <div className="grid grid-cols-3 gap-6 text-sm text-gray-600 mb-6">

          {/* From */}
          <div>
            <p className="mb-2">Invoice From :</p>
            <p className="font-medium text-gray-800">Virginia Walker</p>
            <p>9694 Krajcik Locks Suite 635</p>
          </div>

          {/* To */}
          <div>
            <p className="mb-2">Invoice To :</p>
            <p className="font-medium text-gray-800">Austin Miller</p>
            <p>Brookview</p>
          </div>

          {/* Date */}
          <div>
            <p>Invoice Date : 12 Nov 2019</p>
            <p className="mt-2">Due Date : 25 Dec 2019</p>
          </div>

        </div>

        {/* Table Header */}
        <div className="grid grid-cols-5 bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-600 mb-2">
          <span>Serial No.</span>
          <span>Description</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Base Cost</span>
          <span className="text-right">Total Cost</span>
        </div>

        {/* Rows */}

        <div className="grid grid-cols-5 px-4 py-4 text-sm border-b border-gray-200">
          <span>1</span>
          <span>Children Toy</span>
          <span className="text-center">2</span>
          <span className="text-center">$20</span>
          <span className="text-right">$80</span>
        </div>

        <div className="grid grid-cols-5 px-4 py-4 text-sm border-b border-gray-200">
          <span>2</span>
          <span>Makeup</span>
          <span className="text-center">2</span>
          <span className="text-center">$50</span>
          <span className="text-right">$100</span>
        </div>

        <div className="grid grid-cols-5 px-4 py-4 text-sm border-b border-gray-200">
          <span>3</span>
          <span>Asus Laptop</span>
          <span className="text-center">5</span>
          <span className="text-center">$100</span>
          <span className="text-right">$500</span>
        </div>

        <div className="grid grid-cols-5 px-4 py-4 text-sm border-b border-gray-200">
          <span>4</span>
          <span>Iphone X</span>
          <span className="text-center">4</span>
          <span className="text-center">$1000</span>
          <span className="text-right">$4000</span>
        </div>

        {/* Total */}
        <div className="flex justify-end mt-6 text-sm font-medium">
          <span className="mr-4">Total</span>
          <span>=</span>
          <span className="ml-4">$4680</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">

          <button className="border border-gray-300 p-3 rounded-lg">
            🖨
          </button>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2">
            Send
            <span className="bg-white/20 px-2 py-1 rounded">➤</span>
          </button>

        </div>

      </div>
    </div>
  );
};

export default Invoice;