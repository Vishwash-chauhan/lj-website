import React from 'react';

const TrustSection: React.FC = () => (
  <div className="mt-10 md:mt-24 max-w-4xl mx-auto bg-[#F26522] text-white p-5 sm:p-7 md:p-10 rounded-[1.75rem] md:rounded-[3rem] text-center border-4 border-[#333333] shadow-[7px_7px_0px_#333333] md:shadow-none">
    <h3 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 leading-tight">Want a Custom Package?</h3>
    <p className="text-sm sm:text-base md:text-lg font-bold opacity-90 mb-6 md:mb-8">We can mix and match all three services to create the ultimate party experience for your little one.</p>
    <button 
      onClick={() => window.location.href = '/contact'}
      className="w-full sm:w-auto bg-white text-[#F26522] px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-black text-base md:text-lg shadow-[3px_3px_0px_#333333] md:shadow-[4px_4px_0px_#333333] hover:translate-x-0.5 md:hover:translate-x-1 transition-transform"
    >
      Chat with our Party Planner
    </button>
  </div>
);

export default TrustSection;
