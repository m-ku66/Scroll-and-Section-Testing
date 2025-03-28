"use client";
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
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Function to update cursor position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if we're hovering over an interactive element
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "P" ||
        !!target.closest('[role="button"]') ||
        getComputedStyle(target).cursor === "pointer";

      setIsHovering(isInteractive);
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
        pointerEvents: "none", // Important! Makes cursor "pass through" to elements underneath
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s, transform 0.1s ease-out",
      }}
      className="hidden lg:block" // Hide on mobile
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          // Apply scaling to the whole SVG instead of individual parts
          transform: isHovering ? "scale(1.5)" : "scale(1)",
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* Outer corners - no transform here */}
        <path
          d="M21 6V1H16M1 6V1H6M16 21H21V16M6 21H1V16"
          stroke="#212121"
          strokeWidth="1" // Explicitly set stroke width
        />

        {/* Center dot with independent scaling */}
        <circle
          cx="11"
          cy="11"
          r={isHovering ? "1" : "2"} // Just change the radius directly
          fill="#212121"
          style={{
            transition: "r 0.2s ease-out",
          }}
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
