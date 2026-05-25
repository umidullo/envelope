import React from "react";
import { Heart, ArrowUp } from "lucide-react";
import "./Footer.css";

const TEXT = {
  title: "Rahmat",
  message:
    "Siz bilan bu maxsus kunni nishonlashni sabrsizlik bilan kutmoqdamiz!",
  copyright: "© 2026 Sarvar & Shohida",
  backToTop: "Yuqoriga qaytish",
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content-center">
          <h3 className="footer-title text-script">{TEXT.title}</h3>
          <p className="footer-text">{TEXT.message}</p>
          <div className="footer-heart">
            <Heart className="animate-heartbeat" size={48} />
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">{TEXT.copyright}</p>
        </div>

        <button
          className="footer-back-to-top"
          onClick={scrollToTop}
          aria-label={TEXT.backToTop}
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};
