import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <>
      <div
        className="fixed w-2 h-2 bg-[#c9a96e] rounded-full z-[9999] pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        className="fixed w-8 h-8 border border-[#c9a96e66] rounded-full z-[9998] pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}