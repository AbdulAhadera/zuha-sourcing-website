import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/zuha-sourcing-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-white">
      <div className="mx-auto flex h-[90px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Zuha Sourcing"
            className="h-[62px] w-[62px] object-contain"
          />

          <div className="hidden sm:block">
            <div className="font-heading text-[27px] font-semibold uppercase leading-none tracking-[0.08em]">
              <span className="text-primary">Zuha </span>
              <span className="text-accent">Sourcing</span>
            </div>

            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] text-primary">
              Sourcing Excellence. Delivering Value.
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[14px] font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-primary hover:text-accent"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden bg-primary px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-accent lg:inline-flex"
        >
          Get In Touch
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </svg>
          ) : (
            <svg
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 7H20" />
              <path d="M4 12H20" />
              <path d="M4 17H20" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[450px] border-t border-border-light"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-5 py-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `border-b border-border-light py-4 text-[15px] font-semibold ${
                  isActive ? "text-accent" : "text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex justify-center bg-primary px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;