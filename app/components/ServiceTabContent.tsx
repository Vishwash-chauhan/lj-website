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
  <div className="bg-white border-4 border-[#333333] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-[12px_12px_0px_#FFCB05]">
    {/* Visual Placeholder/Icon */}
    <div className="w-full md:w-1/3 aspect-square bg-[#FFF9F2] rounded-4xl flex items-center justify-center text-[8rem] border-2 border-dashed border-[#F26522]/30">
      {image}
    </div>
    {/* Text Content */}
    <div className="w-full md:w-2/3">
      <span className="text-[#F26522] font-black uppercase tracking-widest text-sm">{tagline}</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-[#333333]">{title}</h2>
      <p className="text-lg font-bold opacity-80 leading-relaxed mb-8">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#FFCB05] flex items-center justify-center text-xs font-black">✓</div>
            <span className="font-bold text-[#333333]">{feature}</span>
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
                className="w-full sm:w-auto px-10 py-4 border-2 border-[#333333] text-[#333333] rounded-2xl font-bold text-lg hover:bg-[#FFCB05] transition-all transform hover:-rotate-1"
              >
                {secondaryCta.label}
              </a>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={onCtaClick}
          className="w-full sm:w-auto px-10 py-4 bg-[#333333] text-white rounded-2xl font-bold text-lg hover:bg-[#F26522] transition-all transform hover:-rotate-1 active:scale-95"
        >
          {cta}
        </button>
      </div>
    </div>
  </div>
);

export default ServiceTabContent;
