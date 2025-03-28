"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

type ScreenWrapperProps = {
  children: React.ReactNode;
};

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-y-auto overflow-x-hidden"
      style={{
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* Children with scroll progress */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            scrollYProgress,
          });
        }
        return child;
      })}

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-1/2 right-10 h-1/2 w-1 bg-transparent z-50 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="w-full h-full bg-gray-200/30 rounded-full overflow-hidden relative">
          {/* Dots along the track */}
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2"></div>
          <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2"></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2"></div>

          <motion.div
            className="w-full bg-neutral-800 origin-top rounded-full"
            style={{
              scaleY: scrollYProgress,
              height: "100%",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ScreenWrapper;
