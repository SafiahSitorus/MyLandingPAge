// import React, { useState } from "react";

// export default function NotificationSlider() {
//   const [open, setOpen] = useState(false);

//   const notifications = [
//     "Pesanan #1234 telah dikirim",
//     "Password berhasil diperbarui",
//     "Promo diskon 20% untukmu!",
//   ];

//   return (
//     <div className="p-6">
//       <button
//         className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//         onClick={() => setOpen(true)}
//       >
//         Lihat Notifikasi
//       </button>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/30 z-40"
//           onClick={() => setOpen(false)}
//         ></div>
//       )}

//       {/* Sliding Panel */}
//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 z-50 transition-transform duration-500 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <h2 className="text-lg font-bold mb-4">Notifikasi</h2>
//         <ul className="space-y-3">
//           {notifications.map((note, idx) => (
//             <li
//               key={idx}
//               className="p-3 bg-gray-100 rounded-md text-sm text-gray-700"
//             >
//               {note}
//             </li>
//           ))}
//         </ul>

//         <button
//           className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//           onClick={() => setOpen(false)}
//         >
//           Tutup
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

const NotificationSlider = () => {
  const [open, setOpen] = useState(false);

  const notifications = [
    "Pesanan #1234 telah dikirimq",
    "Password berhasil diperbarui",
    "Promo diskon 20% untukmu!",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <button className="btn-open" onClick={() => setOpen(true)}>Lihat Notifikasi</button>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {/* Sliding Panel */}
      <div className={`panel ${open ? "open" : ""}`}>
        <h2>Notifikasi</h2>
        <ul>
          {notifications.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
        <button className="btn-close" onClick={() => setOpen(false)}>Tutup</button>
      </div>
    </div>
  );
};

export default NotificationSlider;
