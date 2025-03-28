"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import React from "react";

interface PageSectionProps {
  scrollYProgress?: MotionValue<number>;
  children?: React.ReactNode;
  bgColor?: string;
}

const PageSection = ({
  scrollYProgress,
  children,
  bgColor = "bg-white",
}: PageSectionProps) => {
  // Create parallax effect for background and content
  const backgroundY = useTransform(
    scrollYProgress || new MotionValue(0),
    [0, 1],
    ["0%", "30%"]
  );

  const contentY = useTransform(
    scrollYProgress || new MotionValue(0),
    [0, 1],
    ["0%", "-5%"]
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

      {/* Content with different parallax speed */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-6"
        style={{ y: contentY }}
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
