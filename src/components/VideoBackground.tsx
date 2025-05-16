
import React, { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing the video:", error);
      });
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <div className="absolute inset-0 bg-black/30 z-[1]"></div>
      <video 
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source 
          src="https://cdn.gpteng.co/samples/nature-abstract.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
