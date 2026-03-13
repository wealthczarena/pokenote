"use client"

import { useState, useCallback } from "react"
import { PokemonGrid } from "@/components/pokemon-grid"
import { CopyPopup } from "@/components/copy-popup"
import { Sparkles } from "@/components/sparkles"
import { MusicToggle } from "@/components/music-toggle"
import { Footer } from "@/components/footer"

interface Pokemon {
  name: string
  emoji: string
  color: string
  sprite: string
}

export default function PokeNotePage() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
  const [showSparkles, setShowSparkles] = useState(false)
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 })

  const handlePokemonClick = useCallback(async (pokemon: Pokemon, event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    setSparklePosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })

    try {
      await navigator.clipboard.writeText(pokemon.emoji)
      setSelectedPokemon(pokemon)
      setShowSparkles(true)

      setTimeout(() => {
        setShowSparkles(false)
      }, 1000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }, [])

  const closePopup = useCallback(() => {
    setSelectedPokemon(null)
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Pixel grass background */}
      <div className="fixed inset-0 bg-background">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' fill='%234a7c4e'/%3E%3Crect x='0' y='24' width='8' height='8' fill='%233d6840'/%3E%3Crect x='16' y='24' width='8' height='8' fill='%233d6840'/%3E%3Crect x='8' y='16' width='8' height='8' fill='%235a8c5e'/%3E%3Crect x='24' y='16' width='8' height='8' fill='%235a8c5e'/%3E%3Crect x='4' y='4' width='4' height='8' fill='%236a9c6e'/%3E%3Crect x='20' y='8' width='4' height='8' fill='%236a9c6e'/%3E%3Crect x='12' y='0' width='4' height='6' fill='%237aac7e'/%3E%3Crect x='28' y='0' width='4' height='6' fill='%237aac7e'/%3E%3C/svg%3E")`,
            backgroundSize: "32px 32px",
            imageRendering: "pixelated",
          }}
        />
        {/* Grass blades at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='12' width='4' height='4' fill='%232d4a2f'/%3E%3Crect x='4' y='8' width='4' height='8' fill='%233d5a3f'/%3E%3Crect x='8' y='10' width='4' height='6' fill='%232d4a2f'/%3E%3Crect x='12' y='6' width='4' height='10' fill='%233d5a3f'/%3E%3Crect x='2' y='4' width='2' height='8' fill='%234d6a4f'/%3E%3Crect x='10' y='2' width='2' height='8' fill='%234d6a4f'/%3E%3C/svg%3E")`,
            backgroundSize: "16px 16px",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            imageRendering: "pixelated",
          }}
        />
      </div>

      {/* Music toggle */}
      <MusicToggle />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center flex-1 px-2 sm:px-4 py-6 sm:py-8">
        {/* Title Panel */}
        <div className="relative mb-4 sm:mb-6 md:mb-8">
          <div className="bg-card border-3 sm:border-4 border-border rounded-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground tracking-wider text-center">
              POKENOTE
            </h1>
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full animate-pulse delay-100" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse delay-200" />
            </div>
          </div>
          {/* Pixel corners */}
          <div className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 bg-border" />
          <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-border" />
          <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 bg-border" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-border" />
        </div>

        {/* Pokemon Grid */}
        <PokemonGrid onPokemonClick={handlePokemonClick} />

        {/* Instructions */}
        <div className="mt-4 sm:mt-6 md:mt-8 bg-card/90 border-3 sm:border-4 border-border rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]">
          <p className="text-card-foreground text-center text-xs sm:text-sm md:text-base">
            Click a Pokemon to copy the combo!
          </p>
        </div>

        {/* SEO text */}
        <section className="sr-only">
          <h2>Pokemon Emoji Combos for Instagram Notes</h2>
          <p>
            Copy Pokemon emoji combos for your Instagram Notes. Select a Pokemon,
            copy the emoji combination, and paste it into your Instagram Note to
            summon Pikachu, Charizard, Charmander, Gengar and more.
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Sparkles effect */}
      {showSparkles && <Sparkles x={sparklePosition.x} y={sparklePosition.y} />}

      {/* Copy popup */}
      {selectedPokemon && (
        <CopyPopup pokemon={selectedPokemon} onClose={closePopup} />
      )}
    </main>
  )
}
