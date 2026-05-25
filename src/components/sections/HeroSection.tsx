import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./HeroSection.css";

const TEXT = {
  subtitle: "Erkayevlar va Mamajanovlar oilasi, farzandlarimiz",
  groomName: "Sarvar",
  brideName: "Shohida",
  tagline: "Nikoh to'yiga taklif etishadi",
  scrollLabel: "Keyingi bo'limga o'tish",
};

interface HeroSectionProps {
  date: string;
  venue: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ date, venue }) => {
  const scrollToNext = () => {
    const storySection = document.querySelector("#story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {TEXT.subtitle}
          </motion.p>

          <motion.h1
            className="hero-names"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="text-script">{TEXT.groomName}</span>
            <span className="hero-ampersand">&</span>
            <span className="text-script">{TEXT.brideName}</span>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {TEXT.tagline}
          </motion.p>

          <motion.div
            className="hero-date"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="hero-date-line"></div>
            <p>{date}</p>
            <div className="hero-date-line"></div>
          </motion.div>

          <motion.p
            className="hero-location"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {venue}
          </motion.p>
        </motion.div>
      </div>

      <motion.button
        className="hero-scroll-indicator"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        aria-label={TEXT.scrollLabel}
      >
        <ChevronDown className="animate-bounce" size={32} />
      </motion.button>

      {/* Decorative Elements */}
      <div className="hero-decoration hero-decoration-left"></div>
      <div className="hero-decoration hero-decoration-right"></div>
    </section>
  );
};
