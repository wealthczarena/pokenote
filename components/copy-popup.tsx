"use client"

import { useEffect } from "react"
import { X, Check } from "lucide-react"

interface Pokemon {
  name: string
  emoji: string
  color: string
}

interface CopyPopupProps {
  pokemon: Pokemon
  onClose: () => void
}

export function CopyPopup({ pokemon, onClose }: CopyPopupProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close popup"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/45 backdrop-blur-md animate-in fade-in duration-300"
      />

      {/* Modal */}
      <div
        className="
          relative z-10 w-[92vw] max-w-140
          bg-card border-4 border-border
          rounded-[28px]
          px-5 py-6 sm:px-8 sm:py-8
          shadow-[8px_8px_0_0_rgba(0,0,0,0.28)]
          animate-in zoom-in-95 fade-in duration-200
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute right-4 top-4
            flex h-10 w-10 items-center justify-center
            rounded-full
            text-muted-foreground
            transition-transform duration-150
            hover:scale-105
            active:scale-95
          "
          aria-label="Close"
          type="button"
        >
          <X className="h-6 w-6" strokeWidth={2.5} />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Success badge */}
          <div
            className="
              mb-6 flex h-20 w-20 items-center justify-center
              rounded-full border-4
              border-primary/40 bg-primary/20
            "
          >
            <Check className="h-10 w-10 text-primary" strokeWidth={3.5} />
          </div>

          {/* Emoji combo box */}
          <div
            className="
              mb-6 w-full
              rounded-[22px] border-4 border-border
              bg-[#a8c69a]
              px-4 py-5
              shadow-[0_0_0_0_rgba(0,0,0,0)]
            "
          >
            <p className="text-3xl sm:text-4xl leading-none tracking-[0.15em]">
              {pokemon.emoji}
            </p>
          </div>

          {/* Copied */}
          <h2 className="mb-5 text-[32px] leading-none font-bold tracking-[0.18em] text-primary sm:text-[40px]">
            COPIED!
          </h2>

          {/* Instructions */}
          <p className="max-w-105 text-base leading-relaxed text-card-foreground sm:text-lg">
            Paste this in your Instagram Note to summon{" "}
            <span className="font-bold text-primary">{pokemon.name}</span>
          </p>

          {/* Color hint */}
          <div
            className="
              mt-6 w-full
              rounded-[22px] border-4 border-[#e6aa00]
              bg-[#e7d28c]
              px-4 py-5
            "
          >
            <p className="text-sm font-medium tracking-[0.08em] text-card-foreground sm:text-base">
              Use a <span className="font-bold">{pokemon.color}</span> note background
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}