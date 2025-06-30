"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"

interface RomanticAudioPlayerProps {
  src: string
  className?: string
}

export function RomanticAudioPlayer({
  src,
  className = "",
}: RomanticAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isSeeking, setIsSeeking] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      if (!isSeeking) {
        setCurrentTime(audio.currentTime)
      }
    }
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [isSeeking])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio || !duration) return

    const newTime = (value[0] / 100) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleProgressStart = () => {
    setIsSeeking(true)
  }

  const handleProgressEnd = (value: number[]) => {
    const audio = audioRef.current
    if (!audio || !duration) return

    const newTime = (value[0] / 100) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
    setIsSeeking(false)
  }

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    const newVolume = value[0] / 100
    audio.volume = newVolume
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.volume = volume
      setIsMuted(false)
    } else {
      audio.volume = 0
      setIsMuted(true)
    }
  }

  const skipTime = (seconds: number) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = Math.max(0, Math.min(duration, audio.currentTime + seconds))
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0

  return (
    <Card
      className={`p-6 bg-gradient-to-br from-rose-50/80 to-purple-50/80 backdrop-blur-sm border-rose-200/50 shadow-lg ${className}`}
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Progress Bar */}
      <div className="mb-4">
        <Slider
          value={[progressPercentage]}
          onValueChange={handleProgressChange}
          onValueCommit={handleProgressEnd}
          onPointerDown={handleProgressStart}
          max={100}
          step={0.1}
          className="w-full cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => skipTime(-10)}
          className="text-rose-600 hover:text-rose-700 hover:bg-rose-100/50"
        >
          <SkipBack className="h-4 w-4" />
        </Button>

        <Button
          onClick={togglePlay}
          size="lg"
          className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white rounded-full w-12 h-12 p-0 shadow-lg transition-all duration-200 hover:scale-105"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => skipTime(10)}
          className="text-rose-600 hover:text-rose-700 hover:bg-rose-100/50"
        >
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          className="text-gray-600 hover:text-rose-600 hover:bg-rose-100/50"
        >
          {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
        <Slider
          value={[isMuted ? 0 : volume * 100]}
          onValueChange={handleVolumeChange}
          max={100}
          step={1}
          className="flex-1"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-rose-200/20 to-purple-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-purple-200/20 to-rose-200/20 rounded-full blur-lg"></div>
    </Card>
  )
}