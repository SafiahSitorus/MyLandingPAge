import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../images/smsnP.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdShoppingCartCheckout, MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Project from "./projects";
export default function Home() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            {/* HEADER */}
            <header className="sticky top-0 z-50 bg-opacity-80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
                <motion.h1
                    className="text-2xl font-bold text-white tracking-wide"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    < span href="#">Safiah<span className="text-blue-400">.dev</span></span>
                </motion.h1>
                <motion.nav
                    className="space-x-6 text-sm font-medium text-white"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <nav className="space-x-6 text-sm font-medium">
                        <a href="/MyLandingPAge" className="hover:text-blue-400 transition">About</a>

                        <a href="/projects" className="hover:text-blue-400 transition" >Projects</a>

                        <a href="/projects#contact" className="hover:text-blue-400 transition">
                            Contact
                        </a>
                    </nav>
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



                    </motion.div>

                    {/* Image & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center gap-4"
                    >
                        {/* Efek gambar bergerak */}
                      <motion.div
  initial={{ y: 0, rotate: 0 }}
  animate={{
    y: [0, -25, 0],        // naik-turun lebih kelihatan
    rotate: [0, 2, -2, 0], // goyang lembut
  }}
  transition={{
    duration: 5,           // 5 detik per siklus
    repeat: Infinity,      // loop terus
    ease: "easeInOut",
  }}
  className="overflow-hidden rounded-full w-64 h-80 shadow-lg"
>
  <motion.img
    src={heroImage}
    alt="Hero"
    className="h-full w-full object-cover object-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 80 }}
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


            {/* FOOTER */}
            <footer className="py-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Safiah.dev — Built with 💙 React.Js & Tailwind
            </footer>
        </div>
    );
}
