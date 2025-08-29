export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/assets/bg-home.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center mt-16">
        <div
          className="bg-[#8c3edb] px-4 py-1 rounded-full text-sm inline-block mb-4"
          data-aos="fade-down"
        >
          Welcome to Open Innovation
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold" data-aos="fade-down">
          Sindology <span className="text-[#8c3edb]">Multiuser</span>
        </h1>
        <p
          className="mt-4 text-sm sm:text-lg max-w-2xl mx-5 sm:mx-auto"
          data-aos="fade-down"
        >
          Turning ideas into digital solutions. Along with our team, discover
          website development services, user experience-focused design, and
          innovative game development to meet future needs.
        </p>

        <div className="flex justify-center gap-6 mt-8 text-sm sm:text-lg">
          <div data-aos="fade-right">
            <span className="font-bold text-2xl">500+</span>
            <p>Active Contributors</p>
          </div>
          <div data-aos="fade-up">
            <span className="font-bold text-2xl">50+</span>
            <p>Open Projects</p>
          </div>
          <div data-aos="fade-left">
            <span className="font-bold text-2xl">10k+</span>
            <p>Community Members</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8" data-aos="zoom-in">
          <a
            href="/projects"
            className="px-6 py-3 bg-[#602c94] rounded-lg transition-all ease-linear text-white hover:bg-[#8c3edb]"
          >
            Explore Projects
          </a>
          <a
            href="https://wa.me/6285648408330"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 rounded-lg text-white hover:bg-gray-900"
          >
            Consult now
          </a>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gray-300 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
