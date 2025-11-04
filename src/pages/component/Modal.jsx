import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ children, onClose }) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50  backdrop-blur-sm flex items-center justify-center z-[9999]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] sm:w-[450px] relative"
        >
          <button
            className="absolute top-3 right-4 text-gray-500 hover:text-[rgb(87,123,100)] transition"
            onClick={onClose}
          >
            ✕
          </button>
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
