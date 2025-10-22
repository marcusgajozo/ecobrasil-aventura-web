import { useCallback, useRef, useEffect, useState } from 'react'

export const usePlayAudio = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const cleanupAudio = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    audio.src = ''
    audio.removeAttribute('src')
    audio.load()
    audioRef.current = null
  }, [])

  const playAudio = useCallback(
    (audioSrc: string, volume = 1.0) => {
      cleanupAudio()

      const audio = new Audio(audioSrc)
      audio.volume = volume

      setIsLoading(true)
      setIsPlaying(false)

      const handleCanPlay = () => {
        setIsLoading(false)
        setIsPlaying(true)
        audio.play().catch(err => {
          console.error('Erro ao tocar áudio:', err)
          setIsPlaying(false)
        })
      }

      const handleEnded = () => setIsPlaying(false)

      audio.addEventListener('canplaythrough', handleCanPlay)
      audio.addEventListener('ended', handleEnded)

      audioRef.current = audio

      const cleanup = () => {
        audio.removeEventListener('canplaythrough', handleCanPlay)
        audio.removeEventListener('ended', handleEnded)
      }

      audioRef.current!.onpause = cleanup
    },
    [cleanupAudio]
  )

  const stopAudio = useCallback(() => {
    cleanupAudio()
    setIsPlaying(false)
    setIsLoading(false)
  }, [cleanupAudio])

  useEffect(() => {
    return () => stopAudio()
  }, [stopAudio])

  return { playAudio, stopAudio, isLoading, isPlaying }
}
