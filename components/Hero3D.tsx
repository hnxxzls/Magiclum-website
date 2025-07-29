'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Center, Float, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function GOBOProjector() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Projector Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 1.2, 16]} />
          <meshStandardMaterial color="#2d2d2d" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Lens */}
        <mesh position={[0, 0, 0.6]}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
          <meshStandardMaterial color="#FFD800" metalness={0.9} roughness={0.1} emissive="#FFD800" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Light Beam */}
        <mesh position={[0, 0, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.8, 2, 8, 1, true]} />
          <meshStandardMaterial 
            color="#FFD800" 
            transparent 
            opacity={0.3} 
            emissive="#FFD800" 
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Projected Logo */}
        <Center position={[0, 0, 3]}>
          <Text
            fontSize={0.3}
            color="#FFD800"
            anchorX="center"
            anchorY="middle"
          >
            MAGIC-LUM
            <meshStandardMaterial color="#FFD800" emissive="#FFD800" emissiveIntensity={0.5} />
          </Text>
        </Center>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <GOBOProjector />
      
      <Environment preset="city" />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Canvas
          camera={{ position: [5, 2, 5], fov: 45 }}
          className="w-full h-full"
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </motion.div>
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold text-white mb-4 text-shadow-xl">
            Proyección <span className="text-magic-gold">3D</span>
          </h1>
          <p className="text-xl text-gray-300">
            Tecnología de vanguardia en proyección GOBO
          </p>
        </motion.div>
      </div>
    </div>
  )
}