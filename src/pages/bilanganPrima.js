import React, { useState } from "react";

export default function Create() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("❌ Masukkan angka yang valid");
      return;
    }
    const check = isPrime(num);
    setResult(check ? `✅ ${num} adalah bilangan prima` : `❌ ${num} bukan bilangan prima`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleCheck();
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">🔍 Cek Bilangan Prima</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        // onKeyPress={handleKeyPress}
        placeholder="Masukkan angka"
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleCheck}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Cek
      </button>
      {result && (
        <p className="mt-4 text-center font-medium">{result}</p>
      )}
    </div>
  );
}
