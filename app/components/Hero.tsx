'use client'

import React, { useRef, Suspense, memo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  PerspectiveCamera, 
  Environment, 
  ScrollControls, 
  Scroll,
  useScroll
} from '@react-three/drei'
import * as THREE from 'three'

// Adding the Google Font import via a style tag for the Comic Neue look
const FontStyle = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,700&display=swap');
    body {
      font-family: 'Comic Neue', cursive;
    }
  `}</style>
)

function SceneContent() {
  const meshRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame((state) => {
    const scrollOffset = scroll.offset 
    
    if (meshRef.current) {
      meshRef.current.rotation.x = scrollOffset * Math.PI
      meshRef.current.rotation.y = scrollOffset * Math.PI * 2
      
      const isMobile = state.viewport.width < 6
      // On mobile, keep the "jalebi" centered but push it up to make room for bottom text
      // On desktop, slide it to the left
      meshRef.current.position.x = isMobile ? 0 : THREE.MathUtils.lerp(0, -2.8, scrollOffset)
      meshRef.current.position.y = isMobile ? THREE.MathUtils.lerp(0.8, 1.2, scrollOffset) : 0
      
      const s = isMobile ? 0.5 : 1
      meshRef.current.scale.set(s, s, s)
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#F26522"
          emissive="#FFCB05"
          emissiveIntensity={0.4}
          metalness={0.1}
          roughness={0.3}
        />
      </mesh>
    </Float>
  )
}

const ScrollContent = memo(() => (
  <div className="w-screen text-[#333333] selection:bg-[#FFCB05]">
    
    {/* --- Section 1: Hero --- */}
    <section className="h-screen flex flex-col justify-center px-6 md:px-[12%]">
      <div className="max-w-3xl mt-24 md:mt-0">
        <span className="bg-[#FFCB05] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
          The Sweetest Host in Town
        </span>
        <h1 className="text-6xl md:text-[6vw] font-bold leading-[0.9] tracking-tight">
          Little <span className="text-[#F26522]">Jalebis</span>
        </h1>
        <p className="text-xl md:text-[2.2vw] mt-6 font-bold opacity-90 leading-relaxed max-w-lg">
          India's First Tech-Driven, <br className="hidden md:block"/>
          <span className="underline decoration-[#FFCB05] decoration-4">Kids Centric</span> Catering Company.
        </p>
        <a href="/contact" className="mt-10 px-10 py-4 bg-[#F26522] text-white rounded-full font-bold text-lg hover:bg-[#d6561d] transition-all w-fit shadow-[6px_6px_0px_#333333] active:translate-y-1 active:shadow-none inline-block">
          Plan Your Party ↓
        </a>
      </div>
    </section>
    
    {/* --- Section 2: Services --- */}
    <section className="h-[150vh] md:h-screen flex flex-col justify-center items-end px-6 md:px-[12%]">
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <div className="text-right">
            <h2 className="text-4xl md:text-[4vw] font-bold leading-tight">
              One Stop <br/>
              <span className="text-[#F26522]">Party Magic</span>
            </h2>
            <p className="font-bold opacity-100 mt-2">Everything you need, all in one loop.</p>
        </div>

        <div className="space-y-6 mt-4">
          {/* Service Cards */}
          {[
            { emoji: '🍕', title: "Catering", desc: "Kid-approved menus that adults love too.", link: "/services?tab=catering" },
            { emoji: '🏠', title: "Kids Party House", desc: "Magical spaces designed for play and laughter.", link: "/services?tab=venue" },
            { emoji: '🍱', title: "Food Delivery & Boxes", desc: "Fresh, fun, and balanced meals delivered.", link: "/services?tab=boxes" }
          ].map((service, i) => (
            <a
              key={i}
              href={service.link}
              className="group cursor-pointer text-right flex flex-col items-end"
            >
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#F26522] transition-colors">
                {service.emoji} {service.title}
              </h3>
              <p className="text-sm md:text-base mt-1 font-bold opacity-95 max-w-xs">{service.desc}</p>
              <div className="h-1.5 w-24 bg-[#FFCB05] mt-3 group-hover:w-full transition-all duration-500 rounded-full" />
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* --- Section 3: Final Call --- */}
    <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="relative bg-white p-10 md:p-20 rounded-[3rem] shadow-[12px_12px_0px_#FFCB05] border-4 border-[#333333] max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Host the Best Party Ever</h2>
        <p className="text-lg md:text-2xl mb-12 font-bold opacity-80 max-w-2xl mx-auto">
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
      <p className="mt-16 text-sm font-bold opacity-40 uppercase tracking-[0.3em]">
        © 2026 Little Jalebis • Happiness Redefined
      </p>
    </section>
  </div>
))

ScrollContent.displayName = 'ScrollContent'

export default function Hero() {
  const [mounted, setMounted] = React.useState(false)
  const [pages, setPages] = React.useState(3)
  const [damping, setDamping] = React.useState(0.1) // lower = snappier (faster) scroll

  React.useLayoutEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768
      setPages(isMobile ? 3.5 : 3)
      // reduce damping on mobile so scrolling feels faster/snappier
      setDamping(isMobile ? 0.01 : 0.1)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <FontStyle />
      <div className="h-screen bg-[#FFF9F2] text-[#333333] overflow-hidden">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <Environment preset="city" />
          
          <Suspense fallback={null}>
            <ScrollControls pages={pages} damping={damping}>
              <SceneContent />
              {mounted && (
                <Scroll html>
                  <ScrollContent />
                </Scroll>
              )}
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}