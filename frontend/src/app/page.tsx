"use client";

import Customer from "@/model/Customer";
import { getCustomer } from "@/slice/CustomerSlice";
import { AppDispatch } from "@/store/Store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  const customers = useSelector(
    (state: { customer: Customer[] }) => state.customer
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (customers.length === 0) dispatch(getCustomer());
  }, [dispatch, customers.length]);

  return (
    <>
      <div className="p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Customers
        </h2>
        {customers.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Address
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.email}
                  className="odd:bg-white even:bg-gray-50"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {customer.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {customer.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {customer.address}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {customer.number}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-500">No customers found.</div>
        )}
      </div>
    </>
  );
}