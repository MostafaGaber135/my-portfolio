"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav
      className={`
        fixed w-full top-0 z-50
        transition-all duration-300
        ${scrolled ? "bg-[#16181bcc] backdrop-blur-lg shadow-md" : "bg-transparent"}
      `}
      style={{
        borderBottom: scrolled ? "1px solid #2224" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-2 md:px-0">
        {/* Logo */}
        <Link href="#home" onClick={(e) => handleScrollToSection(e, "#home")}>
          <span className="text-2xl font-bold text-blue-500">Mostafa Gaber</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-gray-300 hover:text-blue-400 transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Open Menu">
            {open ? (
              <X size={28} className="text-blue-500" />
            ) : (
              <Menu size={28} className="text-blue-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#16181bcc] backdrop-blur-lg flex flex-col items-center space-y-6 py-6 shadow-lg transition">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-gray-200 text-lg hover:text-blue-400 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
