"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kannu.2097@gmail.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/image.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glass Card */}
      <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 text-center text-white max-w-2xl shadow-xl">

        <h2 className="text-5xl font-extrabold tracking-tight mb-6">
          Hey There! I am Dhananjay
        </h2>

        <p className="text-gray-200 mb-8">
          Backend-focused Full-Stack Developer building scalable APIs and
          clean web applications using .NET and JavaScript.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-white/70">

          <a
            href="https://github.com/dhananjaygangwar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 hover:scale-110 transition duration-300"
          >
            <FaGithub className="w-7 h-7" />
          </a>

          <a
            href="https://www.linkedin.com/in/dhananjaygangwar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>

          {/* <a
            href="https://www.instagram.com/dhananjay__djay/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 hover:scale-110 transition duration-300"
          >
            <FaInstagram className="w-7 h-7" />
          </a> */}

          <a
            href="https://x.com/kannu2097"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 hover:scale-110 transition duration-300"
          >
            <FaXTwitter className="w-7 h-7" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="hover:text-orange-400 hover:scale-110 transition duration-300"
          >
            <FaEnvelope className="w-7 h-7" />
          </button>

        </div>

        {/* Copy Feedback */}
        {copied && (
          <p className="text-xs text-white/60 mt-3">
            Email copied to clipboard!
          </p>
        )}
      </div>
      
      <div className="absolute bottom-10 left-10 text-white/40 text-xs italic max-w-xs hidden md:block">
        In this world, winning is everything.
        <br />
        <span className="text-white/30">— Ayanokoji</span>
      </div>

    </section>
  );
}