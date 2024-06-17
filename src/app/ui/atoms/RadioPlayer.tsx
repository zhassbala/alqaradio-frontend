"use client";

import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  className?: string;
}

export default function RadioPlayer({ className = "" }: Props) {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const play = () => {
    audioElement.current
      ?.play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.log(err));
  };
  const pause = () => {
    if (!audioElement.current) return;
    audioElement.current.pause();
    setIsPlaying(false);
  };
  const togglePlayRadio = () => {
    const audio = audioElement.current;
    if (!audio) return;
    else if (audio.paused) play();
    else pause();
  };
  return (
    <>
      <div
        className={`w-14 h-14 md:w-16 md:h-16 cursor-pointer flex items-center justify-center p-4 text-yellow-main ${className}`}
        onClick={togglePlayRadio}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="w-full h-full text-red-600" />
      </div>
      <audio ref={audioElement} src="/api/broadcast"></audio>
    </>
  );
}
