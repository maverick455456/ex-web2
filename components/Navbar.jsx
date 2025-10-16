"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home", "Services", "FAQ", "Team", "About", "Contact", "Privacy", "Terms", "Login"
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-700 to-pink-600">
      <h1 className="font-bold text-lg">Cyber VibeX / DILA LK</h1>
      <button onClick={() => setOpen(!open)} className="text-2xl focus:outline-none">
        {open ? "✖" : "☰"}
      </button>

      {open && (
        <motion.nav
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 w-64 h-full bg-[#21002e] p-6 shadow-lg z-50"
        >
          <ul className="space-y-4 mt-10">
            {navItems.map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-pink-400">{item}</li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
