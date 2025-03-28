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
      <div className="fixed top-0 right-10 w-1 h-full bg-transparent z-50">
        <motion.div
          className="w-full bg-neutral-800 origin-top"
          style={{
            scaleY: scrollYProgress,
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default ScreenWrapper;
