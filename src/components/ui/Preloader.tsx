import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

interface PreloaderProps {
  onComplete: () => void;
  variant?: "primary" | "secondary";
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, variant = "primary" }) => {
  useEffect(() => {
    // Wait for the animation to finish before triggering onComplete
    // 3.5s covers the 3s draw + 0.5s pause to read it
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`preloader-container preloader-container--${variant}`}
      initial={{ y: 0 }}
      exit={{ y: "-100%", opacity: 0.8 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <svg
        className="preloader-svg"
        viewBox="0 0 800 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="preloader-text"
        >
          Sarvar & Shohida
        </text>
      </svg>
    </motion.div>
  );
};
