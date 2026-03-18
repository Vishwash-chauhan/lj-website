import React from 'react';

const FinalCall = () => {
  return (
    <section className="min-h-[100svh] md:min-h-screen flex flex-col items-center justify-start md:justify-center px-6 pt-24 md:pt-0 pb-10 text-center">
      <div className="relative bg-white p-6 sm:p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] shadow-[12px_12px_0px_#FFCB05] border-4 border-[#333333] max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Host the Best Party Ever</h2>
        <p className="text-base sm:text-lg md:text-2xl mb-10 md:mb-12 font-bold opacity-80 max-w-2xl mx-auto">
          From the first invite to the last jalebi, we handle the details while you make the memories.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
          <a href="/services?tab=catering" className="px-10 py-4 border-4 border-[#F26522] text-[#F26522] rounded-2xl font-bold text-xl hover:bg-[#F26522] hover:text-white transition-all transform hover:-rotate-2">
            Catering
          </a>
          <a href="/services?tab=venue" className="px-10 py-4 border-4 border-[#333333] text-[#333333] rounded-2xl font-bold text-xl hover:bg-[#333333] hover:text-white transition-all transform hover:-rotate-2">
            Kids Party House
          </a>
          <a href="/services?tab=boxes" className="px-10 py-4 border-4 border-[#FFCB05] text-[#333333] rounded-2xl font-bold text-xl hover:bg-[#FFCB05] transition-all transform hover:-rotate-2">
            Food Delivery & Boxes
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCall;
