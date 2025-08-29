import { Eye, Target, Users, Heart, Award } from "lucide-react";

import { FaLinkedin, FaGithub, FaEnvelope, FaLink } from "react-icons/fa";

type TeamMember = {
  name: string;
  role: string;
  link_github: string | null;
  link_linkedin: string | null;
  link_web: string | null;
  description: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Rendy Firmansyah",
    role: "Frontend/ML",
    link_github: "https://github.com/rendy-firmansyah",
    link_linkedin: "https://www.linkedin.com/in/rendy-firmansyah28/",
    link_web: "https://rendysite.vercel.app/",
    description:
      "A graduate of Jember University specializing in Website Development and Machine Learning.",
    image: "/assets/rendy.jpg",
  },
  {
    name: "Rizky Febianto",
    role: "Frontend/IoT",
    link_github: null,
    link_linkedin: null,
    link_web: null,
    description:
      "Students of Jember University who specialize in Website Development and IoT",
    image: "/assets/risky2.jpeg",
  },
  {
    name: "Suhermanto",
    role: "Frontend/Graphic Design",
    link_github: null,
    link_linkedin: null,
    link_web: null,
    description:
      "Students of Jember University who specialize in Website Development and Graphic Design.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ahmad Yoga",
    role: "Backend/IoT",
    link_github: null,
    link_linkedin: null,
    link_web: null,
    description:
      "Students of Jember University who specialize in Website Development and IoT",
    image: "/assets/yoga.jpeg",
  },
  {
    name: "Ikbar Saif",
    role: "Frontend",
    link_github: null,
    link_linkedin: null,
    link_web: null,
    description:
      "Students of Jember University who specialize in Website Development",
    image: "/assets/ikbar.jpeg",
  },
  {
    name: "Fakhruddin Amri",
    role: "Game Developer",
    link_github: null,
    link_linkedin: null,
    link_web: null,
    description:
      "University of Jember students specializing in Game Development",
    image: "/assets/amroy.jpeg",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-950 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Small label */}
        <span
          className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-600 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300"
          data-aos="fade-down"
        >
          About Sindology
        </span>

        {/* Main heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          data-aos="fade-right"
        >
          Building Tomorrow's <br />
          <span className="text-[#602c94]" data-aos="fade-left">
            Technology Today
          </span>
        </h2>

        {/* Description */}
        <p
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
        >
          Sindology is a digital innovation hub that helps transform ideas into
          impactful solutions. We provide services in website development,
          mobile apps, IoT, machine learning, game development, and creative
          design. Our mission is to make technology accessible and meaningful
          for businesses and individuals.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 text-left"
            data-aos="zoom-in-right"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#dfbfff] flex items-center justify-center">
                <Target size={26} className="text-[#8c3edb]" />
              </div>
              <h3 className="ml-3 text-lg font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              To empower businesses and individuals by providing digital
              solutions—from websites, mobile apps, IoT, machine learning,
              games, to creative design—that drive innovation, efficiency, and
              sustainable growth.
            </p>
          </div>

          {/* Vision */}
          <div
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 text-left"
            data-aos="zoom-in-left"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#dfbfff] flex items-center justify-center">
                <Eye size={26} className="text-[#8c3edb]" />
              </div>
              <h3 className="ml-3 text-lg font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              A future where digital transformation is accessible to everyone,
              enabling organizations and communities to thrive through
              technology without barriers of cost, geography, or resources.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-3" data-aos="fade-up">
            Our Core Values
          </h3>
          <p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
          >
            The principles that guide every decision we make and every project
            we build.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Innovation First */}
            <div
              className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 text-center"
              data-aos="zoom-in"
            >
              <div className="w-8 h-8 mx-auto mb-4 rounded-lg bg-[#dfbfff] flex items-center justify-center">
                <Target size={20} className="text-[#8c3edb]" />
              </div>
              <h3 className="font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                We embrace creativity and the latest technologies to deliver
                impactful digital solutions.
              </p>
            </div>

            {/* Community Driven */}
            <div
              className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 text-center"
              data-aos="zoom-in"
            >
              <div className="w-8 h-8 mx-auto mb-4 rounded-lg bg-[#dfbfff] flex items-center justify-center">
                <Users size={20} className="text-[#8c3edb]" />
              </div>
              <h3 className="font-semibold mb-2">Client-Centered</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                Every project starts with understanding client needs, ensuring
                solutions are tailored and meaningful.
              </p>
            </div>

            {/* Open & Transparent */}
            <div
              className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 text-center"
              data-aos="zoom-in"
            >
              <div className="w-8 h-8 mx-auto mb-4 rounded-lg bg-[#dfbfff] flex items-center justify-center">
                <Heart size={20} className="text-[#8c3edb]" />
              </div>
              <h3 className="font-semibold mb-2">
                Collaboration & Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                We believe in open communication, teamwork, and clear processes
                to achieve the best outcomes.
              </p>
            </div>

            {/* Quality Excellence */}
            <div
              className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 text-center"
              data-aos="zoom-in"
            >
              <div className="w-8 h-8 mx-auto mb-4 rounded-lg bg-[#dfbfff] flex items-center justify-center">
                <Award size={20} className="text-[#8c3edb]" />
              </div>
              <h3 className="font-semibold mb-2">Excellence & Integrity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                We commit to high-quality results while upholding honesty,
                responsibility, and professionalism in every step.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <h2
          className="text-3xl font-bold mt-14 text-gray-900 dark:text-white"
          data-aos="fade-down"
        >
          Meet Our Team
        </h2>
        <p
          className="mt-2 text-gray-600 dark:text-gray-400"
          data-aos="fade-down"
        >
          An enthusiastic individual who drives innovation and builds Sindology.
        </p>

        <div
          className="mt-10 flex flex-wrap justify-center gap-6"
          data-aos="zoom-out-down"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] lg:w-[22%] max-w-xs bg-white dark:bg-gray-800 rounded-xl cursor-pointer shadow-md flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover object-top rounded-t-xl"
              />

              {/* Konten card */}
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-[#602c94] font-medium text-sm">
                  {member.role}
                </p>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-center">
                  {member.description}
                </p>

                {/* Icon sosmed */}
                <div className="mt-4 flex space-x-4 text-gray-500 dark:text-gray-300">
                  {member.link_github && (
                    <a
                      href={member.link_github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-5 h-5 transition-colors hover:text-black dark:hover:text-white" />
                    </a>
                  )}

                  {member.link_linkedin && (
                    <a
                      href={member.link_linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-5 h-5 transition-colors hover:text-blue-600" />
                    </a>
                  )}

                  {member.link_web && (
                    <a
                      href={member.link_web}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink className="w-5 h-5 transition-colors hover:text-[#602c94]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
