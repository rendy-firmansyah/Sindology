// "use client";

import {
  Gamepad,
  Paintbrush,
  Smartphone,
  Brain,
  Globe,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ServiceSection() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Custom web development solutions crafted with modern technologies to deliver scalable, secure, and user-friendly websites for your business.",
      features: [
        "Full-stack development",
        "API integration",
        "Database design",
        "Deployment",
      ],
      price: "Starting from 90k/page",
      badge: "Popular",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Dev",
      description:
        "Tailored mobile development solutions built with cutting-edge technologies to deliver fast, scalable, and user-friendly applications for your business.",
      features: [
        "Full-stack Development",
        "API integration",
        "Database design",
        "Deployment",
      ],
      price: "Starting from $2,500",
      badge: null,
    },
    {
      icon: <Gamepad className="h-8 w-8" />,
      title: "Game Development",
      description:
        "Tailored game development solutions crafted with cutting-edge technologies to deliver immersive, engaging, and interactive experiences.",
      features: [
        "Concept & game design",
        "2D/3D asset integration",
        "Gameplay mechanics development",
        "Testing & optimization",
      ],
      price: "Starting from $75",
      badge: "New",
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Design",
      description:
        "Design services that focus on usability, aesthetics, and innovation to turn your ideas into functional and visually appealing solutions.",
      features: [
        "Design Full",
        "Draft design",
        "Revision 3 times",
        "User Experience (UX) Optimization",
      ],
      price: "Check Requirement",
      badge: null,
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "IoT",
      description:
        "Custom IoT development services designed to deliver secure, scalable, and intelligent systems that drive innovation for your business.",
      features: [
        "Device connectivity & integration",
        "Sensor data collection",
        "Real-time monitoring dashboard",
        "Custom IoT solutions",
      ],
      price: "Check Requirement",
      badge: "New",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description:
        "From data preprocessing to model deployment, we build machine learning systems that drive innovation and efficiency.",
      features: [
        "Data preprocessing & cleaning",
        "Model training & evaluation",
        "Predictive analytics",
        "Model deployment",
      ],
      price: "Starting from $100",
      badge: "New",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-background to-muted/20 scroll-mt-20"
    >
      <div className="max-w-6xl px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-600 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
            Our Service
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Professional <br />
            <span className="text-[#8c3edb]">Technology Service</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            From custom development to technical support, we provide
            comprehensive technology services to help your business grow and
            succeed in the digital world.
          </p>
        </div>

        {/* Swipper Card Service */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            //   pagination={{ clickable: true }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="group cursor-pointer bg-white/50 dark:bg-gray-900/40 border border-[#602c94] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 backdrop-blur-sm h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-400/20 rounded-lg text-primary group-hover:bg-gray-400/30 transition-colors">
                      {service.icon}
                    </div>
                    {service.badge && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-950/10 text-primary">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground "
                      >
                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      {service.price}
                    </span>
                    <button className="px-2 py-1 border rounded-lg text-xs font-medium border-primary text-primary hover:bg-[#602c94] hover:text-white transition-colors ease-linear">
                      Message now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <div className="absolute top-1/2 -left-14 z-10 hidden sm:block">
            <button className="custom-prev p-2 rounded-sm bg-white dark:bg-gray-800 shadow hover:bg-primary hover:text-[#602c94] transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-14 z-10 hidden sm:block">
            <button className="custom-next p-2 rounded-sm bg-white dark:bg-gray-800 shadow hover:bg-primary hover:text-[#602c94] transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="w-full py-10">
        <div className="bg-[#0d1326] text-center py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Can't find exactly what you're looking for? We specialize in
            creating custom solutions tailored to your unique requirements and
            business goals.
          </p>
          <div className="flex justify-center gap-2 sm:gap-4">
            <button className="px-2 sm:px-5 py-2 rounded-md bg-[#8c3edb] text-sm text-white font-medium hover:bg-[#602c94] transition">
              Get Custom Quote
            </button>
            <button className="px-2 sm:px-5 py-2 rounded-md border border-gray-400 text-sm text-white font-medium hover:bg-gray-700 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
