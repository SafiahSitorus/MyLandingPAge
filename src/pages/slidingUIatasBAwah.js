import React, { useState } from "react";

export default function SlidingUIAtasBawah() {
  const [showModal, setShowModal] = useState(false);

  const user = {
    name: "Safiah",
    email: "safiah@example.com",
    phone: "081234567890"
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Welcome</h2>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Lihat Detail
      </button>

      {/* Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setShowModal(false)}
        />
      )}

      {/* Bottom Sliding Modal */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl p-6 transition-transform duration-500 z-50 ${
          showModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h3 className="text-lg font-bold mb-3 text-gray-800">Profil User</h3>
        <div className="space-y-2 text-gray-600">
          <p><span className="font-medium">Nama:</span> {user.name}</p>
          <p><span className="font-medium">Email:</span> {user.email}</p>
          <p><span className="font-medium">Telepon:</span> {user.phone}</p>
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
