"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const PageLoader = () => {
  const [mounted, setMounted] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isComplete) {
      const hideTimer = setTimeout(() => {
        setMounted(false);
      }, 900);
      return () => clearTimeout(hideTimer);
    }
  }, [isComplete]);

  if (!mounted) return null;

  const curtainVariants: Variants = {
    initial: { x: 0 },
    exit: (custom: string) => ({
      x: custom === "left" ? "-100%" : "100%",
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
    }),
  };

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white"
          role="progressbar"
          aria-label="Page loading"
        >
          {/* Left Curtain */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-white"
            variants={curtainVariants}
            initial="initial"
            animate={isComplete ? "exit" : "initial"}
            custom="left"
          />

          {/* Right Curtain */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-white"
            variants={curtainVariants}
            initial="initial"
            animate={isComplete ? "exit" : "initial"}
            custom="right"
          />

          {/* Loader Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            animate={{ opacity: isComplete ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative w-12 h-12">
              <motion.div
                className="absolute inset-0 rounded-full border-8 border-[#0f1f12]"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
