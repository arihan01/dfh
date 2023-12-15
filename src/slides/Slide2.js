import React from "react";
import backgroundVideo from "../img/Slide-2.mp4"; // importing the video
import BGposter from "../img/bg-1.webp";

export default function Slide2() {
  return (
    <div className="flex h-full flex-col items-center justify-center ">
      <video
        autoPlay
        playsInline
        poster={BGposter}
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        {/* Video used here */}
      </video>
    </div>
  );
}
