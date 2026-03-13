"use client"

import { useState } from "react"
import Image from "next/image"

interface Pokemon {
  name: string
  emoji: string
  color: string
  sprite: string
}

const POKEMON: Pokemon[] = [
  {
    name: "Pikachu",
    emoji: "🔴 ⚈ ․̫ ⚈ 🔴",
    color: "yellow",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
  },
  {
    name: "Charmander",
    emoji: "(  ◕ ‿ ◕  )",
    color: "orange",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
  },
  {
    name: "Chansey",
    emoji: "≧(・▽・)≦",
    color: "pink",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/113.gif",
  },
  {
    name: "Meowth",
    emoji: "ニ(🕛⎵🕛)ニ",
    color: "light yellow",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/52.gif",
  },
  {
    name: "Chinchou",
    emoji: "🟡(⊹ 〰 ⊹)🟡",
    color: "blue",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/170.gif",
  },
  {
    name: "Raichu",
    emoji: "🟡 •̀ ᴗ •́ 🟡",
    color: "orange",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif",
  },
  {
    name: "Ditto",
    emoji: "・_____・",
    color: "purple",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
  },
  {
    name: "Gengar",
    emoji: "(◥◣ ◢◤) 👅",
    color: "purple",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif",
  },
  {
    name: "Mimikyu",
    emoji: "🟠﹏﹏﹏﹏🟠",
    color: "yellow",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
  },
  {
    name: "Jigglypuff",
    emoji: "(💙 ᴗ 💙)",
    color: "pink",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/39.gif",
  },
  {
    name: "Snorlax",
    emoji: "( – ﹏ – )",
    color: "dark blue",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif",
  },
  {
    name: "Wobbuffet",
    emoji: ">﹏﹏﹏<",
    color: "blue",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/202.gif",
  },
  {
    name: "Azurill",
    emoji: "⚪ •̀ ᴗ •́ ⚪",
    color: "blue",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/298.gif",
  },
  {
    name: "Squirtle",
    emoji: "⚪  • ᴗ •  ⚪",
    color: "blue",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
  },
  {
    name: "Bulbasaur",
    emoji: "^ ‿ ^",
    color: "green",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
  },
  {
    name: "Eevee",
    emoji: "(  • ﻌ •  )",
    color: "brown",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif",
  },
  {
    name: "Charizard",
    emoji: "(◥◣ ◢◤)",
    color: "orange",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
  },
  {
    name: "Psyduck",
    emoji: "( ˙ ꒳ ˙ )",
    color: "yellow",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif",
  },
  {
    name: "Vulpix",
    emoji: "( ◕ ◡ ◕ )",
    color: "orange",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/37.gif",
  },
  {
    name: "Cubone",
    emoji: "( ︿ ) 🦴",
    color: "brown",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/104.gif",
  },
  {
    name: "Togepi",
    emoji: "⚪  ^ ‿ ^  ⚪",
    color: "white",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/175.gif",
  },
]

interface PokemonGridProps {
  onPokemonClick: (pokemon: Pokemon, event: React.MouseEvent) => void
}

export function PokemonGrid({ onPokemonClick }: PokemonGridProps) {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)

  const handleClick = (pokemon: Pokemon, index: number, event: React.MouseEvent) => {
    setClickedIndex(index)
    onPokemonClick(pokemon, event)
    
    setTimeout(() => {
      setClickedIndex(null)
    }, 600)
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 md:gap-4 w-full max-w-6xl mx-auto px-2">
      {POKEMON.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={(e) => handleClick(pokemon, index, e)}
          className={`
            group relative bg-card border-2 sm:border-3 md:border-4 border-border rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4
            shadow-[2px_2px_0_0_rgba(0,0,0,0.3)] sm:shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] md:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]
            hover:shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] sm:hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] md:hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.3)]
            hover:-translate-y-1 hover:-translate-x-0.5
            active:shadow-[1px_1px_0_0_rgba(0,0,0,0.3)] sm:active:shadow-[2px_2px_0_0_rgba(0,0,0,0.3)]
            active:translate-y-0.5 active:translate-x-0.5
            transition-all duration-150 ease-out
            cursor-pointer
            ${clickedIndex === index ? "animate-pokeball" : ""}
          `}
        >
          {/* Pokeball animation overlay */}
          {clickedIndex === index && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="animate-pokeball-spin">
                <svg width="40" height="40" viewBox="0 0 48 48" className="drop-shadow-lg sm:w-12 sm:h-12">
                  <circle cx="24" cy="24" r="22" fill="#ff5555" stroke="#222" strokeWidth="2" />
                  <rect x="2" y="22" width="44" height="4" fill="#222" />
                  <circle cx="24" cy="24" r="22" fill="white" clipPath="inset(50% 0 0 0)" stroke="#222" strokeWidth="2" />
                  <circle cx="24" cy="24" r="8" fill="white" stroke="#222" strokeWidth="2" />
                  <circle cx="24" cy="24" r="4" fill="#222" />
                </svg>
              </div>
            </div>
          )}

          {/* Pokemon sprite */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-1 sm:mb-2 flex items-center justify-center">
            <Image
              src={pokemon.sprite}
              alt={pokemon.name}
              width={80}
              height={80}
              className={`
                pixelated object-contain w-full h-full
                group-hover:scale-110 group-hover:animate-bounce-subtle
                transition-transform duration-200
                ${clickedIndex === index ? "opacity-0" : ""}
              `}
              style={{ imageRendering: "pixelated" }}
              unoptimized
              loading="lazy"
            />
          </div>

          {/* Pokemon name */}
          <p className="text-card-foreground text-center text-[10px] sm:text-xs md:text-sm font-bold tracking-wide truncate w-full px-0.5">
            {pokemon.name}
          </p>

          {/* Hover sparkle effect */}
          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm sm:text-base md:text-xl animate-pulse">*</span>
          </div>
        </button>
      ))}
    </div>
  )
}
