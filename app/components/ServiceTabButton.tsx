import React from 'react';

interface ServiceTabButtonProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const ServiceTabButton: React.FC<ServiceTabButtonProps> = ({ title, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 shadow-[4px_4px_0px_#333333] active:translate-y-1 active:shadow-none ${
      active ? 'bg-[#F26522] text-white' : 'bg-white text-[#333333] hover:bg-[#FFCB05]'
    }`}
  >
    {title}
  </button>
);

export default ServiceTabButton;
