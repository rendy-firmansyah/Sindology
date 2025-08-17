import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  MailIcon,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  // cek posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fungsi scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/assets/sindology.png"
              alt="sindology"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-lg">Sindology</span>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Building innovative solutions for tomorrow&apos;s challenges.
            We&apos;re passionate about creating technology that makes a
            difference.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <a href="#">
              <Github className="w-5 h-5 hover:text-indigo-600" />
            </a>
            <a href="#">
              <Twitter className="w-5 h-5 hover:text-indigo-600" />
            </a>
            <a href="#">
              <Linkedin className="w-5 h-5 hover:text-indigo-600" />
            </a>
            <a href="#">
              <MailIcon className="w-5 h-5 hover:text-indigo-600" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link
                to="/#home"
                className="hover:text-indigo-600"
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
            </li>
            <li>
              <Link
                to="/#about"
                className="hover:text-indigo-600"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/#project"
                className="hover:text-indigo-600"
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
            </li>
            <li>
              <Link
                to="/#service"
                className="hover:text-indigo-600"
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
            </li>
            <li>
              <Link
                to="/#contact"
                className="hover:text-indigo-600"
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
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="" className="hover:text-indigo-600">
                Web Development
              </a>
            </li>
            <li>
              <a href="" className="hover:text-indigo-600">
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="" className="hover:text-indigo-600">
                IoT
              </a>
            </li>
            <li>
              <a href="" className="hover:text-indigo-600">
                Game Development
              </a>
            </li>
            <li>
              <a href="" className="hover:text-indigo-600">
                Machine Learning
              </a>
            </li>
            <li>
              <a href="" className="hover:text-indigo-600">
                Design
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@company.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +62 856-4840-8330
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>© 2025 Sindology. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="" className="hover:text-indigo-600">
              Privacy Policy
            </a>
            <a href="" className="hover:text-indigo-600">
              Terms of Service
            </a>
            <a href="" className="hover:text-indigo-600">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-10 bg-[#602c94] text-white p-3 rounded-full shadow-lg hover:bg-[#8c3edb] transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
