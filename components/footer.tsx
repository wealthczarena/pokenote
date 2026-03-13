import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30">
      <div className="bg-black/50 backdrop-blur-sm border-t-2 border-white/20">
        {/* Desktop layout - 3 zones */}
        <div className="hidden sm:flex items-center justify-between px-6 py-3">
          {/* Left zone - Credit */}
          <a
            href="https://www.instagram.com/byzachan._"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors group"
          >
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>
              Built by{" "}
              <span className="font-bold group-hover:underline underline-offset-2">
                @byzachan
              </span>
            </span>
          </a>

          {/* Center zone - Version */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/90 tracking-wider">
              PokeNote v1.0
            </span>
          </div>

          {/* Right zone - Pokemon count */}
          <div className="flex items-center gap-2 text-sm text-white/80">
            <span className="text-amber-300">21</span>
            <span>Combos</span>
          </div>
        </div>

        {/* Mobile layout - single row */}
        <div className="flex sm:hidden items-center justify-between px-4 py-2.5">
          {/* Left - Credit */}
          <a
            href="https://www.instagram.com/byzachan._"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition-colors"
          >
            <ArrowUpRight className="w-3 h-3 opacity-70" />
            <span>
              Built by <span className="font-bold">@byzachan</span>
            </span>
          </a>

          {/* Right - Count */}
          <div className="text-xs text-white/80">
            <span className="text-amber-300 font-bold">21</span> combos
          </div>
        </div>
      </div>
    </footer>
  )
}
