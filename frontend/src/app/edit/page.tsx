"use client";

import Customer from "@/model/Customer";
import {
  addCustomer,
  deleteCustomer,
  
  updateCustomer,
} from "@/slice/CustomerSlice";
import { AppDispatch } from "@/store/Store";
import {  useState } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  async function addCustomers() {
    const parsedNumber = parseInt(number, 10); // base 10 parsing

    // Alternatively, you can use:
    // const parsedNumber = Number(number);
    // or
    // const parsedNumber = +number;

    const customer = new Customer(name, email, address, parsedNumber);
    dispatch(addCustomer(customer));
  }

  function deleteCustomers() {
    dispatch(deleteCustomer(email));
  }

  function updateCustomers() {
    const customer = new Customer(name, email, address, Number(Number));
    dispatch(updateCustomer(customer));
  }

  const clearFields = () => {
    setName("");
    setEmail("");
    setNumber("");
    setAddress("");
  };

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
              value={name} // controlled by state
              onChange={(e) => setName(e.target.value)}
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
              value={email} // controlled by state
              onChange={(e) => setEmail(e.target.value)}
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
              value={number} // controlled by state
              onChange={(e) => setNumber(e.target.value)}
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
              value={address} // controlled by state
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-4">
            <button
              className="w-full hand bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
              onClick={addCustomers}
            >
              Save
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition" onClick={updateCustomers}>
              Update
            </button>
            <button className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition" onClick={deleteCustomers}>
              Delete
            </button>
            <button
              onClick={clearFields}
              className="w-full bg-yellow-600 text-white py-2 rounded-xl hover:bg-yellow-700 transition"
            >
              Clear
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
