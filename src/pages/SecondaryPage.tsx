import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { MusicPlayer, Preloader } from "@components/ui";
import { useCountdown } from "@hooks/useCountdown";
import { WEDDINGS } from "@/data/wedding";
import "./SecondaryPage.css";

const TEXT = {
  couple: "Sarvar & Shohida",
  coupleGroom: "Sarvar",
  coupleBride: "Shohida",

  intro: {
    families: "Erkayevlar va Mamajanovlar oilasi",
    tagline: "farzandlarimizning nikoh to'yiga",
    invite: "sizni taklif etishadi",
  },

  story: {
    title: "Bizning Hikoyamiz",
    body: "Hayot gilamida ikkita ruh umumiy orzular va mehr-muhabbat lahzalari go'zalligida bir-birini topdi. Muloyim bog'lanish sifatida boshlangan narsa so'zlar bilan ifodalab bo'lmaydigan darajada chuqur muhabbatga aylandi. Kulgu va ko'z yoshlari orqali, sokin oqshomlar va quvonchli bayramlar davomida biz uyning joy emas, balki bir-birimizning bag'rimizda topadigan his ekanligini angladik.",
  },

  events: {
    title: "Tadbir",
    cardTitle: "To'y marosimi",
  },

  countdown: {
    title: "Sana",
    days: "Kun",
    hours: "Soat",
    minutes: "Daqiqa",
    seconds: "Soniya",
  },

  location: {
    title: "Manzil",
    getDirections: "Yo'nalish olish",
  },

  footer: {
    thanks: "Rahmat",
    message: "Siz bilan bu maxsus kunni nishonlashni sabrsizlik bilan kutmoqdamiz",
    copyright: "© 2026 Sarvar & Shohida",
  },
};

export default function SecondaryPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("sp-theme");
    return () => document.documentElement.classList.remove("sp-theme");
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
  }, [isLoading]);

  const visibleWeddings = WEDDINGS.filter((w) => w.city === "Toshkent");
  const now = new Date();
  const countdownTarget =
    visibleWeddings.find((w) => new Date(w.datetime) > now) ??
    visibleWeddings[visibleWeddings.length - 1];
  const timeLeft = useCountdown(new Date(countdownTarget.datetime));

  return (
    <div className="sp-app">
      <AnimatePresence>
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} variant="secondary" />
        )}
      </AnimatePresence>

      <MusicPlayer variant="secondary" />

      <main>
        {/* Hero */}
        <section className="sp-hero">
          <div className="sp-hero-stars" aria-hidden="true" />

          <motion.div
            className="sp-hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.p
              className="sp-hero-families"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {TEXT.intro.families}
            </motion.p>

            <motion.p
              className="sp-hero-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {TEXT.intro.tagline}
            </motion.p>

            <div className="sp-hero-ornament" aria-hidden="true">
              <span />
              <span className="sp-diamond">◆</span>
              <span />
            </div>

            <motion.h1
              className="sp-hero-names"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <span className="sp-name">{TEXT.coupleGroom}</span>
              <span className="sp-ampersand">&</span>
              <span className="sp-name">{TEXT.coupleBride}</span>
            </motion.h1>

            <div className="sp-hero-ornament" aria-hidden="true">
              <span />
              <span className="sp-diamond">◆</span>
              <span />
            </div>

            <motion.p
              className="sp-hero-invite"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {TEXT.intro.invite}
            </motion.p>

            <motion.div
              className="sp-hero-date"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <span>{visibleWeddings[0].date}</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="sp-hero-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            aria-hidden="true"
          >
            <span className="sp-scroll-line" />
          </motion.div>
        </section>

        {/* Story */}
        <section className="sp-section sp-story">
          <motion.div
            className="sp-section-inner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="sp-section-title">{TEXT.story.title}</h2>
            <div className="sp-divider" aria-hidden="true">
              <span />◆<span />
            </div>
            <p className="sp-story-text">{TEXT.story.body}</p>
            <p className="sp-story-signature">{TEXT.couple}</p>
          </motion.div>
        </section>

        {/* Events */}
        <section className="sp-section sp-events">
          <motion.div
            className="sp-section-inner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="sp-section-title">{TEXT.events.title}</h2>
            <div className="sp-divider" aria-hidden="true">
              <span />◆<span />
            </div>

            <div className="sp-events-list">
              {visibleWeddings.map((wedding, index) => (
                <motion.div
                  key={wedding.city}
                  className="sp-event-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="sp-event-city">{wedding.city}</div>
                  <h3 className="sp-event-title">{TEXT.events.cardTitle}</h3>
                  <div className="sp-event-details">
                    <div className="sp-event-row">
                      <Calendar size={16} />
                      <span>{wedding.date}</span>
                    </div>
                    <div className="sp-event-row">
                      <Clock size={16} />
                      <span>{wedding.time}</span>
                    </div>
                    <div className="sp-event-row">
                      <MapPin size={16} />
                      <span>
                        {wedding.venue}
                        <br />
                        {wedding.address}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Countdown */}
        <section className="sp-section sp-countdown">
          <motion.div
            className="sp-section-inner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="sp-section-title">{TEXT.countdown.title}</h2>
            <div className="sp-divider" aria-hidden="true">
              <span />◆<span />
            </div>
            <p className="sp-countdown-city">{countdownTarget.city}</p>

            <div className="sp-countdown-grid">
              {[
                { value: timeLeft.days, label: TEXT.countdown.days },
                { value: timeLeft.hours, label: TEXT.countdown.hours },
                { value: timeLeft.minutes, label: TEXT.countdown.minutes },
                { value: timeLeft.seconds, label: TEXT.countdown.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="sp-countdown-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="sp-countdown-value">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="sp-countdown-label">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Location */}
        <section className="sp-section sp-location">
          <motion.div
            className="sp-section-inner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="sp-section-title">{TEXT.location.title}</h2>
            <div className="sp-divider" aria-hidden="true">
              <span />◆<span />
            </div>

            <div className="sp-location-list">
              {visibleWeddings.map((wedding, index) => (
                <motion.div
                  key={wedding.city}
                  className="sp-location-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <MapPin size={32} className="sp-location-pin" />
                  <h3 className="sp-location-venue">{wedding.venue}</h3>
                  <p className="sp-location-address">{wedding.address}</p>
                  <p className="sp-location-date">{wedding.date}</p>
                  <button
                    className="sp-location-btn"
                    onClick={() => window.open(wedding.mapLink, "_blank")}
                  >
                    {TEXT.location.getDirections}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sp-footer">
        <div className="sp-divider sp-footer-divider" aria-hidden="true">
          <span />◆<span />
        </div>
        <motion.p
          className="sp-footer-thanks"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {TEXT.footer.thanks}
        </motion.p>
        <p className="sp-footer-message">{TEXT.footer.message}</p>
        <p className="sp-footer-copy">{TEXT.footer.copyright}</p>
        <button
          className="sp-footer-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Yuqoriga qaytish"
        >
          ↑
        </button>
      </footer>
    </div>
  );
}
