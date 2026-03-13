"use client"

import { useEffect, useState } from "react"

interface SparklesProps {
  x: number
  y: number
}

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  delay: number
}

export function Sparkles({ x, y }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const newSparkles: Sparkle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 120,
      y: (Math.random() - 0.5) * 120,
      size: Math.random() * 16 + 8,
      rotation: Math.random() * 360,
      delay: Math.random() * 200,
    }))
    setSparkles(newSparkles)
  }, [x, y])

  return (
    <div 
      className="fixed pointer-events-none z-40"
      style={{ left: x, top: y }}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle-burst"
          style={{
            left: 0,
            top: 0,
            transform: `translate(${sparkle.x}px, ${sparkle.y}px) rotate(${sparkle.rotation}deg)`,
            animationDelay: `${sparkle.delay}ms`,
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-accent drop-shadow-lg"
          >
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
      {/* Extra star particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute text-xl animate-sparkle-burst"
          style={{
            left: 0,
            top: 0,
            transform: `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`,
            animationDelay: `${i * 50}ms`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  )
}
