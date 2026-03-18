'use client'



interface Location {
  type: string;
  name: string;
  address: string;
  heading: string;
  subheading: string;
  mapUrl: string;
  mapEmbed: string;
}

interface LocationSectionProps {
  location: Location | null;
}

const LocationSection: React.FC<LocationSectionProps> = ({ location }) => {
  if (!location) return null;
  return (
    <section id="location-section" className="mt-10 md:mt-24 max-w-5xl mx-auto px-3 sm:px-4 pb-4 scroll-mt-24">
      {/* Header for Location */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] mb-3 md:mb-4 leading-tight">
          {location.heading} <span className="text-[#F26522]">{location.name}</span>
        </h2>
        <p className="text-sm sm:text-base md:text-xl font-bold opacity-70" style={{ fontFamily: "'Comic Neue', cursive" }}>
          {location.subheading}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 md:gap-8 bg-white border-4 border-[#333333] rounded-[1.75rem] md:rounded-[3rem] overflow-hidden shadow-[7px_7px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05]">
        {/* Left Side: Address Details */}
        <div className="lg:w-1/3 p-5 sm:p-6 md:p-12 flex flex-col justify-center bg-[#FFF9F2] border-b-4 lg:border-b-0 lg:border-r-4 border-[#333333]">
          <div className="mb-6 md:mb-8">
            <span className="bg-[#F26522] text-white px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.08em] sm:tracking-widest">
              {location.type}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-[#333333] mt-3 md:mt-4 mb-2 leading-tight">{location.name}</h3>
            <p className="text-sm sm:text-base md:text-lg font-bold opacity-80 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
              {location.address}
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2.5 md:gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#FFCB05] flex items-center justify-center border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-sm md:text-base">
                📞
              </div>
              <span className="font-bold text-[#333333] text-sm sm:text-base">+91 124 4068143</span>
            </div>
            <div className="flex items-center gap-2.5 md:gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white flex items-center justify-center border-2 border-[#333333] shadow-[2px_2px_0px_#333333] text-sm md:text-base">
                ✉️
              </div>
              <span className="font-bold text-[#333333] text-sm sm:text-base break-all">sales@littlejalebis.com</span>
            </div>
          </div>

          <a
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-10 w-full py-3 md:py-4 bg-[#333333] text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-[#F26522] transition-all transform hover:-rotate-1 active:scale-95 text-center block"
          >
            Get Directions →
          </a>
        </div>

        {/* Right Side: Map */}
        <div className="hidden md:block lg:w-2/3 h-[280px] sm:h-[320px] lg:h-auto min-h-[260px] sm:min-h-[300px] lg:min-h-[350px] relative group">
          {location.mapEmbed ? (
            <iframe
              title={`${location.name} map`}
              src={location.mapEmbed}
              className="w-full h-full transition-all duration-300 filter grayscale group-hover:grayscale-0"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-xl font-bold text-[#F26522]">Map coming soon!</div>
          )}
          {/* Playful Map Marker Overlay (Visual Only) */}
          <div className="absolute top-4 right-4 bg-white border-2 border-[#333333] p-2 rounded-lg shadow-[4px_4px_0px_#FFCB05] hidden md:block">
            <p className="text-xs font-black">Open 9AM - 8PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;