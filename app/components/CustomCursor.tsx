"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type CustomCursorProps = {
  size?: number;
  color?: string;
  mixBlendMode?: string;
  borderWidth?: number;
  borderColor?: string;
};

const CustomCursor = ({
  size = 20,
  color = "rgb(38, 38, 38)",
  mixBlendMode = "normal",
  borderWidth = 0,
  borderColor = "transparent",
}: CustomCursorProps) => {
  // State to track mouse position
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to update cursor position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // Handle cursor visibility when mouse leaves window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Add event listeners
    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Clean up
    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Calculate the center offset
  const centerOffset = size / 2;

  return (
    <div
      style={{
        position: "fixed", // Fixed to viewport
        left: 0,
        top: 0,
        transform: `translate(${position.x - centerOffset}px, ${
          position.y - centerOffset
        }px)`,
        mixBlendMode: mixBlendMode as any, // TypeScript fix
        border: `${borderWidth}px solid ${borderColor}`,
        pointerEvents: "none", // Important! Makes cursor "pass through" to elements underneath
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s, transform 0.1s ease-out",
      }}
    >
      <Image src="/Cursor.svg" alt="Cursor" width={size} height={size} />
    </div>
  );
};

export default CustomCursor;
