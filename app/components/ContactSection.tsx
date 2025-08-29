// "use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-muted/20 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-600 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300"
            data-aos="fade-down"
          >
            Contact Information
          </span>
          <p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
          >
            Ready to start your next project? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8 mx-5 sm:mx-0">
            <h2 className="text-xl font-semibold">Contact Information</h2>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-xl">
                <Mail className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-sm text-gray-500">hello@company.com</p>
                <p className="text-sm text-gray-500">support@company.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-xl">
                <Phone className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-sm text-gray-500">+62 856-4840-8330</p>
                <p className="text-sm text-gray-500">+62 823-3722-4017</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-xl">
                <Clock className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h4 className="font-medium">Business Hours</h4>
                <p className="text-sm text-gray-500">Everyday</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow border mx-5 sm:mx-0 border-gray-900/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jhon"
                  className="w-full border border-gray-900/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8c3edb]"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jhon@example.com"
                  className="w-full border border-gray-900/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8c3edb]"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can help you?"
                  className="w-full border border-gray-900/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8c3edb]"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project"
                  className="w-full border border-gray-900/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8c3edb]"
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#602c94] hover:bg-[#8c3edb] text-white font-medium py-2 px-4 rounded-lg"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
