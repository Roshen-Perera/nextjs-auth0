

const Page = () => {
  return (
    <>
      <main className="">
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Save Customer</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+94 71 234 5678"
              className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="address"
              placeholder="Avenue, City, Country"
              className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-4">
            <button className="w-full hand bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
              Save
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
              Update
            </button>
            <button className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition">
              Delete
            </button>
            <button className="w-full bg-yellow-600 text-white py-2 rounded-xl hover:bg-yellow-700 transition">
              Clear
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page
