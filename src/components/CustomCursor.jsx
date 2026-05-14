import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Detect if device supports hover and has a fine pointer (like a mouse)
    const checkDevice = () => {
      const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      setIsDesktop(isFinePointer);

      // Restore normal cursor behavior on non-desktop devices
      if (!isFinePointer) {
        document.body.style.cursor = 'auto';
      } else {
        document.body.style.cursor = 'none';
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (isDesktop) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
    };

  }, [isDesktop]);

  if (!isDesktop) return null;

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