"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

type ScreenWrapperProps = {
  children: React.ReactNode;
};

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  // Reference to the scroll container
  const containerRef = useRef<HTMLDivElement>(null);

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-y-auto overflow-x-hidden scrollbar-hide"
      style={{
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* Pass scroll progress to children */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            scrollYProgress,
          });
        }
        return child;
      })}

      {/* Optional scroll progress indicator */}
      <motion.div
        className="fixed top-0 right-0 w-1 bg-neutral-800 origin-right z-50"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  );
};

export default ScreenWrapper;
