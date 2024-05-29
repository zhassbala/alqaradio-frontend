"use client";

import Play from "@/app/ui/atoms/icons/Play";
import Pause from "@/app/ui/atoms/icons/Pause";
import { useRef, useState } from "react";

interface Props {
  className?: string;
}

export default function RadioPlayer({ className = "" }: Props) {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayRadio = () => {
    const audio = audioElement.current;
    if (!audio) return;
    else if (audio.paused) {
      setIsPlaying(true);
      audio.play();
    } else {
      setIsPlaying(false);
      audio?.pause();
    }
  };
  return (
    <>
      <div
        className={`w-14 h-14 md:w-16 md:h-16 cursor-pointer flex items-center justify-center p-4 text-yellow-main ${className}`}
        onClick={togglePlayRadio}
      >
        {isPlaying ? <Pause /> : <Play />}
      </div>
      <audio ref={audioElement} src="http://194.39.67.35/radioA" hidden></audio>
    </>
  );
}
