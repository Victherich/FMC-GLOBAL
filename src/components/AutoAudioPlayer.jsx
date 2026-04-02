import React, { useEffect, useRef, useState } from "react";

export default function AutoAudioPlayer({ src, volume = 0.5 }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const startAudio = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = volume;

      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});

      document.removeEventListener("click", startAudio);
    };

    document.addEventListener("click", startAudio);

    return () => {
      document.removeEventListener("click", startAudio);
    };
  }, [volume]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop />

      <button
        onClick={toggleAudio}
        style={{
          position: "fixed",
          bottom: "16%",
          right: "1%",
          padding: "3px 8px",
          borderRadius: "50px",
          border: "none",
          background: "#111",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 9999,
        }}
      >
        {isPlaying ? "Pause 🔊" : "Play ▶️"}
      </button>
    </>
  );
}





// import React, { useEffect, useRef, useState } from "react";

// export default function AutoAudioPlayer({ src, volume = 0.5 }) {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [hasStarted, setHasStarted] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!hasStarted) {
//         const audio = audioRef.current;
//         if (audio) {
//           audio.volume = volume;
//           audio.play().then(() => {
//             setIsPlaying(true);
//             setHasStarted(true);
//           }).catch(() => {
//             // autoplay might fail silently
//           });
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [volume, hasStarted]);

//   const toggleAudio = () => {
//     const audio = audioRef.current;

//     if (!audio) return;

//     if (audio.paused) {
//       audio.play();
//       setIsPlaying(true);
//     } else {
//       audio.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <>
//       <audio ref={audioRef} src={src} loop />

//       <button
//         onClick={toggleAudio}
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           padding: "12px 16px",
//           borderRadius: "50px",
//           border: "none",
//           background: "#111",
//           color: "#fff",
//           cursor: "pointer",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
//           zIndex: 9999,
//         }}
//       >
//         {isPlaying ? "Pause 🔊" : "Play ▶️"}
//       </button>
//     </>
//   );
// }