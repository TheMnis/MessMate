import { useState, useEffect } from "react";
import {
  FaUtensils,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "Find Mess",
    "Pricing",
    "About",
    "Contact",
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">

            <div className="bg-green-600 p-3 rounded-2xl shadow-lg transition duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaUtensils className="text-white text-2xl" />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-green-600">
                MessMate
              </h1>

              <p className="text-xs text-gray-500">
                Smart Mess Management
              </p>
            </div>

          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 font-semibold text-gray-700">

            {navLinks.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer hover:text-green-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </li>
            ))}

          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-600 hover:text-white transition duration-300">
              <FaMoon />
            </button>

            <button className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition duration-300">
              Login
            </button>

            <button className="bg-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 hover:scale-105 transition duration-300 shadow-lg">
              Get Started
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-green-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`fixed top-20 left-0 w-full bg-white shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >

        <ul className="flex flex-col">

          {navLinks.map((item) => (
            <li
              key={item}
              className="border-b px-6 py-5 hover:bg-green-50 cursor-pointer font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}

        </ul>

        <div className="p-6 flex flex-col gap-4">

          <button className="border-2 border-green-600 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition">
            Login
          </button>

          <button className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
            Get Started
          </button>

        </div>

      </div>

      {/* Navbar Spacer */}

      <div className="h-20"></div>

    </>
  );
}

export default Navbar;