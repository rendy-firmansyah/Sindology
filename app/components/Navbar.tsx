import { Link } from "react-router"; // atau "react-router-dom" tergantung versimu
import { useState, useEffect } from "react";
import { Menu, X, PhoneIcon, Sun, Moon } from "lucide-react";
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
  
  // 🔹 State default diubah menjadi true (Dark Mode)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 🔹 Cek preferensi user saat pertama kali web dimuat
  useEffect(() => {
    // Mengecek apakah sebelumnya user pernah memilih tema terang
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Jika baru pertama kali buka (belum ada data) atau tersimpan 'dark', paksa mode gelap
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  // 🔹 Fungsi untuk toggle Dark Mode & simpan ke Local Storage
  const toggleDarkMode = () => {
    if (isDarkMode) {
      // Berubah ke Light Mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Berubah ke Dark Mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const handleClickMobile = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsOpen(false);
  };

  // 🔹 Handle scroll untuk show/hide top bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* 🔹 Top Info Bar */}
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
                <div className="flex items-center gap-1 text-xs hover:text-gray-300">
                  <FaInstagram size={14} />
                  <span className="hidden sm:inline">Instagram</span>
                </div>
                <div className="flex items-center gap-1 text-xs hover:text-gray-300">
                  <FaLinkedin size={14} />
                  <span className="hidden sm:inline">Linkedin</span>
                </div>
                <div className="flex items-center gap-1 text-xs hover:text-gray-300">
                  <FaFacebook size={14} />
                  <span className="hidden sm:inline">Facebook</span>
                </div>
                <div className="flex items-center gap-1 text-xs hover:text-gray-300">
                  <FaEnvelope size={14} />
                  <span className="hidden sm:inline">Email</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Navbar (posisi adaptif & support dark mode) */}
      <nav
        className={`fixed w-full shadow-md z-40 transition-all duration-300 ${
          showTopBar ? "top-6" : "top-0"
        } bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
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
            <div className="hidden md:flex gap-6 items-center">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/#${item.toLowerCase()}`}
                  className="hover:text-[#602c94] dark:hover:text-[#a874db] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Buttons & Toggle (Desktop) */}
            <div className="hidden md:flex gap-4 items-center">
              {/* Toggle Dark Mode Button */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
              </button>

              <a
                href="https://wa.me/6285648408330"
                className="px-4 py-2 bg-[#602c94] transition-all ease-linear text-white rounded-lg hover:bg-[#8c3edb]"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Actions (Toggle + Hamburger) */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
              </button>
              
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
              className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4 space-y-4"
            >
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/#${item.toLowerCase()}`}
                  className="block hover:text-[#602c94] dark:hover:text-[#a874db] transition-colors"
                  onClick={(e) => handleClickMobile(e, `#${item.toLowerCase()}`)}
                >
                  {item}
                </Link>
              ))}

              <div className="flex flex-col gap-2 pt-4 border-t dark:border-gray-700">
                <a
                  href="https://wa.me/6285648408330"
                  className="px-4 py-2 bg-[#602c94] text-center text-white rounded-lg hover:bg-[#8c3edb]"
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