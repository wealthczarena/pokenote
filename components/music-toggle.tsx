"use client"

import { useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
      }
    } catch (err) {
      console.error("[music-toggle] playback error:", err)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/pokemon-yellow.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        className={`
          fixed top-4 right-4 z-40
          bg-card border-3 border-border rounded-lg p-2 sm:p-3
          shadow-[3px_3px_0_0_rgba(0,0,0,0.3)]
          hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]
          hover:-translate-y-0.5 hover:-translate-x-0.5
          active:shadow-[1px_1px_0_0_rgba(0,0,0,0.3)]
          active:translate-y-0.5 active:translate-x-0.5
          transition-all duration-150
          ${isPlaying ? "bg-primary/20" : ""}
        `}
        aria-label={isPlaying ? "Mute music" : "Play music"}
        title={isPlaying ? "Music ON" : "Music OFF"}
        type="button"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
        )}
      </button>
    </>
  )
}