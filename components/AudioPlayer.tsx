"use client"

import { Pause, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface AudioPlayerProps {
  src: string
  label?: string
}

export function AudioPlayer({ src, label = "Listen" }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnded = () => setPlaying(false)
    const onError = () => {
      setAvailable(false)
      setPlaying(false)
    }

    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)
    audio.addEventListener("ended", onEnded)
    audio.addEventListener("error", onError)

    return () => {
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      audio.removeEventListener("ended", onEnded)
      audio.removeEventListener("error", onError)
    }
  }, [src])

  if (!available) return null

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      void audio.play()
    }
  }

  return (
    <div className="flex items-center gap-3 mb-4">
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center gap-2 py-2 px-4 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-800 font-serif font-semibold transition-colors"
        aria-label={playing ? "Pause narration" : "Play narration"}
      >
        {playing ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
        <span>{playing ? "Pause" : label}</span>
      </button>
    </div>
  )
}
