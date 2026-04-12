export default function BlogHeader() {
  return (
    <div className="relative overflow-hidden pt-24 pb-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-30 -ml-20 -mb-20"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center">

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Blogs by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Little Jalebis</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-xl mb-8 max-w-2xl mx-auto font-bold opacity-70">
            Know more about Little Jalebis, discover ideas for planning the perfect kids party. From venue tips to catering ideas, we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-nowrap items-center justify-center gap-3">
            <div className="flex flex-wrap gap-3">
              <a
                href="/services"
                className="w-auto whitespace-nowrap rounded-xl border-2 border-[#333333] px-4 py-3 text-sm font-bold text-[#333333] transition-all hover:-rotate-1 hover:bg-[#FFCB05] md:rounded-2xl md:px-10 md:py-4 md:text-lg"
              >
                Explore Services
              </a>
            </div>
            <a
              href="/contact"
              className="w-auto whitespace-nowrap rounded-xl bg-[#F26522] px-4 py-3 text-sm font-bold text-white transition-all hover:-rotate-1 hover:bg-[#FFCB05] active:scale-95 md:rounded-2xl md:px-10 md:py-4 md:text-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
