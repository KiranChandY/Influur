"use client"

import { useEffect, useRef, useState } from "react"
import CardGrid from "@/components/card/card-grid"

export default function ResultPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const lastScrollTop = useRef(0)
  const [videoStopped, setVideoStopped] = useState(false)
  const cardSectionRef = useRef<HTMLDivElement>(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current
      const cardSection = cardSectionRef.current
      if (!video || !cardSection) return

      const currentScroll = window.scrollY
      const cardSectionTop = cardSection.offsetTop - window.innerHeight * 0.5

      // Hide scroll indicator after scrolling a bit
      if (currentScroll > 150 && showScrollIndicator) {
        setShowScrollIndicator(false)
      } else if (currentScroll <= 150 && !showScrollIndicator) {
        setShowScrollIndicator(true)
      }

      // Check if we've reached the card section
      if (currentScroll >= cardSectionTop) {
        if (!videoStopped) {
          // Just pause the video at its current position
          video.pause()
          setVideoStopped(true)
        }
      } else {
        if (videoStopped) {
          setVideoStopped(false)
        }

        // Simple scroll-based playback
        if (currentScroll > lastScrollTop.current) {
          // Scrolling down - play forward
          if (videoLoaded) {
            video.play().catch(() => {})
          }
        } else if (currentScroll < lastScrollTop.current) {
          // Scrolling up - pause (don't try to reverse)
          video.pause()
        }
      }

      lastScrollTop.current = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [videoStopped, showScrollIndicator, videoLoaded])

  // Handle video loading
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setVideoLoaded(true)
      console.log("Video loaded successfully")
    }

    const handleError = (e: Event) => {
      console.error("Video error:", e)
      setVideoError(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    // Force reload the video
    video.load()

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <>
      <div className="min-h-[120vh] w-full relative overflow-hidden">
        {/* Video full screen initially */}
        <div className="relative">
          <video
            ref={videoRef}
            className="fixed top-0 left-0 w-full h-screen object-cover z-10"
            muted
            playsInline
            preload="auto"
            poster="/ariana-poster.png"
          >
            <source src="/ariana-glambot.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback background for when video fails to load */}
          {videoError && (
            <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-rose-950 to-black z-5"></div>
          )}

          {/* Subtle bottom gradient overlay */}
          <div className="fixed bottom-0 left-0 w-full h-48 bg-gradient-to-t from-rose-950/30 via-rose-900/20 to-transparent z-15 pointer-events-none"></div>
        </div>

        {/* Scroll Down Indicator */}
        {showScrollIndicator && (
          <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
            <span className="text-white text-base font-semibold mb-3">Scroll Down</span>
            <div className="w-7 h-12 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1.5 h-4 bg-white/80 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Name + Description - appears after 2-3 scrolls */}
        <div className="absolute top-[100vh] ml-16 left-0.4 transform -translate-x-1 z-10 max-w-md text-left">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Ariana Grande
          </h1>
          <p className="text-base text-white/90 mt-2 font-regular">Grammy-winning pop icon.</p>
        </div>
      </div>

      {/* Shorter Gradient Transition Section */}
      <div className="relative z-30 h-20 bg-gradient-to-b from-transparent via-rose-950/50 to-zinc-900/90"></div>

      {/* Card Grid Section - This is where video stops and AI results show */}
      <div
        ref={cardSectionRef}
        className="relative z-30 bg-gradient-to-b from-zinc-900/90 via-zinc-800/70 to-zinc-900/95 py-12 min-h-screen"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <CardGrid
          gridTitle="AI-Recommended Influencers"
          items={[
            {
              title: "Fashion Nova Muse",
              subtitle: "Trendy Gen Z fit reviewer",
              image: "https://assets.lummi.ai/assets/QmVQpR9kUDEiFupgWrzaUYVii2TLa5zE7h9XDU7okBFdyc?auto=format&w=450",
              badge: { text: "AI Pick", variant: "pink" },
            },
            {
              title: "Indie Beauty Creator",
              subtitle: "Known for high-glam GRWM videos",
              image: "https://assets.lummi.ai/assets/QmXFtkNH6GJy581VwChHZeQF6qfQM9bkLhF2kDh1px5qKB?auto=format&w=1500",
              badge: { text: "AI Pick", variant: "pink" },
            },
            {
              title: "Trend Dancer",
              subtitle: "Viral TikTok choreographer",
              image:
                "https://www.lummi.ai/api/pro/image/a06ede0d-63fb-4d99-be4c-9ba0840cf779?asset=original&auto=format&w=1500",
              badge: { text: "AI Pick", variant: "pink" },
            },
            {
              title: "Pop Culture Commentator",
              subtitle: "Ariana fanbase crossover potential",
              image: "https://assets.lummi.ai/assets/QmPdy3qFqQF8gDQ6KuuUrRaqez3cbdeaYw3GMrxBynLfGd?auto=format&w=1500",
              badge: { text: "AI Pick", variant: "pink" },
            },
          ]}
        />

        {/* Campaign Analytics */}
      </div>
    </>
  )
}
