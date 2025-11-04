import { motion } from "framer-motion";

export default function ProjectCard({ project, onDelete }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md p-4 rounded-lg"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {project.title}
      </h2>
      <p className="text-gray-600 mb-3">{project.body}</p>
      <button
        onClick={() => onDelete(project.id)}
        className="text-red-500 text-sm font-semibold hover:underline"
      >
        Delete
      </button>
    </motion.div>
  );
}
