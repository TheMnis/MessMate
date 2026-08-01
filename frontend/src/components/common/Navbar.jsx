import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
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
            ? "[background:color-mix(in_srgb,var(--color-surface) 90%,transparent)] backdrop-blur-lg elevation-lg"
            : "[background:var(--color-surface)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">

            <div className="[background:var(--color-primary)] p-3 radius-2xl elevation-lg transition duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaUtensils className="[color:var(--color-text-inverse)] text-2xl" />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold [color:var(--color-success)]">
                MessMate
              </h1>

              <p className="text-xs [color:var(--color-text-muted)]">
                Smart Mess Management
              </p>
            </div>

          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 font-semibold [color:var(--color-text-secondary)]">

            {navLinks.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer hover:[color:var(--color-success)] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:[background:var(--color-primary)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </li>
            ))}

          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            <button className="w-11 h-11 radius-full border [border-color:var(--color-border)] flex items-center justify-center hover:[background:var(--color-primary)] hover:[color:var(--color-text-inverse)] transition duration-300">
              <FaMoon />
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border-2 [border-color:var(--color-primary)] [color:var(--color-success)] px-6 py-2 radius-xl font-semibold hover:[background:var(--color-primary)] hover:[color:var(--color-text-inverse)] transition duration-300"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="[background:var(--color-primary)] [color:var(--color-text-inverse)] px-6 py-2 radius-xl font-semibold hover:[background:var(--color-primary-hover)] hover:scale-105 transition duration-300 elevation-lg"
            >
              Get Started
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl [color:var(--color-success)]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`fixed top-20 left-0 w-full [background:var(--color-surface)] elevation-lg transition-all duration-300 lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >

        <ul className="flex flex-col">

          {navLinks.map((item) => (
            <li
              key={item}
              className="border-b px-6 py-5 hover:[background:var(--color-primary-subtle)] cursor-pointer font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}

        </ul>

        <div className="p-6 flex flex-col gap-4">

          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
            className="border-2 [border-color:var(--color-primary)] [color:var(--color-success)] py-3 radius-xl font-semibold hover:[background:var(--color-primary)] hover:[color:var(--color-text-inverse)] transition"
          >
            Login
          </button>

          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/register");
            }}
            className="[background:var(--color-primary)] [color:var(--color-text-inverse)] py-3 radius-xl font-semibold hover:[background:var(--color-primary-hover)] transition"
          >
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
