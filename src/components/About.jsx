import { aboutData } from "../data/aboutData";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#1a0f2e] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 p-6 rounded-xl shadow-lg text-center"
        >
          <img
            src={aboutData.image}
            alt="profile"
            className="w-40 h-40 mx-auto rounded-lg mb-4"
          />

          <h3 className="text-xl font-semibold">
            {aboutData.name}
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            {aboutData.role}
          </p>

          {/* CONTACT */}
          <div className="text-sm text-gray-300 space-y-3 text-left mt-4">
            <p className="flex items-center gap-2">
              <FaPhone /> {aboutData.phone}
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> {aboutData.email}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> {aboutData.location}
            </p>
          </div>

          {/* CV DOWNLOAD */}
          <a
            href="/cv.pdf"
            download
            className="block mt-6 bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            About Me <span className="text-pink-500">—</span>
          </h2>

          <p className="text-gray-300 mb-4">
            {aboutData.description1}
          </p>

          <p className="text-gray-400 mb-8">
            {aboutData.description2}
          </p>

          <h3 className="text-xl font-semibold mb-4">
            What I Do !!!
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {aboutData.services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="border border-gray-700 p-4 rounded-lg hover:border-pink-500 transition"
              >
                <h4 className="text-pink-400 font-semibold">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}