import { useState } from "react";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setSuccess(false), 3000);
      }, 1500);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Contact Me
        </h2>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="mb-6 text-center bg-green-500 text-white py-2 rounded">
            Message sent successfully 🚀
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Let's Talk
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have a project or idea? Let’s build something amazing together.
            </p>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <p className="text-gray-700 dark:text-gray-300">
                washimwdn@email.com
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 p-8 rounded-2xl shadow-xl space-y-6 border border-gray-200 dark:border-gray-700"
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
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
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
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
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
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition duration-300"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}