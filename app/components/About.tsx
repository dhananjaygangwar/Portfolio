// export default function About(){
//     return(
//     <section id="about" className="max-w-4xl mx-auto py-24 px-6">
//         <h3 className="text-3xl font-bold mb-6">About Me</h3>
//         <p className="text-gray-400 leading-relaxed">
//           I’m a backend-focused developer passionate about building scalable
//           systems and clean APIs. I primarily work with C#, ASP.NET Core,
//           PostgreSQL, and JavaScript.
//           <br /><br />
//           Currently focused on backend development and system design,
//           preparing for international developer roles.
//         </p>
//     </section>
//     );
// }
"use client";

import { FaMapMarkerAlt, FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#1f1f1f] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16">

        {/* Left Image */}
        <div>
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={160}
            height={160}
            className="rounded-xl object-cover"
            />
        </div>

        {/* Right Content */}
        <div className="flex-1">

          <h2 className="text-3xl font-bold mb-6">About me</h2>

          <p className="text-gray-300 mb-8">
            Backend-focused developer passionate about building scalable systems 
            and clean APIs. Focused on system design and performance-driven development.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-400" />
              <span><strong className="text-white">Location:</strong> India</span>
            </div>

            <div className="flex items-center gap-3">
              <FaUser className="text-orange-400" />
              <span><strong className="text-white">Age:</strong> 27</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-orange-400" />
              <span><strong className="text-white">Study:</strong> MSc Bioinformatics</span>
            </div>

            <div className="flex items-center gap-3">
              <FaBriefcase className="text-orange-400" />
              <span><strong className="text-white">Focus:</strong> Backend & APIs</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}