import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/WorldCupLogoNav.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Links (Teams only; Players removed)
  const navLinks = [
    ["Teams", "/teams"],
    ["Gallery", "/gallery"],
    ["Rankings", "/rankings"],
    ["Fixtures", "/fixtures"],
    ["Contact", "/contact"],
  ];

  // Detect screen width change
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add scroll shadow + blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`backdrop-blur-md transition-all duration-300 sticky top-0 z-50 ${
        scrolled ? "bg-sv-dark/95 shadow-lg backdrop-blur-sm" : "bg-sv-dark/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
          </Link>
          <Link to="/" className="text-xl font-bold">
            SoccerVerse
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="block md:hidden focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Links */}
        {(menuOpen || isDesktop) && (
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden
              ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"}
              absolute top-16 left-0 w-full bg-sv-dark/90 md:static md:flex md:w-auto md:bg-transparent
            `}
          >
            <div className="flex flex-col items-center md:flex-row md:items-center gap-4 p-4 md:p-0">
  {navLinks.map(([label, path]) => {
  const isActive = location.pathname.startsWith(path);

  return (
    <Link
      key={label}
      to={path}
      onClick={() => setMenuOpen(false)}
      aria-current={isActive ? "page" : undefined}
      className={`relative text-lg md:text-base font-medium transition duration-200 
        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all 
        after:duration-300 hover:text-sv-gold hover:after:w-full
        ${
          isActive
            ? "text-sv-gold after:w-full after:bg-sv-gold"
            : "text-white after:w-0 after:bg-sv-gold"
        }`}
    >
      {/* visually visible label */}
      {label}
      {/* a hidden label for screen readers to announce active state */}
      {isActive && <span className="sr-only"> (current page)</span>}
    </Link>
  );
})}

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
