import { useState } from "react";
import { Link } from "react-router";
import {
  FaCode,
  FaMobileAlt,
  FaCogs,
  FaGamepad,
  FaPaintBrush,
  FaRobot,
  FaBoxOpen,
  FaGlobe,
} from "react-icons/fa";

import { Zap } from "lucide-react";

const categories = [
  { id: "all", name: "All Projects", icon: <FaCode /> },
  { id: "web", name: "Web Dev", icon: <FaGlobe /> },
  { id: "mobile", name: "Mobile", icon: <FaMobileAlt /> },
  { id: "iot", name: "IoT", icon: <FaCogs /> },
  { id: "game", name: "Game Dev", icon: <FaGamepad /> },
  {
    id: "design",
    name: "Design",
    icon: <FaPaintBrush />,
  },
  { id: "ml", name: "ML", icon: <FaRobot /> },
];

const projects = [
  {
    id: 1,
    title: "Sall-Bondo",
    description:
      "English learning website with the cultural nuances of Situbondo from the PKM program of the FKIP University of Jember.",
    license: "Sindology",
    link: "https://sallbondo.com/",
    image: "/assets/project/sall.png",
    status: ["Active"],
    tech: ["Typescript", "React", "Laravel"],
    updated: "2 days ago",
    category: "web",
  },
  {
    id: 2,
    title: "Azwa Architecture",
    description:
      "Custom static and dynamic company profile website that focuses on promoting architectural and interior design services for buildings",
    license: "Sindology",
    link: "https://azwadesignstudio.com/",
    image: "/assets/project/azwa.png",
    status: ["Active"],
    tech: ["Laravel", "Blade", "PHP"],
    updated: "1 week ago",
    category: "web",
  },
  {
    id: 3,
    title: "Disaster Mitigation",
    description:
      "Website survey on disaster mitigation handling in Jember from the students program of Muhammadiyah University Jember",
    license: "Sindology",
    link: "https://desa-siaga-app.vercel.app/",
    image: "/assets/project/web-mitigasi.png",
    status: ["Active"],
    tech: ["Javascript", "Next.js", "Express.js", "PostgreeSQL"],
    updated: "3 week ago",
    category: "web",
  },
  {
    id: 4,
    title: "NOC",
    description:
      "Health level survey website in the village from the health students program of Muhammadiyah University Jember",
    license: "Sindology",
    link: "https://noc-app.vercel.app/",
    image: "/assets/project/noc.png",
    status: ["Active"],
    tech: ["Javascript", "Next.js", "Express.js", "PostgreeSQL"],
    updated: "8 month ago",
    category: "web",
  },
];

export default function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  return (
    <section
      id="project"
      className="py-20 bg-[#f8f4fc] dark:bg-gray-950 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Small label */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-600 bg-[#e5d4f5] rounded-full dark:bg-gray-800 dark:text-gray-300">
          Various projects of ours
        </span>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Innovative Projects <br />
          <span className="text-[#602c94]">Built by Community</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Explore the collection of projects that we have created and developed,
          which includes websites, mobile, IoT, machine learning, games, and
          design.
        </p>
      </div>

      {/* Statistik */}
      <div className="flex flex-wrap justify-center items-center my-10 gap-8">
        <div className="py-4 px-16 bg-white rounded-xl border border-gray-200 text-center">
          <h1 className="text-[#602c94] text-xl font-bold">50+</h1>
          <span className="text-xs">Active Projects</span>
        </div>
        <div className="py-4 px-16 bg-white rounded-xl border border-gray-200 text-center">
          <h1 className="text-[#602c94] text-xl font-bold">12k+</h1>
          <span className="text-xs">Github Stars</span>
        </div>
        <div className="py-4 px-16 bg-white rounded-xl border border-gray-200 text-center">
          <h1 className="text-[#602c94] text-xl font-bold">2.1k+</h1>
          <span className="text-xs">Contributors</span>
        </div>
        <div className="py-4 px-16 bg-white rounded-xl border border-gray-200 text-center">
          <h1 className="text-[#602c94] text-xl font-bold">15+</h1>
          <span className="text-xs">Categories</span>
        </div>
      </div>

      {/* FILTER + PROJECTS */}
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 px-4 sm:px-0">
        {/* Filter Tabs */}
        <div className="bg-white p-2 rounded-lg">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center justify-center w-28 h-16 px-4 py-2 rounded-md text-sm font-medium transition ${
                  selectedCategory === cat.id
                    ? "bg-[#602c94] text-white border-[#772fbe]"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="text-lg mb-2">{cat.icon}</div>
                <span className="text-xs">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project List / Empty State */}
        <div className="w-full flex flex-col items-center justify-center mt-3">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    {/* Status */}
                    <div className="flex gap-2 mb-2">
                      {project.status.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-[#f8f4fc] text-[#772fbe]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {/* Title + License */}
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                        {project.license}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {project.description}
                    </p>
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-0.5 rounded bg-gray-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {/* Updated */}
                    <p className="text-xs text-gray-400 mt-2">
                      Updated {project.updated}
                    </p>
                    {/* Button */}
                    <Link
                      to={project.link}
                      className="mt-4 w-full text-center block bg-[#602c94] text-white py-2 rounded-md hover:bg-[#8c3edb] transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <FaBoxOpen className="text-5xl mb-4" />
              <p className="text-lg font-medium">Empty</p>
              <p className="text-sm">No projects found in this category</p>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="bg-[#0d1326] flex flex-col justify-center items-center rounded-2xl px-6 py-12">
          <Zap size={65} className="text-[#8c3edb]" />
          <div className="text-center mt-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Have a Project Idea?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Let's consult your ideas and create your digital products like
              websites, mobile apps, IoT, etc. right now!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/6285648408330"
                className="px-2 sm:px-5 py-2 rounded-md text-sm bg-[#602c94] text-white font-medium hover:bg-[#8c3edb] transition"
              >
                Consult Now
              </a>
              <button className="px-2 sm:px-5 py-2 rounded-md text-sm border border-gray-400 text-white font-medium hover:bg-gray-700 transition">
                Explore Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
