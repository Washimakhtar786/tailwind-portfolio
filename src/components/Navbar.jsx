export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>

        <ul className="space-x-6 hidden md:flex text-sm text-gray-600 dark:text-gray-200">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}