import React, { useState, useEffect, useRef } from "react";

import IconPlay from "./icons/IconPlay";
import IconPause from "./icons/IconPause";
import IconList from "./icons/IconMusic";
import IconVolume from "./icons/IconVolume";
import IconMute from "./icons/IconMute";

const AudioPlayer = () => {
  const tracks = [
    {
      value: "coffee shop",
      title: "coffee shop",
      src: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
    },
    {
      value: "rainy weather",
      title: "rainy weather",
      src: "https://actions.google.com/sounds/v1/weather/light_rain.ogg",
    },
    {
      value: "turning pages",
      title: "turning pages",
      src: "https://actions.google.com/sounds/v1/foley/flipping_newspaper_pages.ogg",
    },
    {
      value: "bonfire",
      title: "bonfire",
      src: "https://actions.google.com/sounds/v1/ambiences/daytime_forrest_bonfire.ogg",
    },
  ];
  const [selectedTrack, setSelectedTrack] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const progressVolume = useRef();

  const handleSelected = (e) => {
    setSelectedTrack(JSON.parse(e.target.value));
    setCurrentTime(0);
    setIsPlaying(false);
  };

  //   Use when want to show the time of the songs
  //   const calculateTime = (secs) => {
  //     const minutes = Math.floor(secs / 60);
  //     const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  //     const seconds = Math.floor(secs % 60);
  //     const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  //     return `${returnedMinutes}:${returnedSeconds}`;
  //   };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const toggleMute = () => {
    audioPlayer.current.muted = !audioPlayer.current.muted;
    setIsMute(!isMute);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  };

  const changeVolume = () => {
    audioPlayer.current.volume = progressVolume.current.value;
  };

  return (
    <div className="md:col-start-5 md:col-span-4 lg:col-start-6 lg:col-span-5 mt-20 space-y-2">
      <div className="flex gap-4 items-center">
        <IconList />
        <select
          onChange={handleSelected}
          defaultValue={"default"}
          className="bg-gray-700 bg-opacity-0 text-white w-36 cursor-pointer"
        >
          <option
            value={"default"}
            disabled={true}
            className="bg-gray-200 bg-opacity-30 text-gray-400"
          >
            Select a track
          </option>
          {tracks.map((track) => (
            <option
              key={track.value}
              value={JSON.stringify(track)}
              className="bg-gray-200 bg-opacity-50 text-gray-900"
            >
              {track.title}
            </option>
          ))}
        </select>
        <audio
          ref={audioPlayer}
          src={selectedTrack.src}
          preload="none"
          loop
          volume="true"
        ></audio>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={togglePlayPause}>
          {isPlaying ? <IconPause /> : <IconPlay />}
        </button>
        <input
          type="range"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
          className="h-1.5 "
        />
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleMute}>
          {isMute ? <IconMute /> : <IconVolume />}
        </button>
        <input
          type="range"
          defaultValue="0.5"
          min={0}
          max={1}
          step={0.01}
          ref={progressVolume}
          onChange={changeVolume}
          className="h-1.5 "
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
