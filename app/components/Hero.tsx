'use client'

import React, { useRef, Suspense, memo, useMemo } from 'react'
import Image from 'next/image'
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
import FinalCall from './FinalCall'

// --- Custom Jalebi Geometry (Sized to match TorusKnot) ---
function JalebiShape() {
  const shape = useMemo(() => {
    const points = []
    const loops = 4.5 
    const pointsPerLoop = 64
    const totalPoints = loops * pointsPerLoop
    
    for (let i = 0; i <= totalPoints; i++) {
      const angle = (i / pointsPerLoop) * Math.PI * 2
      // Reduced max radius to ~1.1 to match the original torus scale
      const radius = 0.1 + (i / totalPoints) * 1.5 
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      // Subtle organic wobble
      const z = Math.sin(i * 0.5) * 0.04 
      
      points.push(new THREE.Vector3(x, y, z))
    }
    
    const path = new THREE.CatmullRomCurve3(points)
    // Radius set to 0.12 for a sleeker "piped" look that fits the smaller scale
    return new THREE.TubeGeometry(path, 128, 0.15, 12, false)
  }, [])

  return (
    <mesh geometry={shape}>
      <meshStandardMaterial
        color="#F26522" 
        emissive="#e38b19" 
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  )
}

const FontStyle = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,700&display=swap');
    body {
      font-family: 'Comic Neue', cursive;
    }
  `}</style>
)

function SceneContent({ onReady }: { onReady?: () => void }) {
  const meshRef = useRef<THREE.Group>(null)
  const scroll = useScroll()
  const lastDispatchedOffset = useRef(-1)

  React.useEffect(() => {
    onReady?.()
  }, [onReady])

  useFrame((state) => {
    const scrollOffset = scroll.offset 

    if (Math.abs(scrollOffset - lastDispatchedOffset.current) > 0.001) {
      window.dispatchEvent(
        new CustomEvent('hero-scroll', {
          detail: { offset: scrollOffset },
        })
      )
      lastDispatchedOffset.current = scrollOffset
    }
    
    if (meshRef.current) {
      meshRef.current.rotation.x = scrollOffset * Math.PI
      meshRef.current.rotation.y = scrollOffset * Math.PI * 2
      
      const isMobile = state.viewport.width < 6
      
      // Matching your original positioning logic exactly
      meshRef.current.position.x = isMobile ? 0 : THREE.MathUtils.lerp(0, -2.8, scrollOffset)
      meshRef.current.position.y = isMobile ? THREE.MathUtils.lerp(0.8, 1.2, scrollOffset) : 0
      
      const s = isMobile ? 0.5 : 1
      meshRef.current.scale.set(s, s, s)
    }
  })

  React.useEffect(() => {
    return () => {
      window.dispatchEvent(
        new CustomEvent('hero-scroll', {
          detail: { offset: 0 },
        })
      )
    }
  }, [])

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={meshRef}>
        <JalebiShape />
      </group>
    </Float>
  )
}

const HeroOverlay = memo(() => (
  <div className="absolute inset-x-0 top-0 z-20 h-screen flex flex-col justify-center px-6 md:px-[12%] pointer-events-none">
    <div className="max-w-3xl mt-24 md:mt-0 pointer-events-auto text-[#333333] selection:bg-[#FFCB05]">
      <span className="bg-[#FFCB05] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
        The Sweetest Host in Town
      </span>
      <h1 className="text-6xl md:text-[6vw] font-bold leading-[0.9] tracking-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]">
        Little <span className="text-[#F26522] drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]">Jalebis</span>
      </h1>
      <p className="text-xl md:text-[2.2vw] mt-6 font-bold opacity-90 leading-relaxed max-w-lg">
        India's First Tech-Driven, <br className="hidden md:block" />
        <span className="underline decoration-[#FFCB05] decoration-4">Kids Centric</span> Catering Company.
      </p>
      <a href="/contact" className="mt-10 px-10 py-4 bg-[#F26522] text-white rounded-full font-bold text-lg hover:bg-[#d6561d] transition-all w-fit shadow-[6px_6px_0px_#333333] active:translate-y-1 active:shadow-none inline-block">
        Plan Your Party ↓
      </a>
    </div>
  </div>
))

HeroOverlay.displayName = 'HeroOverlay'

const JalebiGhost = memo(({ hidden }: { hidden: boolean }) => (
  <div
    className={`absolute z-10 pointer-events-none transition-opacity duration-700 ease-out ${hidden ? 'opacity-0' : 'opacity-100'} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[66%]`}
    aria-hidden="true"
  >
    <Image
      src="/jalebi-ghost.png"
      alt=""
      width={520}
      height={520}
      priority
      className="w-[220px] h-[220px] md:w-[520px] md:h-[520px] object-contain"
      sizes="(max-width: 768px) 220px, 520px"
    />
  </div>
))

JalebiGhost.displayName = 'JalebiGhost'

const ScrollContent = memo(() => (
  <div className="w-screen text-[#333333] selection:bg-[#FFCB05]">
    
    {/* --- Section 1: Hero --- */}
    <section className="h-screen" />
    
    {/* --- Section 2: Services --- */}
    <section className="h-[150vh] md:h-screen flex flex-col justify-center items-end px-6 md:px-[12%]">
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <div className="text-right">
            <h2 className="text-4xl md:text-[4vw] font-bold leading-tight">
              One Stop <br/>
              <span className="text-[#F26522] drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]">Party Magic</span>
            </h2>
            <p className="font-bold opacity-100 mt-2">Everything you need, all in one loop.</p>
        </div>

        <div className="space-y-6 mt-4">
          {[
            { emoji: '🍕', title: "Catering", desc: "Kid-approved menus that adults love too.", link: "/services/kids-party-catering" },
            { emoji: '🏠', title: "Kids Party House", desc: "Magical spaces designed for play and laughter.", link: "/services/kids-party-house" },
            { emoji: '🍱', title: "Food Delivery & Boxes", desc: "Fresh, fun, and balanced meals delivered.", link: "/services/food-boxes" }
          ].map((service, i) => (
            <a
              key={i}
              href={service.link}
              className="group cursor-pointer text-right flex flex-col items-end"
            >
              <h3 className="text-2xl font-bold group-hover:text-[#F26522] transition-colors drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)] md:text-3xl md:drop-shadow-none">
                {service.emoji} {service.title}
              </h3>
              <p className="text-sm md:text-base mt-1 font-bold opacity-95 max-w-xs text-[#333333] md:text-[#F26522] md:group-hover:text-[#333333]">{service.desc}</p>
              <div className="h-1.5 w-24 bg-[#FFCB05] mt-3 group-hover:w-full transition-all duration-500 rounded-full" />
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* --- Section 3: Final Call --- */}
    <FinalCall />
  </div>
))

ScrollContent.displayName = 'ScrollContent'

export default function Hero() {
  const [pages, setPages] = React.useState(4)
  const [damping, setDamping] = React.useState(0.12)
  const [scrollContentEl, setScrollContentEl] = React.useState<HTMLDivElement | null>(null)
  const [sceneReady, setSceneReady] = React.useState(false)

  React.useEffect(() => {
    if (!scrollContentEl) return

    const updateScrollConfig = () => {
      const isMobile = window.innerWidth < 768
      // Slightly higher damping on mobile prevents touch scroll from feeling stuck.
      setDamping(isMobile ? 0.12 : 0.1)

      const viewportHeight = window.innerHeight || 1
      const contentElement = scrollContentEl.firstElementChild as HTMLElement | null
      const contentHeight = contentElement?.scrollHeight ?? scrollContentEl.scrollHeight ?? viewportHeight

      // Keep a small buffer so footer remains reachable without leaving a large blank tail.
      const measuredPages = contentHeight / viewportHeight
      const pageBuffer = isMobile ? 0.2 : 0.12
      setPages(Math.max(1, measuredPages + pageBuffer))
    }

    const observer = new ResizeObserver(() => {
      updateScrollConfig()
    })

    observer.observe(scrollContentEl)
    const contentElement = scrollContentEl.firstElementChild as HTMLElement | null
    if (contentElement) observer.observe(contentElement)

    updateScrollConfig()
    setTimeout(updateScrollConfig, 0)
    setTimeout(updateScrollConfig, 150)
    document.fonts?.ready.then(updateScrollConfig).catch(() => {
      // Ignore font loading errors and keep current sizing.
    })
    window.addEventListener('resize', updateScrollConfig)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateScrollConfig)
    }
  }, [scrollContentEl])

  return (
    <>
      <FontStyle />
      <div className="relative h-screen bg-[#FFF9F2] text-[#333333] overflow-hidden" style={{ touchAction: 'pan-y' }}>
        <HeroOverlay />
        <JalebiGhost hidden={sceneReady} />
        <Canvas
          shadows
          gl={{ alpha: true }}
          style={{ touchAction: 'pan-y', background: 'transparent' }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <Environment preset="city" />
          
          <Suspense fallback={null}>
            <ScrollControls pages={pages} damping={damping}>
              <SceneContent onReady={() => setSceneReady(true)} />
              <Scroll html>
                <div ref={setScrollContentEl} style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}>
                  <ScrollContent />
                </div>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}