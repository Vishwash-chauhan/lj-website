const stats = [
  { label: 'Parties Hosted', value: '500+', icon: '🎉' },
  { label: 'Happy Kiddos', value: '10k+', icon: '🧒' },
  { label: 'Hygienic Food', value: '100%', icon: '✨' },
]

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`bg-white border-[3px] md:border-4 border-[#333333] p-4 sm:p-5 md:p-8 rounded-[1.75rem] md:rounded-[2.5rem] text-center shadow-[5px_5px_0px_#333333] md:shadow-[8px_8px_0px_#333333] hover:-translate-y-1 md:hover:-translate-y-2 transition-transform ${
            idx === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''
          }`}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl mb-2 md:mb-4">{stat.icon}</div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#333333] mb-1 md:mb-2">{stat.value}</h3>
          <p className="text-[#F26522] font-black uppercase tracking-wide sm:tracking-wider md:tracking-widest text-[10px] sm:text-xs md:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutStats