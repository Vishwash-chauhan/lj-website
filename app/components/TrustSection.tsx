import React from 'react';

const TrustSection: React.FC = () => (
  <div className="mt-24 max-w-4xl mx-auto bg-[#F26522] text-white p-10 rounded-[3rem] text-center border-4 border-[#333333]">
    <h3 className="text-3xl font-bold mb-4">Want a Custom Package?</h3>
    <p className="text-lg font-bold opacity-90 mb-8">We can mix and match all three services to create the ultimate party experience for your little one.</p>
    <button 
      onClick={() => window.location.href = '/contact'}
      className="bg-white text-[#F26522] px-10 py-4 rounded-full font-black text-lg shadow-[4px_4px_0px_#333333] hover:translate-x-1"
    >
      Chat with our Party Planner
    </button>
  </div>
);

export default TrustSection;
