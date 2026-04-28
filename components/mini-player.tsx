"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

export function MiniPlayer() {
  const router = useRouter();
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [isHovered, setIsHovered] = useState(false);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }, []);

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    const bar = progressRef.current;
    if (!v || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const savedTime = localStorage.getItem("gt-video-time");
    if (savedTime) {
      v.currentTime = parseFloat(savedTime);
    }

    const onTime = () => {
      if (!v.duration) return;
      setProgress((v.currentTime / v.duration) * 100);
      setCurrentTime(formatTime(v.currentTime));
      localStorage.setItem("gt-video-time", v.currentTime.toString());
    };
    const onMeta = () => {
      setDuration(formatTime(v.duration));
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  if (pathname === "/live") return null;

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-5 right-5 z-[70] flex h-12 w-12 items-center justify-center bg-ink/90 backdrop-blur-md text-bone shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-blood hover:scale-105"
        aria-label="Miniplayer öffnen"
        style={{ borderRadius: 2 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </button>
    );
  }

  return (
    <div
      className="fixed z-[70] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        bottom: 20,
        right: 20,
        width: isExpanded ? "min(480px, calc(100vw - 40px))" : "min(320px, calc(100vw - 40px))",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer shell */}
      <div
        className="relative overflow-hidden bg-ink shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(155,122,50,0.15)]"
        style={{ borderRadius: 3 }}
      >
        {/* Video container */}
        <div
          className="relative w-full overflow-hidden bg-black cursor-pointer"
          style={{ aspectRatio: "16/9" }}
          onClick={() => router.push("/live")}
        >
          <video
            ref={videoRef}
            src="/example_fight.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30 pointer-events-none" />

          {/* LIVE badge */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blood/90 backdrop-blur-sm text-bone font-display text-[8px] tracking-[0.35em]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-bone animate-ping opacity-60" />
                <span className="relative rounded-full bg-bone h-1.5 w-1.5" />
              </span>
              LIVE
            </span>
          </div>

          {/* Center play button (shown when paused) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bone/15 backdrop-blur-md border border-bone/20 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                <svg className="ml-0.5 text-bone" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          )}

          {/* Bottom info overlay */}
          <div className="absolute bottom-0 inset-x-0 px-3 pb-2 pt-6 bg-gradient-to-t from-ink/90 to-transparent pointer-events-none">
            <div className="font-display text-[11px] tracking-[0.2em] text-bone leading-tight truncate">
              KOVA VS AKANDE
            </div>
            <div className="text-[9px] tracking-[0.25em] uppercase text-bone/50 mt-0.5">
              GT XI · Hauptkarte
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div
          ref={progressRef}
          className="relative h-1 bg-ink-3 cursor-pointer group"
          onClick={handleProgressClick}
        >
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blood to-blood-deep transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-blood shadow-[0_0_6px_rgba(164,61,53,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
          />
        </div>

        {/* Controls bar */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 bg-ink-2">
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="flex h-7 w-7 items-center justify-center text-bone/80 hover:text-bone transition-colors"
            aria-label={isPlaying ? "Pause" : "Abspielen"}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

          {/* Mute/Unmute */}
          <button
            onClick={toggleMute}
            className="flex h-7 w-7 items-center justify-center text-bone/80 hover:text-bone transition-colors"
            aria-label={isMuted ? "Ton ein" : "Stummschalten"}
          >
            {isMuted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>

          {/* Time */}
          <span className="font-mono text-[9px] tracking-wider text-bone/40 ml-1">
            {currentTime} / {duration}
          </span>

          {/* Spacer */}
          <span className="flex-1" />

          {/* Expand/Collapse */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex h-7 w-7 items-center justify-center text-bone/80 hover:text-bone transition-colors"
            aria-label={isExpanded ? "Verkleinern" : "Vergrößern"}
          >
            {isExpanded ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" y1="10" x2="21" y2="3" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            )}
          </button>

          {/* Close */}
          <button
            onClick={() => {
              const v = videoRef.current;
              if (v) v.pause();
              setIsVisible(false);
            }}
            className="flex h-7 w-7 items-center justify-center text-bone/80 hover:text-blood transition-colors"
            aria-label="Miniplayer schließen"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
