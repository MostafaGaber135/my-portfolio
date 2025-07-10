"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { useSmoothSectionScroll } from "@/lib/useSmoothSectionScroll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useSmoothSectionScroll("main-navbar");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`
        w-full top-0 left-0 z-50 fixed
        transition-all duration-300
        ${scrolled ? "bg-[#111319]/80 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex justify-between items-center max-w-8xl mx-auto px-4 sm:px-8 md:px-16 py-4">
        <Link
          href="#home"
          className="font-bold text-lg sm:text-2xl text-[#5593f7] tracking-tight hover:opacity-80 transition"
        >
          Mostafa Gaber
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-3 lg:gap-5 xl:gap-6">
            {navLinks.map(link => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#5593f7] font-medium transition px-2 py-1 rounded"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <button
          className="md:hidden text-[#5593f7] p-2 focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
  <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex md:hidden">
    <div className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-[#16181d] shadow-xl p-8 flex flex-col gap-4">
      <div className="flex justify-between items-center mb-8">
        <span className="font-bold text-xl text-[#5593f7]">Menu</span>
        <button
          className="text-gray-400 hover:text-[#5593f7]"
          onClick={() => setMenuOpen(false)}
        >
          <X size={26} />
        </button>
      </div>
      {navLinks.map(link => (
        <a
          key={link.label}
          href={link.href}
          className="block py-2 px-2 rounded-lg text-lg font-medium text-gray-300 hover:bg-[#23242b] hover:text-[#5593f7] transition"
          onClick={() => {
            setMenuOpen(false);
            setTimeout(() => {
              window.location.hash = link.href;
            }, 10);
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
    <div className="absolute inset-0" onClick={() => setMenuOpen(false)} />
  </div>
)}
    </nav>
  );
}
