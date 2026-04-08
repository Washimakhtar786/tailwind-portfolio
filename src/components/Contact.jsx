import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("All fields are required ❌");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_3jrw415",
        "template_2nyxbrh",
        form,
        "T6UYvIKLd1cg_BNsX"
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE ANIMATION */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Let's Talk
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have a project or idea? Let’s build something amazing together.
            </p>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <p className="text-gray-700 dark:text-gray-300">
                washimwdn@gmail.com
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8"
          >

            {/* NAME */}
            <div className="relative">
              <FaUser className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="peer w-full pl-10 pt-6 pb-2 bg-transparent border-b outline-none text-gray-800 dark:text-white"
              />
              <label
                className={`absolute left-10 transition-all duration-200 text-gray-500
                ${form.name ? "top-2 text-sm" : "top-5 text-base"}
                peer-focus:top-2 peer-focus:text-sm`}
              >
                Your Name
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="peer w-full pl-10 pt-6 pb-2 bg-transparent border-b outline-none text-gray-800 dark:text-white"
              />
              <label
                className={`absolute left-10 transition-all duration-200 text-gray-500
                ${form.email ? "top-2 text-sm" : "top-5 text-base"}
                peer-focus:top-2 peer-focus:text-sm`}
              >
                Your Email
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="peer w-full pl-10 pt-6 pb-2 bg-transparent border-b outline-none text-gray-800 dark:text-white"
              />
              <label
                className={`absolute left-10 transition-all duration-200 text-gray-500
                ${form.message ? "top-2 text-sm" : "top-5 text-base"}
                peer-focus:top-2 peer-focus:text-sm`}
              >
                Your Message
              </label>
            </div>

            {/* BUTTON */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}