import React from 'react';

interface ServiceTabContentProps {
  image: string;
  tagline: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  onCtaClick?: () => void;
  secondaryCtas?: { label: string; href: string }[];
}

const ServiceTabContent: React.FC<ServiceTabContentProps> = ({
  image,
  tagline,
  title,
  description,
  features,
  cta,
  onCtaClick,
  secondaryCtas,
}) => (
  <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-5 sm:p-6 md:p-16 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center shadow-[7px_7px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05]">
    {/* Visual Placeholder/Icon */}
    <div className="w-full md:w-1/3 aspect-square bg-[#FFF9F2] rounded-[1.5rem] md:rounded-4xl flex items-center justify-center text-[4.5rem] sm:text-[6rem] md:text-[8rem] border-2 border-dashed border-[#F26522]/30">
      {image}
    </div>
    {/* Text Content */}
    <div className="w-full md:w-2/3">
      <span className="text-[#F26522] font-black uppercase tracking-[0.1em] sm:tracking-wider md:tracking-widest text-[10px] sm:text-xs md:text-sm">{tagline}</span>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-4 md:mb-6 text-[#333333] leading-tight">{title}</h2>
      <p className="text-sm sm:text-base md:text-lg font-bold opacity-80 leading-relaxed mb-6 md:mb-8 whitespace-pre-line">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-7 md:mb-10">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2.5 md:gap-3">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FFCB05] flex items-center justify-center text-[10px] md:text-xs font-black">✓</div>
            <span className="font-bold text-[#333333] text-sm md:text-base">{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {secondaryCtas && secondaryCtas.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {secondaryCtas.map((secondaryCta) => (
              <a
                key={secondaryCta.label}
                href={secondaryCta.href}
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 md:py-4 border-2 border-[#333333] text-[#333333] rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-[#FFCB05] transition-all transform hover:-rotate-1"
              >
                {secondaryCta.label}
              </a>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={onCtaClick}
          className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-[#F26522] text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-[#FFCB05] transition-all transform hover:-rotate-1 active:scale-95"
        >
          {cta}
        </button>
      </div>
    </div>
  </div>
);

export default ServiceTabContent;
