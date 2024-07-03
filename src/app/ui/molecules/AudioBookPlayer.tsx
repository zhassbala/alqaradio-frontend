"use client";

import { FileObject } from "@/types";
import { capitalize, getImagePath } from "@/helpers";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function ({ audiobook }: { audiobook: FileObject }) {
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
    <div className="flex">
      <div
        className="w-14 h-14 md:w-16 md:h-16 cursor-pointer flex items-center justify-center p-4 text-yellow-main shrink-0"
        onClick={togglePlayRadio}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="w-full h-full text-red-600" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="mb-2 text-lg font-medium">{capitalize(audiobook.attributes.name)}</p>
        {audiobook.attributes.caption && (
          <p className="mb-2 text-sm text-[gray]">{capitalize(audiobook.attributes.caption)}</p>
        )}
      </div>
      <audio className="w-full" ref={audioElement}>
        <source src={getImagePath(audiobook.attributes.url)} type={audiobook.attributes.mime} />
      </audio>
    </div>
  );
}
