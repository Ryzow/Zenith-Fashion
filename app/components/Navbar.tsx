"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Observe active section while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold tracking-wide text-gray-800">
        Zenith<span className="text-blue-600">Fashion</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-gray-700 font-medium">
        <li>
          <Link
            href={'/'}
            onClick={(e) => handleScroll(e, "home")}
            className={`transition-colors duration-300 cursor-pointer ${
              activeSection === "home" ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className={`transition-colors duration-300 cursor-pointer ${
              activeSection === "about" ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#profit"
            onClick={(e) => handleScroll(e, "profit")}
            className={`transition-colors duration-300 cursor-pointer ${
              activeSection === "profit" ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            Profit
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className={`transition-colors duration-300 cursor-pointer ${
              activeSection === "contact" ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
