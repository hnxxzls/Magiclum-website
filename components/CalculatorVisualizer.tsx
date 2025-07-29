'use client'

import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Center, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface CalculatorVisualizerProps {
  distance: number
  diameter: number
  intensity: number
}

function ProjectorVisualizer({ distance, diameter, intensity }: CalculatorVisualizerProps) {
  const projectorRef = useRef<THREE.Group>(null)
  const beamRef = useRef<THREE.Mesh>(null)
  
  const normalizedIntensity = Math.min(intensity / 1000, 1) // Normalize intensity for visual

  useFrame((state) => {
    if (projectorRef.current) {
      projectorRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
    if (beamRef.current) {
      beamRef.current.material.opacity = 0.3 + normalizedIntensity * 0.4
    }
  })

  const beamScale = useMemo(() => {
    const scale = Math.max(0.5, Math.min(diameter / 2, 3))
    return [scale, scale, distance]
  }, [diameter, distance])

  return (
    <group>
      {/* Projector */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <group ref={projectorRef} position={[-distance/2, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.2, 0.3, 0.8, 12]} />
            <meshStandardMaterial color="#333" metalness={0.7} roughness={0.3} />
          </mesh>
          
          {/* Lens */}
          <mesh position={[0, 0, 0.4]}>
            <cylinderGeometry args={[0.15, 0.15, 0.1, 12]} />
            <meshStandardMaterial 
              color="#FFD800" 
              metalness={0.9} 
              roughness={0.1} 
              emissive="#FFD800" 
              emissiveIntensity={normalizedIntensity * 0.5} 
            />
          </mesh>
        </group>
      </Float>

      {/* Light Beam */}
      <mesh ref={beamRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[diameter/2, distance, 8, 1, true]} />
        <meshStandardMaterial 
          color="#FFD800" 
          transparent 
          opacity={0.3}
          emissive="#FFD800" 
          emissiveIntensity={normalizedIntensity * 0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Projection Surface */}
      <mesh position={[distance/2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <circleGeometry args={[diameter/2, 32]} />
        <meshStandardMaterial 
          color="#666" 
          transparent 
          opacity={0.8}
          emissive="#FFD800" 
          emissiveIntensity={normalizedIntensity * 0.2}
        />
      </mesh>

      {/* Ground */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[distance * 2, diameter * 2]} />
        <meshStandardMaterial color="#1a1a1a" transparent opacity={0.3} />
      </mesh>

      {/* Distance indicator */}
      <Center position={[0, -1.5, 0]}>
        <Text
          fontSize={0.3}
          color="#FFD800"
          anchorX="center"
          anchorY="middle"
        >
          {distance.toFixed(1)}m
        </Text>
      </Center>
    </group>
  )
}

function Scene({ distance, diameter, intensity }: CalculatorVisualizerProps) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      
      <ProjectorVisualizer distance={distance} diameter={diameter} intensity={intensity} />
      
      <OrbitControls 
        enableZoom={true} 
        enablePan={false}
        maxDistance={distance * 3}
        minDistance={distance * 0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        autoRotate
        autoRotateSpeed={1}
      />
    </>
  )
}

export default function CalculatorVisualizer({ distance, diameter, intensity }: CalculatorVisualizerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-96 bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
    >
      <Canvas
        camera={{ position: [distance, distance/2, distance], fov: 45 }}
        className="w-full h-full"
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene distance={distance} diameter={diameter} intensity={intensity} />
        </Suspense>
      </Canvas>
      
      {/* Overlay Info */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
        <div className="text-white text-sm space-y-1">
          <div>Distancia: <span className="text-magic-gold">{distance.toFixed(1)}m</span></div>
          <div>Diámetro: <span className="text-magic-gold">{diameter.toFixed(1)}m</span></div>
          <div>Intensidad: <span className="text-magic-gold">{intensity.toFixed(0)} lux</span></div>
        </div>
      </div>
    </motion.div>
  )
}