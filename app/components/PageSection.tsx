"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import React from "react";

interface PageSectionProps {
  scrollYProgress?: MotionValue<number>;
  children?: React.ReactNode;
  bgColor?: string;
  // New props for enhanced effects
  parallaxStrength?: number; // Controls strength of parallax effect (0-1)
  rotateOnScroll?: boolean; // Add slight rotation effect
  scaleOnScroll?: boolean; // Add scaling effect
}

const PageSection = ({
  scrollYProgress,
  children,
  bgColor = "bg-white",
  parallaxStrength = 0.5,
  rotateOnScroll = false,
  scaleOnScroll = false,
}: PageSectionProps) => {
  // Calculate effect strength based on parallaxStrength
  const bgParallax = 50 * parallaxStrength; // Max 50%
  const contentParallax = 15 * parallaxStrength; // Max 15%

  // Create parallax effect for background and content
  const backgroundY = useTransform(
    scrollYProgress || new MotionValue(0),
    [0, 1],
    ["0%", `${bgParallax}%`]
  );

  const contentY = useTransform(
    scrollYProgress || new MotionValue(0),
    [0, 1],
    ["0%", `-${contentParallax}%`]
  );

  // Optional rotation effect
  const contentRotate = useTransform(
    scrollYProgress || new MotionValue(0),
    [0, 1],
    [0, rotateOnScroll ? -5 : 0] // Rotate up to -5 degrees if enabled
  );

  // Optional scale effect
  const contentScale = useTransform(
    scrollYProgress || new MotionValue(0),
    [0, 0.5, 1],
    [1, scaleOnScroll ? 1.05 : 1, 1] // Scale up slightly in middle of scroll
  );

  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center ${bgColor} overflow-hidden relative snap-start`}
    >
      {/* Background parallax layer */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        {/* Optional - add background patterns or images here */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
      </motion.div>

      {/* Content with multiple effects */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-6"
        style={{
          y: contentY,
          rotate: contentRotate,
          scale: contentScale,
        }}
      >
        {children || (
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold tracking-tight">Section Title</h2>
            <p className="text-lg text-neutral-700">
              Interactive section with parallax scrolling effects.
            </p>
            <button className="px-6 py-3 bg-neutral-900 text-white rounded-full">
              Interact with me
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PageSection;
