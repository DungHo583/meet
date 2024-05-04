"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState, useCallback } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useStore } from "~/app/HNTW8/store";

const HlsPlayer = dynamic(() => import("react-hls-player"), { ssr: false });

export function Frame({ streamSource }: { streamSource: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const showControls = useStore((state) => state.showControls);
  const setShowControls = useStore((state) => state.setShowControls);

  const hideControls = useCallback(() => {
    setShowControls(false);
  }, []);

  const showControlsWithDelay = useCallback(() => {
    setTimeout(() => {
      setShowControls(true);
    }, 500);
  }, []);

  const handlePlayClick = useCallback(() => {
    if (videoRef.current) {
      if (autoPlay) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setAutoPlay((prevAutoPlay) => !prevAutoPlay);
      hideControls();
      showControlsWithDelay();
    }
  }, [autoPlay, hideControls, showControlsWithDelay]);

  const handleMouseEnter = useCallback(() => {
    setShowControls(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hideControls();
  }, [hideControls]);

  const handleTouchStart = useCallback(() => {
    setShowControls(true);
  }, []);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play();
    }
  }, [autoPlay]);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <HlsPlayer
        className="m-auto h-[calc(100vh-68px)]"
        playerRef={videoRef}
        src={streamSource}
        hlsConfig={{
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          lowLatencyMode: true,
        }}
        autoPlay={autoPlay}
      />

      {showControls && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            color: "rgba(248, 248, 255, 0.7)",
          }}
          onClick={handlePlayClick}
        >
          {autoPlay ? <FaPause size={32} /> : <FaPlay size={32} />}
        </div>
      )}
    </div>
  );
}
