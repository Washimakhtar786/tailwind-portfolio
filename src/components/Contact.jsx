export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Get in Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Email: washim@example.com
        </p>

        <a
          href="mailto:washim@example.com"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}