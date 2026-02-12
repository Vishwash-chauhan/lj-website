'use client'

import React, { useRef, Suspense } from 'react'
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
  const meshRef = useRef()
  const scroll = useScroll()

  useFrame((state) => {
    const scrollOffset = scroll.offset 
    
    // Smoothly rotate the object as you scroll
    meshRef.current.rotation.x = scrollOffset * Math.PI
    meshRef.current.rotation.y = scrollOffset * Math.PI * 2
    
    // Move the object to the left as we scroll down to make room for text
    meshRef.current.position.x = THREE.MathUtils.lerp(0, -2, scrollOffset)
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

export default function Hero() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#FFF9F2', color: '#333333', fontFamily: "'Comic Neue', cursive, sans-serif" }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Environment preset="city" />
        
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.2}>
            
            <SceneContent />

            <Scroll html>
              <div className="w-screen text-[#333333]" style={{ fontFamily: "'Comic Neue', cursive, sans-serif" }}>
                
                <section className="h-screen flex flex-col justify-center px-[10%]">
                  <h1 className="text-[5vw] m-0 font-bold" style={{ color: '#333333' }}>Little Jalebis</h1>
                  <h2 className="text-[3vw]" style={{ color: '#F26522' }}>Your Sweet Success</h2>
                </section>
                
                <section className="h-screen flex flex-col justify-center items-end px-[10%]">
                  <h1 className="text-[4vw] text-right font-bold" style={{ color: '#333333' }}>
                    Taste the Difference.<br/>
                    <span style={{ color: '#F26522' }}>Sweetness in Every Bite.</span>
                  </h1>
                </section>

                <section className="h-screen flex items-center justify-center">
                  <p className="max-w-[600px] text-center text-[1.5rem]" style={{ color: '#333333' }}>
                    Crafted with passion and tradition, Little Jalebis brings you authentic flavors and unforgettable moments.
                  </p>
                </section>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
