import Image from 'next/image'

export default function TestimonialsHeader() {
  return (
    <section
      className="pt-24 sm:pt-16 md:pt-24 px-4 sm:px-6 bg-[#FFF9F2]"
      style={{ fontFamily: "'Comic Neue', cursive" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-[2rem] md:rounded-[3rem] border-4 border-[#333333] shadow-[8px_8px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05]">
                <Image
                  src="https://res.cloudinary.com/dwffrfajl/image/upload/f_auto,q_auto:eco,w_1400,dpr_auto/v1772107546/Clients_k3tlnj.jpg"
                  alt="Happy clients enjoying kids party catering by Little Jalebis"
                  width={1400}
                  height={933}
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 560px"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 left-2 sm:-bottom-5 sm:-left-2 md:-bottom-6 md:-left-6 bg-[#F26522] text-white px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-black text-sm sm:text-lg md:text-xl rotate-[-5deg] border-2 border-[#333333] z-20">
                🍭
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight text-center lg:text-left">
              Hear from our <span className="text-[#F26522]">Clients</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
