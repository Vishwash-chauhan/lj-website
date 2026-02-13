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

function SceneContent() {
  const meshRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame((state) => {
    const scrollOffset = scroll.offset 
    
    if (meshRef.current) {
      // Smoothly rotate the object as you scroll
      meshRef.current.rotation.x = scrollOffset * Math.PI
      meshRef.current.rotation.y = scrollOffset * Math.PI * 2
      
      // Responsive positioning: Move left on desktop, stay central but slightly higher on mobile
      const isMobile = state.viewport.width < 6
      meshRef.current.position.x = isMobile ? 0 : THREE.MathUtils.lerp(0, -2.5, scrollOffset)
      meshRef.current.position.y = isMobile ? THREE.MathUtils.lerp(1, 1.5, scrollOffset) : 0
      
      // Scale down slightly on mobile
      const s = isMobile ? 0.6 : 1
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
          emissiveIntensity={0.35}
          metalness={0.1}
          roughness={0.45}
        />
      </mesh>
    </Float>
  )
}

const ScrollContent = memo(() => (
  <div className="w-screen text-[#333333] selection:bg-[#FFCB05]" style={{ fontFamily: "'Comic Neue', cursive, sans-serif" }}>
    
    {/* --- Hero Section --- */}
    <section className="h-screen flex flex-col justify-center px-6 md:px-[10%]">
      <div className="max-w-2xl mt-20 md:mt-0">
        <h1 className="text-5xl md:text-[5vw] font-black leading-tight">
          Little <span className="text-[#F26522]">Jalebis</span>
        </h1>
        <p className="text-xl md:text-[2vw] mt-4 font-bold opacity-80">
          Big Smiles, Sweet Memories & Zero Stress for Parents.
        </p>
        <button className="mt-8 px-8 py-3 bg-[#F26522] text-white rounded-full font-bold hover:bg-[#d6561d] transition-colors w-fit">
          Plan Your Party ↓
        </button>
      </div>
    </section>
    
    {/* --- Services Section --- */}
    <section className="h-[200vh] md:h-screen flex flex-col justify-center items-end px-6 md:px-[10%]">
      <div className="w-full md:w-1/2 flex flex-col gap-12">
        <h2 className="text-4xl md:text-[3.5vw] font-bold text-right leading-tight">
          The Full <span className="text-[#F26522]">Party Circle</span>
        </h2>

        <div className="space-y-8">
          {/* Service 1 */}
          <div className="group cursor-pointer text-right">
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#F26522] transition-colors">01. Dreamy Party Venues</h3>
            <p className="text-sm md:text-base mt-2 opacity-70">Magical spaces designed for play, laughter, and safe exploration.</p>
            <div className="h-1 w-full bg-[#FFCB05] mt-2 origin-right scale-x-50 group-hover:scale-x-100 transition-transform" />
          </div>

          {/* Service 2 */}
          <div className="group cursor-pointer text-right">
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#F26522] transition-colors">02. Gourmet Catering</h3>
            <p className="text-sm md:text-base mt-2 opacity-70">Delicious, kid-approved menus that adults will sneak bites of too.</p>
            <div className="h-1 w-full bg-[#FFCB05] mt-2 origin-right scale-x-50 group-hover:scale-x-100 transition-transform" />
          </div>

          {/* Service 3 */}
          <div className="group cursor-pointer text-right">
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#F26522] transition-colors">03. Nutritious Lunch Boxes</h3>
            <p className="text-sm md:text-base mt-2 opacity-70">Fresh, fun, and balanced meals delivered straight to your event.</p>
            <div className="h-1 w-full bg-[#FFCB05] mt-2 origin-right scale-x-50 group-hover:scale-x-100 transition-transform" />
          </div>
        </div>
      </div>
    </section>

    {/* --- CTA / Footer Section --- */}
    <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-white/50 backdrop-blur-md p-8 md:p-16 rounded-[3rem] border-4 border-[#FFCB05] max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Host the Best Party Ever?</h2>
        <p className="text-lg md:text-xl mb-10 opacity-80">
          From the first invite to the last jalebi, we handle everything so you can focus on the birthday hugs.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/venues" className="px-8 py-4 border-2 border-[#F26522] text-[#F26522] rounded-full font-bold hover:bg-[#F26522] hover:text-white transition-all">Explore Venues</a>
          <a href="/catering" className="px-8 py-4 bg-[#333333] text-white rounded-full font-bold hover:scale-105 transition-transform">See Menus</a>
        </div>
      </div>
      <p className="mt-12 text-sm font-bold opacity-50 uppercase tracking-widest">© 2024 Little Jalebis Hospitality</p>
    </section>
  </div>
))

ScrollContent.displayName = 'ScrollContent'

export default function Hero() {
  return (
    <div style={{ height: '100vh', background: '#FFF9F2', color: '#333333', overflow: 'hidden' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Environment preset="city" />
        
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.2}>
            
            <SceneContent />

            <Scroll html>
              <ScrollContent />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}