import React, { useEffect, useState } from "react";

export default function ScrollWatch() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log("window.pageYOffset", window.pageYOffset);
      setScrollOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // todo: clean method
  });

  return (
    <div>
      {/* <button onClick={() => } className="toggle-scroll">Toggle Scroll Watch</button> */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          fontSize: "48px",
          background: "lightblue"
        }}
      >
        {scrollOffset.toFixed(2)}
      </div>
    </div>
  );
}
