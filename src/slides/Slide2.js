import React from "react";
import backgroundVideo from "../img/Slide-2.mp4";

export default function Slide2() {
  return (
    <div className="flex h-full flex-col items-center justify-center ">
      <video
        autoPlay
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}
