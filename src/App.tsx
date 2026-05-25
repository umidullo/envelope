import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import { Footer } from "@components/layout/Footer";
import { HeroSection } from "@components/sections/HeroSection";
import { Button, Card, Preloader } from "@components/ui";
import { useCountdown } from "@hooks/useCountdown";
import "./App.css";

const TEXT = {
  couple: "Sarvar & Shohida",
  time: "2026-06-20T18:00:00",

  story: {
    title: "Bizning Sevgi Hikoyamiz",
    subtitle: "Yulduzlarda yozilgan sayohat",
    body: "Hayot gilamida ikkita ruh umumiy orzular va mehr-muhabbat lahzalari go'zalligida bir-birini topdi. Muloyim bog'lanish sifatida boshlangan narsa so'zlar bilan ifodalab bo'lmaydigan darajada chuqur muhabbatga aylandi. Kulgu va ko'z yoshlari orqali, sokin oqshomlar va quvonchli bayramlar davomida biz uyning joy emas, balki bir-birimizning bag'rimizda topadigan his ekanligini angladik. Bugun biz birga turamiz, qo'lma-qo'l, yurakdan yurakka, abadiy va har doim hikoyamizning keyingi bobini yozishga tayyormiz.",
  },

  events: {
    title: "Tadbir Tafsilotlari",
    subtitle: "Biz bilan nishonlashga qo'shiling",
    cardTitle: "To'y",
    date: "20-iyun, 2026",
    time: "18:00",
    venue: "Omad Restorani, Urganch",
    address: "Saxovat MFY, Amudaryo ko'chasi, 3",
    addToCalendar: "Taqvimga qo'shish",
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
    venue: "Omad Restorani, Urganch",
    address: "Saxovat MFY, Amudaryo ko'chasi, 3",
    getDirections: "Yo'nalish olish",
    link: "https://yandex.ru/maps/-/CPsTyKmD",
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling when preloading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  const weddingDate = new Date(TEXT.time);
  const timeLeft = useCountdown(weddingDate);

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* <Header /> */}

      <main>
        {/* Hero Section */}
        <HeroSection />

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

            <div className="events-grid events-grid-single">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="event-card">
                  <h3>{TEXT.events.cardTitle}</h3>
                  <div className="event-details">
                    <div className="event-detail">
                      <Calendar size={20} />
                      <span>{TEXT.events.date}</span>
                    </div>
                    <div className="event-detail">
                      <Clock size={20} />
                      <span>{TEXT.events.time}</span>
                    </div>
                    <div className="event-detail">
                      <MapPin size={20} />
                      <span>
                        {TEXT.events.venue}
                        <br />
                        {TEXT.events.address}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
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
              <p className="section-subtitle">{TEXT.countdown.subtitle}</p>
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

        {/* Gallery Section */}
        {/* <section id="gallery" className="section bg-white">
          <div className="container" style={{ padding: '0 20px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Our Memories</h2>
              <p className="section-subtitle">Moments we treasure</p>
            </motion.div>

            <div className="reels-container">
              {[
                { src: new URL('./assets/gallary/az1.JPG', import.meta.url).href },
                { src: new URL('./assets/gallary/az2.JPEG', import.meta.url).href },
                { src: new URL('./assets/gallary/az3.jpg', import.meta.url).href },
                { src: new URL('./assets/gallary/az4.JPEG', import.meta.url).href },
                { src: new URL('./assets/gallary/az5.JPG', import.meta.url).href },
                { src: new URL('./assets/gallary/az6.JPG', import.meta.url).href }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="reel-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <img
                    src={item.src}
                    alt={`Wedding memory ${index + 1}`}
                    className="reel-image"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

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

            <Card variant="elevated" className="map-card">
              <div className="map-placeholder">
                <MapPin size={64} />
                <h3>{TEXT.location.venue}</h3>
                <p>{TEXT.location.address}</p>
                <Button
                  variant="primary"
                  onClick={() => window.open(TEXT.location.link, "_blank")}
                >
                  {TEXT.location.getDirections}
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* RSVP Section */}
        {/* <section id="rsvp" className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>RSVP</h2>
              <p className="section-subtitle">We hope you can join us</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rsvp-content"
            >
              <Card variant="elevated" className="rsvp-card">
                <p className="rsvp-text">
                  Your presence would mean the world to us. Please let us know
                  if you'll be able to attend our special day.
                </p>
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => setIsRSVPModalOpen(true)}
                >
                  Confirm Your Attendance
                </Button>
              </Card>
            </motion.div>
          </div>
        </section> */}

        {/* Gift Registry Section */}
        {/* <section id="registry" className="section bg-blush">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Gift Registry</h2>
              <p className="section-subtitle">
                Your love and presence are gift enough
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="registry-content">
                <p className="registry-text">
                  If you wish to honor us with a gift, a contribution toward our
                  future together would be greatly appreciated.
                </p>

                <div className="credit-card">
                  <div className="card-background"></div>
                  <div className="card-content">
                    <div className="card-chip">
                      <div className="chip-line"></div>
                      <div className="chip-line"></div>
                      <div className="chip-line"></div>
                      <div className="chip-line"></div>
                      <div className="chip-main"></div>
                    </div>

                    <div className="card-number">
                      <div className="number-group">8600</div>
                      <div className="number-group">5729</div>
                      <div className="number-group">6546</div>
                      <div className="number-group">6266</div>
                    </div>

                    <div className="card-holder">
                      <div className="card-label">CARD HOLDER</div>
                      <div className="card-name">Abdug'ofur</div>
                    </div>

                    <div className="card-logo">UZCARD</div>
                  </div>
                </div>

                <button
                  className="copy-card-button"
                  onClick={() => copyToClipboard("8600 5729 6546 6266", "card")}
                >
                  {copiedText === "card" ? (
                    <>
                      <CheckCircle2 size={20} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={20} />
                      <span>Copy Card Number</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </section> */}
      </main>

      <Footer />

      {/* RSVP Modal */}
      {/* <Modal
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
        title="RSVP"
      >
        <form onSubmit={handleRSVPSubmit} className="rsvp-form">
          <Input
            name="name"
            label="Full Name"
            placeholder="Your name"
            required
            fullWidth
          />

          <Select
            name="attend"
            label="Will you attend?"
            fullWidth
            required
            options={[
              { value: "", label: "Select an option" },
              { value: "yes", label: "Yes, I will attend" },
              { value: "no", label: "No, I cannot attend" },
              { value: "maybe", label: "Maybe" },
            ]}
          />

          <Input
            name="comment"
            label="Dietary Restrictions / Comments"
            placeholder="Any dietary requirements?"
            fullWidth
          />

          <div style={{ marginTop: "24px" }}>
            <Button type="submit" variant="primary" size="large">
              Submit RSVP
            </Button>
          </div>
        </form>
      </Modal> */}

      {/* Success Modal */}
      {/* <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Thank You!"
      >
        <div className="success-content">
          <Heart size={64} className="success-icon" />
          <p>
            Your RSVP has been received! We can't wait to celebrate with you.
          </p>
          <Button
            variant="primary"
            onClick={() => setIsSuccessModalOpen(false)}
          >
            Close
          </Button>
        </div>
      </Modal> */}
    </div>
  );
}

export default App;
