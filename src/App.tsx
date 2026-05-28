import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import { Footer } from "@components/layout/Footer";
import { HeroSection } from "@components/sections/HeroSection";
import { Button, Card, MusicPlayer, Preloader } from "@components/ui";
import { useCountdown } from "@hooks/useCountdown";
import { WEDDINGS } from "@/data/wedding";
import "./App.css";

const TEXT = {
  couple: "Sarvar & Shohida",

  story: {
    title: "Bizning Sevgi Hikoyamiz",
    subtitle: "Yulduzlarda yozilgan sayohat",
    body: "Hayot gilamida ikkita ruh umumiy orzular va mehr-muhabbat lahzalari go'zalligida bir-birini topdi. Muloyim bog'lanish sifatida boshlangan narsa so'zlar bilan ifodalab bo'lmaydigan darajada chuqur muhabbatga aylandi. Kulgu va ko'z yoshlari orqali, sokin oqshomlar va quvonchli bayramlar davomida biz uyning joy emas, balki bir-birimizning bag'rimizda topadigan his ekanligini angladik. Bugun biz birga turamiz, qo'lma-qo'l, yurakdan yurakka, abadiy va har doim hikoyamizning keyingi bobini yozishga tayyormiz.",
  },

  events: {
    title: "Tadbir Tafsilotlari",
    subtitle: "Biz bilan nishonlashga qo'shiling",
    cardTitle: "To'y",
  },

  countdown: {
    title: "Sanab Kutmoqdamiz",
    subtitle: '"Ha" deygunga qadar',
    days: "Kun",
    hours: "Soat",
    minutes: "Daqiqa",
    seconds: "Soniya",
  },

  location: {
    title: "Manzil",
    subtitle: "Bizni shu yerda toping",
    getDirections: "Yo'nalish olish",
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  const visibleWeddings = WEDDINGS.filter((w) => w.city === "Urganch");
  const now = new Date();
  const countdownTarget =
    visibleWeddings.find((w) => new Date(w.datetime) > now) ??
    visibleWeddings[visibleWeddings.length - 1];
  const timeLeft = useCountdown(new Date(countdownTarget.datetime));

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* <Header /> */}
      <MusicPlayer />

      <main>
        {/* Hero Section */}
        <HeroSection
          date={visibleWeddings[0].date}
          venue={visibleWeddings[0].venue}
        />

        {/* Love Story Section */}
        <section id="story" className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>{TEXT.story.title}</h2>
              <p className="section-subtitle">{TEXT.story.subtitle}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="story-content"
            >
              <Card variant="elevated" className="story-card-single">
                <p className="story-romantic-text">{TEXT.story.body}</p>
                <div className="story-signature">
                  <Heart size={32} className="story-heart" />
                  <p className="text-script">{TEXT.couple}</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Event Details Section */}
        <section id="events" className="section bg-blush">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>{TEXT.events.title}</h2>
              <p className="section-subtitle">{TEXT.events.subtitle}</p>
            </motion.div>

            <div className="events-grid">
              {visibleWeddings.map((wedding, index) => (
                <motion.div
                  key={wedding.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card variant="elevated" className="event-card">
                    <h3>
                      {TEXT.events.cardTitle} — {wedding.city}
                    </h3>
                    <div className="event-details">
                      <div className="event-detail">
                        <Calendar size={20} />
                        <span>{wedding.date}</span>
                      </div>
                      <div className="event-detail">
                        <Clock size={20} />
                        <span>{wedding.time}</span>
                      </div>
                      <div className="event-detail">
                        <MapPin size={20} />
                        <span>
                          {wedding.venue}
                          <br />
                          {wedding.address}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="section countdown-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>{TEXT.countdown.title}</h2>
              <p className="section-subtitle">
                {TEXT.countdown.subtitle} — {countdownTarget.city}
              </p>
            </motion.div>

            <div className="countdown-grid">
              {[
                { value: timeLeft.days, label: TEXT.countdown.days },
                { value: timeLeft.hours, label: TEXT.countdown.hours },
                { value: timeLeft.minutes, label: TEXT.countdown.minutes },
                { value: timeLeft.seconds, label: TEXT.countdown.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="countdown-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="countdown-value">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="countdown-label">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="section bg-blush">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>{TEXT.location.title}</h2>
              <p className="section-subtitle">{TEXT.location.subtitle}</p>
            </motion.div>

            <div className="events-grid">
              {visibleWeddings.map((wedding, index) => (
                <motion.div
                  key={wedding.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card variant="elevated" className="map-card">
                    <div className="map-placeholder">
                      <MapPin size={64} />
                      <h3>{wedding.venue}</h3>
                      <p>{wedding.address}</p>
                      <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
                        {wedding.date}
                      </p>
                      <Button
                        variant="primary"
                        onClick={() => window.open(wedding.mapLink, "_blank")}
                      >
                        {TEXT.location.getDirections}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
