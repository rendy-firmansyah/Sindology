export default function CallToAction() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="bg-[#0d1326] text-center rounded-2xl px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          It's time to realize your dream digital product!
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          With expertise in web, mobile, IoT, and game development, we are ready
          to be your partner in your digital transformation journey.
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
  );
}
