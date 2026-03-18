const stats = [
  { label: 'Parties Hosted', value: '500+', icon: '🎉' },
  { label: 'Happy Kiddos', value: '10k+', icon: '🧒' },
  { label: 'Hygienic Food', value: '100%', icon: '✨' },
]

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`bg-white border-2 sm:border-[3px] md:border-4 border-[#333333] p-3 sm:p-4 md:p-8 rounded-[1.15rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] text-center shadow-[3px_3px_0px_#333333] sm:shadow-[4px_4px_0px_#333333] md:shadow-[8px_8px_0px_#333333] hover:-translate-y-0.5 sm:hover:-translate-y-1 md:hover:-translate-y-2 transition-transform ${
            idx === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''
          }`}
        >
          <div className="text-2xl sm:text-3xl md:text-5xl mb-1 sm:mb-2 md:mb-4">{stat.icon}</div>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-[#333333] mb-1 md:mb-2 leading-none">{stat.value}</h3>
          <p className="text-[#F26522] font-black uppercase tracking-[0.06em] sm:tracking-wide md:tracking-widest text-[9px] sm:text-[10px] md:text-sm leading-snug break-words">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutStats