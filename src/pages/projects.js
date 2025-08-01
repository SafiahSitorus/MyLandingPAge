import React, { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import heroImage from "../images/smsnP.png";
import {
    FaRocketchat, FaGithub, FaLinkedin

} from "react-icons/fa";
import { MdShoppingCartCheckout, MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Project() {
    const [showContact, setShowContact] = useState(false);
    const contactRef = useRef(null);
useEffect(() => {
  if (showContact && contactRef.current) {
    setTimeout(() => {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100); // Tambahkan sedikit delay agar animasi muncul dulu
  }
}, [showContact]);
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === "#contact") {
                setShowContact(true);
            }
        };

        // Jalankan sekali saat mount (untuk handle langsung jika sudah ada hash)
        handleHashChange();

        // Pasang listener
        window.addEventListener("hashchange", handleHashChange);

        // Bersihkan saat unmount
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);


    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            {/* HEADER */}
 

            {/* PROJECT SECTION */}
            <section className="py-16 bg-transparent min-h-[600px]" id="features">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Item */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-white/10 p-3 rounded-xl">
                                {/* Icon bisa pakai image atau svg */}
                                <IoIosSend />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Intelligent Messaging</h3>
                                <p className="text-gray-300">
                                    Improved the Frontend (FE) of an existing omnichannel application, broadcast application by fixing bugs
                                    and optimizing performance using ReactJs
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">ReactJs</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">Microfrontend</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">React Redux</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">Webpack(custom)</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">React Bootstrap</span>
                                </div>
                            </div>
                        </div>

                        {/* Tambahkan item lainnya dengan pola yang sama */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-white/10 p-3 rounded-xl">
                                <MdShoppingCartCheckout />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Landing Page Checkout Flow</h3>
                                <p className="text-gray-300">
                                    Analysis, design and implemented of payment application landing page catalog (META features), Checkout Information, Payment Confirmation, Tracking Order, Payment Notifications (Success & Failed)
                                </p>

                                {/* TAG TEKNOLOGI */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">ReactJs</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">React Bootstrap</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white/10 p-3 rounded-xl">
                                <FaRocketchat />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                                <p className="text-gray-300">
                                    Migrated(conducted frontend analysis and implemented) the existing omnichannel frontend to a
                                    micro-frontend architecture using ReactJs
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">ReactJs</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">Microfrontend</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">React Redux</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">Webpack(custom)</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">React Bootstrap</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">Javascript</span>
                                    <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">Socket.IO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            {showContact && (
                <motion.section
                    ref={contactRef}
                    id="contact"
                    className="py-20 px-4 bg-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
                        <p className="text-gray-300 mb-8">
                            Feel free to reach out via email or connect with me on LinkedIn or GitHub.
                        </p>
                        <div className="flex justify-center items-center gap-6 flex-wrap">
                            <a href="mailto:safiahsitorus@gmail.com" className="text-white text-2xl hover:text-gray-300">
                                <MdOutlineEmail />
                            </a>
                            <a href="https://github.com/SafiahSitorus" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
                                <FaGithub />
                            </a>
                            <a    href="https://www.linkedin.com/in/safiah-sitorus/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-300">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </motion.section>
            )}


        </div>
    );
}
