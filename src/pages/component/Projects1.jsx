import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader";
import Modal from "../component/Modal";
import Swal from "sweetalert2";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", body: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = () => {
    if (!newProject.title.trim() || !newProject.body.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill the empty fields!",
        confirmButtonColor: "rgb(87,123,100)",
      });
      return;
    }

    const newItem = { id: Date.now(), ...newProject };
    setProjects((prevProjects) => [newItem, ...prevProjects]);

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "New project added successfully.",
      confirmButtonColor: "rgb(87,123,100)",
      timer: 1500,
    });

    setShowModal(false);
    setNewProject({ title: "", body: "" });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This project will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(220, 38, 38)",
      cancelButtonColor: "gray",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setProjects((prev) => prev.filter((proj) => proj.id !== id));

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "The project has been deleted.",
          confirmButtonColor: "rgb(87,123,100)",
          timer: 1500,
        });
      }
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="w-full text-center py-20 px-6 md:px-12 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to My Design Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-gray-300 mb-8"
        >
          © {new Date().getFullYear()} Safiah.dev — Built with 💙 React.Js & Tailwind
        </motion.p>

        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="bg-[rgb(87,123,100)] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-400"
          >
            + Add Project
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="border border-gray-400 text-gray-200 px-6 py-3 rounded-full hover:bg-gray-800"
          >
            ← Back to Home
          </motion.button>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="w-full max-w-6xl px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition-all"
          >
            <h2 className="text-xl font-semibold mb-2 text-[rgba(142,183,157,1)]">
              {p.title}
            </h2>
            <p className="text-gray-300 text-sm mb-4">{p.body}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleDelete(p.id)}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Delete
            </motion.button>
          </motion.div>
        ))}
      </section>

      {/* MODAL */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="h-[520px] flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 text-center">
              Add New Project
            </h2>

            <div className="flex-grow flex flex-col">
              <input
                type="text"
                placeholder="Project Title"
                className="border p-2 w-full mb-3 rounded text-black focus:outline-none focus:border-[rgb(87,123,100)] transition"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />

              <textarea
                placeholder="Project Description"
                className="border p-2 w-full mb-4 rounded text-black focus:outline-none focus:border-[rgb(87,123,100)] transition resize-none flex-grow"
                value={newProject.body}
                onChange={(e) =>
                  setNewProject({ ...newProject, body: e.target.value })
                }
              />
            </div>

            <button
              onClick={handleAdd}
              className="bg-[rgb(87,123,100)] text-white w-full py-3 rounded-lg 
                       hover:bg-[rgb(70,100,85)] transition duration-300 font-medium"
            >
              Save Project
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
