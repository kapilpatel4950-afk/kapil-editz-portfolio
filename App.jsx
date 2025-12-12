import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const projects = [
    { id: 1, title: 'Project 1', thumb: '/images/project1.jpg', link: 'https://drive.google.com/file/d/11SWOJSF4xTKdPEI-pIBMdoup9eHhjuky/view?usp=drivesdk', tag: 'Edit' },
    { id: 2, title: 'Project 2', thumb: '/images/project2.jpg', link: 'https://drive.google.com/file/d/1tLTfUci8fiQcLm1S7xEKm-Vzq2LKvZdy/view?usp=drivesdk', tag: 'Edit' },
    { id: 3, title: 'Project 3', thumb: '/images/project3.jpg', link: 'https://drive.google.com/file/d/1oaDXBNqHwSbfaA-YoiBTR8JBT8xe53DL/view?usp=drivesdk', tag: 'Edit' },
    { id: 4, title: 'Project 4', thumb: '/images/project4.jpg', link: 'https://drive.google.com/file/d/1Y-2SRnVKg3yQROGwIzqA8VyUydnO5_dN/view?usp=drivesdk', tag: 'Edit' },
    { id: 5, title: 'Project 5', thumb: '/images/project5.jpg', link: 'https://drive.google.com/file/d/1o13NOq8aqGRmh_s5l8hHj9VVs8wHCJyu/view?usp=drivesdk', tag: 'Edit' },
    { id: 6, title: 'Project 6', thumb: '/images/project6.jpg', link: 'https://drive.google.com/file/d/1IldeMaUegnqgKBe5KSA9FTCc1ayhfrOn/view?usp=drivesdk', tag: 'Edit' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <img src="/images/logo.png" alt="Kapil Logo" className="w-12 h-12 rounded-full shadow-md" />
        <h1 className="text-2xl font-bold tracking-tight">Kapil.editz.01 — Video Editor</h1>
        <nav className="space-x-4 hidden md:flex">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="bg-black text-white px-4 py-2 rounded-md">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <p className="text-sm uppercase text-gray-600">Professional Video Editing</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3">I turn raw footage into engaging visual stories</h2>
            <p className="mt-4 text-lg text-gray-700">YouTube edits, short-form reels, travel films, promos — clean cuts, strong pacing, and color that pops.</p>

            <div className="mt-6 flex gap-4">
              <a href="#work" className="px-5 py-3 bg-black text-white rounded-md transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,0,0,0.5)] hover:scale-[1.03]">See Work</a>
              <a href="#contact" className="px-5 py-3 border rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:scale-[1.03]">Get Quote</a>
            </div>

            <ul className="mt-6 text-sm text-gray-600 space-y-2">
              <li>⚡ Fast turnaround</li>
              <li>🎯 Social-first editing</li>
              <li>🔁 Revisions until you're happy</li>
            </ul>
          </div>

          <div className="w-full">
            <motion.div className="bg-gradient-to-tr from-gray-200 to-white rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}>
              <img src="/images/hero-edit.jpg" alt="Kapil editing" className="w-full rounded-lg object-cover h-64 md:h-80" />
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
