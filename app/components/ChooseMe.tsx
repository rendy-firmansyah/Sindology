import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What makes your services unique?",
    answer:
      "I focus on delivering tailored design and development solutions that balance usability, aesthetics, and innovation. Each project is adapted to match your goals and audience.",
  },
  {
    question: "How do you ensure quality in your work?",
    answer:
      "By combining thorough research, iterative feedback, and attention to detail, I make sure every solution is functional, user-friendly, and aligned with best practices.",
  },
  {
    question: "Can you customize solutions for my business?",
    answer:
      "Absolutely! Every service I offer can be customized based on your business model, goals, and target audience.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, I offer ongoing support to help you maintain, improve, and scale your digital solutions as your business grows.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I work with modern frameworks like React, Laravel, and various design tools to deliver efficient and scalable solutions.",
  },
  {
    question: "Why should I trust your services?",
    answer:
      "Because I prioritize collaboration, transparency, and results. I ensure every client gets solutions that are both innovative and practical for their needs.",
  },
];

export default function ChooseMe() {
  // gunakan number (index) untuk identifikasi item yang terbuka
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-600 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
            Why Choose Sindology
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Empowering Innovation Through
            <br />
            <span className="text-[#8c3edb]">Our Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            Let’s join the ever-evolving ecosystem, where technology merges with
            community. Together with teams and partners, you can build, learn,
            and innovate to create real solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-white">
          <div className="grid md:grid-cols-2 gap-6">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-xl shadow-md p-4"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full text-left font-medium text-lg"
                >
                  {item.question}
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#8c3edb]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#8c3edb]" />
                  )}
                </button>

                {openIndex === index && (
                  <p className="mt-3 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
