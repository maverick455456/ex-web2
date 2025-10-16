"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [projects] = useState([
    { title: "AI BOT V3", desc: "Next-gen WhatsApp AI bot — smarter & faster!", img: "/ai-bot.jpg" },
    { title: "Web Automation Tool", desc: "Save time with DILA’s automation toolkit.", img: "/automation.jpg" },
    { title: "Cloud API Hub", desc: "Centralized API library for devs.", img: "/cloudapi.jpg" },
  ]);

  return (
    <div className="bg-gradient-to-b from-[#1a002a] to-[#0b0015] text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to DILA LK ⚡</h1>
        <p className="text-gray-300 mb-8">
          Learn, Build & Automate — All in One Place.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => window.open("https://t.me/yourmainchannel", "_blank")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            OUR MAIN CHANNEL
          </button>

          <div className="flex gap-4">
            <button
              onClick={() => window.open("https://yourdeploylink.com", "_blank")}
              className="border-2 border-pink-500 px-6 py-2 rounded-full hover:bg-pink-500 transition"
            >
              DEPLOY BOT
            </button>
            <button
              onClick={() => window.open("https://yourdashboardlink.com", "_blank")}
              className="border-2 border-purple-500 px-6 py-2 rounded-full hover:bg-purple-600 transition"
            >
              Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="overflow-hidden relative py-16 bg-[#12001e]">
        <h2 className="text-center text-3xl font-bold text-pink-400 mb-8">
          🔥 Our Latest Projects
        </h2>

        <div className="animate-scroll flex gap-10 w-max">
          {projects.map((p, i) => (
            <div key={i} className="min-w-[300px] rounded-xl overflow-hidden shadow-lg bg-[#1f0033]">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pink-300">{p.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-pink-400 mb-3">About DILA LK</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          DILA LK is a fast, privacy-first platform designed to help developers learn,
          automate and deploy with efficiency. We bring tutorials, APIs, bots, and media tools
          together in one ecosystem.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 border-t border-[#2b0042]">
        © Created by Money Heist Team 🖤
      </footer>
    </div>
  );
                        }
