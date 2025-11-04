import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import heroImage from "../images/smsnP.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Project from "./projects";
import { useNavigate } from "react-router-dom";
import BrandCarousel from "./BrandCarousel";

export default function Home() {
    const navigate = useNavigate();
    // / Motion values untuk interaktif dengan mouse
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-200, 200], [10, -10]);
    const rotateY = useTransform(x, [-200, 200], [-10, 10]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const xPos = e.clientX - window.innerWidth / 2;
            const yPos = e.clientY - window.innerHeight / 2;
            x.set(xPos / 20);
            y.set(yPos / 20);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white scroll-smooth">
            {/* HEADER */}
            <header className="sticky top-0 z-50 bg-opacity-80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
                <motion.h1
                    className="text-2xl font-bold text-white tracking-wide"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span>Safiah<span className="text-blue-400">.dev</span></span>
                </motion.h1>
                <motion.nav
                    className="space-x-6 text-sm font-medium text-white"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <a href="#about" className="hover:text-blue-400 transition">About</a>
                    <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
                </motion.nav>
            </header>

            {/* HERO SECTION */}
            <main className="min-h-[600px] my-12 flex items-center justify-center p-8">
                <div className="max-w-6xl grid grid-cols-1 md:grid-cols-[1.3fr_1fr] items-center gap-12">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-7xl font-semibold leading-tight mb-6">
                            Welcome to<br />
                            My Design<br />
                            Portfolio
                        </h1>
                        <p className="text-gray-300 text-center text-lg mb-6">
                            More about me — <span className="font-semibold text-white">Safiah Sitorus / Frontend Developer</span>{" "}
                            <a
                                href="/CV_Safiah_Sitorus.pdf"
                                download
                                className="inline-flex items-center gap-2 ml-3 text-sm text-white border border-white px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition"
                            >
                                <FiDownload className="text-base" />
                                Download CV
                            </a>
                        </p>
                        
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="btn-outline-white  border-white px-3 py-1.5 rounded-full "
                                onClick={() => navigate("/projects1")}
                            >
                                TRY ON
                            </motion.button>
                    </motion.div>

                    {/* Image & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center gap-4"
                    >
                        {/* Floating + Parallax Image */}
                        <motion.div
                            style={{ rotateX, rotateY }}
                            animate={{
                                y: [0, -20, 0], // naik turun lembut
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="overflow-hidden rounded-full w-64 h-80 shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                        >
                            <motion.img
                                src={heroImage}
                                alt="Hero"
                                className="h-full w-full object-cover object-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            />
                        </motion.div>

                        {/* Social Links */}
                        <div className="flex gap-6 mt-4">
                            <a
                                href="https://www.linkedin.com/in/safiah-sitorus/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-white transition"
                            >
                                <FaLinkedin size={40} />
                            </a>
                            <a
                                href="https://github.com/SafiahSitorus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <FaGithub size={40} />
                            </a>
                            <a
                                href="mailto:safiahsitorus@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <MdOutlineEmail size={40} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* PROJECTS SECTION */}
            <section id="projects" className="py-20 px-4 bg-gray-900 ">
                <h2 className="text-4xl font-bold mb-12 text-center">My Projects & Features</h2>
                <Project />
            </section>
            <BrandCarousel />
            {/* CONTACT SECTION */}

            {/* FOOTER */}
            <footer className="py-6 text-center text-sm text-gray-400">

            </footer>
        </div>
    );
}
