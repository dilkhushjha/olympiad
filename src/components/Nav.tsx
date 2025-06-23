'use client'
const menuData = [
    {
      title: "Courses & Fee",
      subMenu: [
        {
          title: "Courses",
          links: [
            { name: "Engineering", path: "/courses?filter=engineering" },
            { name: "Medical", path: "/courses?filter=medical" },
            { name: "Foundation", path: "/courses?filter=foundation" },
            { name: "Olympiad", path: "/courses?filter=olympiad" },
          ],
        },
        {
          title: "Fee",
          links: [
            { name: "Matrix Structure", path: "/courses/fees" },
            { name: "Pay Online Fee", path: "/pay-fees" },
            { name: "Pay M-SAT Fee", path: "/pay-msat-fee" },
          ],
        },
      ],
    },
    {
      title: "Boasters",
      subMenu: [
        {
          title: "Crash Course",
          links: [{ name: "IIT JEE", path: "/booster-courses/crash-courses/iit-jee" }],
        },
      ],
    },
    {
      title: "Target Exams",
      path: "#",
    },
    {
      title: "Results",
      subMenu: [
        {
          title: "Results",
          links: [
            { name: "JEE Main Result", path: "/results/jee-mains" },
            { name: "JEE Advance Result", path: "/results/jee-advance" },
            { name: "NEET Result", path: "/results/neet" },
            { name: "Other Result", path: "/results/other" },
          ],
        },
      ],
    },
    {
      title: "Scholarship",
      subMenu: [
        {
          title: "Scholarships",
          links: [
            { name: "Scholarships", path: "/scholarship" },
            { name: "Pay M-SAT Fee", path: "/pay-msat-fee" },
          ],
        },
      ],
    },
    {
      title: "Study Materials",
      subMenu: [
        {
          title: "JEE Main",
          links: [
            { name: "Previous Year Papers", path: "#" },
            { name: "Sample Paper", path: "#" },
            { name: "Syllabus 2025", path: "#" },
            { name: "Exam Dates", path: "#" },
          ],
        },
        {
          title: "JEE Advanced",
          links: [
            { name: "Advanced Papers", path: "#" },
            { name: "Mock Tests", path: "#" },
          ],
        },
        {
          title: "NEET",
          links: [{ name: "NEET", path: "#" }],
        },
        {
          title: "Olympiads",
          links: [{ name: "Olympiads", path: "#" }],
        },
      ],
    },
    {
      title: "About Us",
      path: "/about-us",
    },
  ];

  import { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import Link from "next/link";
  import { HiMenu, HiX } from "react-icons/hi"; // For Mobile Menu Icons
  
  export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  
    return (
      <nav className="relative bg-transparent p shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
  
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 text-black">
            {menuData.map((item, index) => (
              <li key={index} className="relative group">
                {item.subMenu ? (
                  <div
                    onMouseEnter={() => setDropdownOpen(item.title)}
                    onMouseLeave={() => setDropdownOpen(null)}
                    className="cursor-pointer flex items-center"
                  >
                    {item.title}
                    <AnimatePresence>
                      {dropdownOpen === item.title && (
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 top-full bg-white shadow-md rounded-lg w-56 p-2"
                        >
                          {item.subMenu.map((sub, i) => (
                            <li key={i} className="py-1">
                              <span className="font-semibold text-gray-700 block px-4">
                                {sub.title}
                              </span>
                              <ul className="pl-4">
                                {sub.links.map((link, j) => (
                                  <li key={j}>
                                    <Link
                                      href={link.path}
                                      className="block px-4 py-1 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md"
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={item.path || "#"} className="hover:text-gray-700">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
  
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
  
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 z-50"
            >
              <ul className="flex flex-col gap-4">
                {menuData.map((item, index) => (
                  <li key={index}>
                    {item.subMenu ? (
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer p-2 text-lg font-semibold">
                          {item.title}
                          <span className="text-gray-500 group-open:rotate-180">▼</span>
                        </summary>
                        <ul className="pl-4">
                          {item.subMenu.map((sub, i) => (
                            <li key={i} className="py-1">
                              <span className="font-semibold text-gray-700 block">{sub.title}</span>
                              <ul>
                                {sub.links.map((link, j) => (
                                  <li key={j}>
                                    <Link
                                      href={link.path}
                                      className="block px-2 py-1 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md"
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link href={item.path || "#"} className="block p-2 text-lg">
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }
  