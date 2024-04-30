"use client";
import Container from "@/components/ui/container";
import React, { useState } from "react";

const page = () => {
  const price = [
    { name: "Static Web Page", charge: 2000 },
    { name: "Landing Page", charge: 4000 },
    { name: "Database SetUp", charge: 8000 },
    { name: "Admin Access Page", charge: 8000 },
    { name: "Multiple Admins", charge: 6000 },
    { name: "Clients Access", charge: 10000 },
    { name: "User Login", charge: 10000 },
  ];

  const [quantities, setQuantities] = useState(Array(price.length).fill(0));

  const handleQuantityChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(event.target.value);
    setQuantities(newQuantities);
  };

  const calculateSum = (index: number) => {
    return quantities[index] * price[index].charge;
  };

  const calculateTotal = () => {
    return quantities.reduce(
      (total, quantity, index) => total + calculateSum(index),
      0
    );
  };

  const handleReset = () => {
    setQuantities(Array(price.length).fill(0));
  };

  return (
    <Container>
      <div className="block mx-auto mt-24">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name of Service</th>
              <th className="px-4 py-2">Charge</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Sum</th>
            </tr>
          </thead>
          <tbody>
            {price.map((service, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{service.name}</td>
                <td className="border px-4 py-2">
                  {service.charge.toLocaleString()}
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    min="0"
                    value={quantities[index]}
                    onChange={(event) => handleQuantityChange(index, event)}
                    className="w-full p-2 bg-transparent"
                  />
                </td>
                <td className="border px-4 py-2">
                  {calculateSum(index).toLocaleString()}
                </td>
              </tr>
            ))}
            <tr>
              <td className="text-right px-4 py-2">
                <button
                  onClick={handleReset}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Reset
                </button>
              </td>
              <td colSpan={2} className="text-right px-4 py-2">
                Total:
              </td>
              <td className="px-4 py-2">{calculateTotal().toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default page;
