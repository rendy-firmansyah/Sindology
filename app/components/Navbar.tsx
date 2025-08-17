import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, PhoneIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClickMobile = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsOpen(false); // tutup navbar setelah klik
  };

  // 🔹 Handle scroll untuk show/hide top bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll ke bawah → hide top bar
        setShowTopBar(false);
      } else {
        // Scroll ke atas → show top bar
        setShowTopBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* 🔹 Top Info Bar (animasi muncul/hilang) */}
      <AnimatePresence>
        {showTopBar && (
          <motion.div
            key="topbar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-[#602c94] text-white text-sm h-6 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-6">
              <div className="flex items-center gap-1">
                <PhoneIcon size={12} />
                <span className="text-[10px] sm:text-xs">
                  Contact: +62 856-4840-8330
                </span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="flex items-center gap-1 text-xs">
                  <FaInstagram size={14} />
                  <span className="hidden sm:inline">Instagram</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <FaLinkedin size={14} />
                  <span className="hidden sm:inline">Linkedin</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <FaFacebook size={14} />
                  <span className="hidden sm:inline">Facebook</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <FaEnvelope size={14} />
                  <span className="hidden sm:inline">Email</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Navbar (posisi adaptif) */}
      <nav
        className={`fixed w-full bg-white shadow-md z-40 transition-all duration-300 ${
          showTopBar ? "top-6" : "top-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/assets/sindology.png"
                alt="sindology"
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-lg">Sindology</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <Link
                to="/#home"
                className="hover:text-[#602c94]"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#home")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Home
              </Link>
              <Link
                to="/#about"
                className="hover:text-[#602c94]"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                About
              </Link>
              <Link
                to="/#project"
                className="hover:text-[#602c94]"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#project")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Projects
              </Link>
              <Link
                to="/#services"
                className="hover:text-[#602c94]"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Services
              </Link>
              <Link
                to="/#contact"
                className="hover:text-[#602c94]"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Contact
              </Link>
            </div>

            {/* Buttons (Desktop) */}
            <div className="hidden md:flex gap-4">
              <a
                href="https://wa.me/6285648408330"
                className="px-4 py-2 bg-[#602c94] transition-all ease-linear text-white rounded-lg hover:bg-[#8c3edb]"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white shadow-md px-6 py-4 space-y-4"
            >
              <Link
                to="/#home"
                className="block hover:text-[#602c94]"
                onClick={(e) => handleClickMobile(e, "#home")}
              >
                Home
              </Link>
              <Link
                to="/#about"
                className="block hover:text-[#602c94]"
                onClick={(e) => handleClickMobile(e, "#about")}
              >
                About
              </Link>
              <Link
                to="/#project"
                className="block hover:text-[#602c94]"
                onClick={(e) => handleClickMobile(e, "#project")}
              >
                Projects
              </Link>
              <Link
                to="/#services"
                className="block hover:text-[#602c94]"
                onClick={(e) => handleClickMobile(e, "#services")}
              >
                Services
              </Link>
              <Link
                to="/#contact"
                className="block hover:text-[#8c3edb]"
                onClick={(e) => handleClickMobile(e, "#contact")}
              >
                Contact
              </Link>

              <div className="flex flex-col gap-2 pt-4 border-t">
                <a
                  href="https://wa.me/6285648408330"
                  className="px-4 py-2 bg-[#602c94] text-white rounded-lg hover:bg-[#8c3edb]"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
