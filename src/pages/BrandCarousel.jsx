import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://picsum.photos/seed/brand1/200/80",
  "https://picsum.photos/seed/brand2/200/80",
  "https://picsum.photos/seed/brand3/200/80",
  "https://picsum.photos/seed/brand4/200/80",
  "https://picsum.photos/seed/brand5/200/80",
  "https://picsum.photos/seed/brand6/200/80",
];

export default function BrandCarousel() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <h3 className="text-center text-lg font-medium mb-10">
    © {new Date().getFullYear()} Safiah.dev — Built with 💙 React.Js & Tailwind
      </h3>

      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`brand-${index}`}
              className="h-16 w-auto rounded-xl grayscale opacity-80 hover:opacity-100 hover:grayscale-0 hover:scale-105 shadow-sm transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Fade effect at edges */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  );
}
