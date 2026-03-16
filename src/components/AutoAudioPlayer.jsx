import React, { useEffect, useRef } from "react";

export default function AutoAudioPlayer({ src, volume = 0.5 }) {

const audioRef = useRef(null);

useEffect(() => {

const startAudio = () => {

const audio = audioRef.current;

audio.volume = volume;

audio.play();

document.removeEventListener("click", startAudio);
};

document.addEventListener("click", startAudio);

}, [volume]);

return (
<audio ref={audioRef} src={src} loop />
);

}