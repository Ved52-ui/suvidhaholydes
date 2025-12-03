// src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import Packages from "./components/Packages";

/* Smooth scroll helper */
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* HERO images - update these URLs to your preferred photos */
const HERO_IMAGES = [
  "https://www.khusitourandtravels.in/wp-content/uploads/2024/08/849.jpg",
  "https://images.unsplash.com/photo-1706277750070-038c259c2ab7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
  "https://wallpapercave.com/wp/wp12453534.jpg",
  "https://wallpapercave.com/wp/wp6782679.jpg",
  
];

/* NAVBAR (kept similar to your original) */
function Navbar() {
  return (
    <header className="nav">
      <div
        className="container nav-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="brand"
          style={{ cursor: "pointer", fontWeight: 800 }}
          onClick={() => scrollToId("hero")}
        >
          Suvidha Holydays Logo
        </div>

        <nav
          className="nav-links"
          aria-label="Main navigation"
          style={{
            display: "flex",
            gap: "1.4rem",
            alignItems: "center",
            fontSize: "0.92rem",
          }}
        >
          <button className="nav-link" onClick={() => scrollToId("hero")}>
            HOME
          </button>
          <button className="nav-link" onClick={() => scrollToId("packages")}>
            PACKAGES
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToId("destinations")}
          >
            DESTINATIONS
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToId("testimonials")}
          >
            REVIEWS
          </button>
          <button className="nav-link" onClick={() => scrollToId("contact")}>
            CONTACT
          </button>
          
        </nav>
      </div>
    </header>
  );
}

/* HERO slider */
function Hero() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const slideInterval = 3000; // 3s per slide

  // autoplay effect
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, slideInterval);

    return () => clearTimeout(timeoutRef.current);
  }, [index, isPaused]);

  const goTo = (i) => {
    setIndex(i % HERO_IMAGES.length);
  };
  const prev = () =>
    setIndex((i) => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  const next = () => setIndex((i) => (i + 1) % HERO_IMAGES.length);

  return (
    <section
      id="hero"
      className="section"
      aria-label="Hero"
      style={{
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
        height: "calc(100vh - 72px)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image layers (absolute) with fade transition */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={`hero-${i}`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center right",
              transition: "opacity 800ms ease-in-out, transform 900ms ease",
              opacity: i === index ? 1 : 0,
              transform: i === index ? "scale(1)" : "scale(1.02)",
              zIndex: i === index ? 0 : 0,
            }}
            draggable={false}
          />
        ))}

        {/* subtle dark gradient overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(7, 18, 34, 0.06), rgba(7,18,34,0.02))",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content container (above images) */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 24,
          alignItems: "center",
          padding: "1.25rem 1.25rem",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          <h1
            className="hero-title"
            style={{
              marginTop: 80,
              color: "var(--text)",
            }}
          >
            <div style={{ fontWeight: 650, color: "white" }}>
              Comfortable,
              <br />
              Safe And Memorable
              <br />
              Journeys...
              <br />
            </div>
            <br />
            <br />
          </h1>

          <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
            <button className="ep" onClick={() => scrollToId("packages")}>
              Explore Packages
            </button>

            <button className="ep" onClick={() => scrollToId("contact")}>
              Contact Us
            </button>
            <br />
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 18,
              alignItems: "center",
              color: "var(--muted)",
            }}
          ></div>
        </div>

        {/* Right column left intentionally (you had no content there earlier) */}
        <div />
      </div>

      {/* Controls: Prev / Next (visible on desktop) */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          background: "rgba(0,0,0,0.35)",
          border: "none",
          color: "white",
          padding: "10px 12px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          background: "rgba(0,0,0,0.35)",
          border: "none",
          color: "white",
          padding: "10px 12px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        ›
      </button>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 20,
          zIndex: 3,
          display: "flex",
          gap: 8,
        }}
        role="tablist"
        aria-label="Slide indicators"
      >
        {HERO_IMAGES.map((_, i) => (
          <button
            key={"dot-" + i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            style={{
              width: i === index ? 14 : 10,
              height: i === index ? 14 : 10,
              borderRadius: 99,
              border: "none",
              cursor: "pointer",
              background: i === index ? "white" : "rgba(255,255,255,0.6)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
              transition: "width 200ms ease, height 200ms ease, background 200ms",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function Destinations() {
  const items = [
    {
      name: "Shirdi Sai Baba Temple",
      img:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Shani Shingnapur",
      img:
        "https://tripxl.com/blog/wp-content/uploads/2025/03/Offer-Prayers-To-Lord-Shani.jpg",
    },
    {
      name: "Trimbakeshwar",
      img:
        "https://images.news18.com/ibnlive/uploads/2025/02/Trimbakeshwar-2025-02-838a584b3d51837483fab1e8f991e205.png",
    },
    {
      name: "Ellora Caves",
      img:
        "https://s7ap1.scene7.com/is/image/incredibleindia/ellora-caves-chhatrapati-sambhaji-nagar-maharashtra-attr-hero-5?qlt=82&ts=1727010646173",
    },
    {
      name: "Ajanta Caves",
      img:
        "https://aurangabadtourism.in/images/places-to-visit/header/ajanta-caves-aurangabad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },
    
    {
      name: "Aurangabad Fort",
      img:
        "https://aurangabadtourism.in/images/places-to-visit/header/devagiri-daulatabad-fort-aurangabad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },
    {
      name: "Hava Mahal Jaipur",
      img:
        "https://t3.ftcdn.net/jpg/02/16/44/20/360_F_216442060_oORACP7fDjwMhUITLLQy4RTNc0xGpJwU.jpg",
    },
     {
      name: "Munnar",
      img:
        "https://i.pinimg.com/736x/d5/21/ef/d521ef4294323f09573c26a5148d57df.jpg",
    },
     {
      name: "Kedarnath Temple",
      img:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Spiti Valley",
      img:
        "https://media1.thrillophilia.com/filestore/o20z6d5n3vku0sno1gg36iwo0qa2_1576928481_biking_in_spiti2.jpg",
    },

    {
      name: "Port Blair",
      img:
        "https://www.andamanislands.com/uploads/andamanislands/blog/main/64f16b405c643117_port-blair-cover-1.jpg",
    },

    {
      name: "Nainital",
      img:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/03/10153331/Places-to-visit-in-Nainital-FI--1600x900.jpg",
    },

    {
      name: "City Palace, Udaipur",
      img:
        "https://www.trawell.in/admin/images/upload/3070709Udaipur_City_Palace_Main.jpg",
    },

    {
      name: "Dharamshala , Himachal Pradesh",
      img:
        "https://t4.ftcdn.net/jpg/02/37/02/95/360_F_237029572_SVLXsoRYNZB8VFqo3dZ1QXuFXG6xIn5a.jpg",
    },

    {
      name: "Solang Valley",
      img:
        "https://images.unsplash.com/photo-1677820915325-d8ce3184c2a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYW5nJTIwdmFsbGV5fGVufDB8fDB8fHww",
    },
  ];

  return (
    <section id="destinations" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontWeight: 800, color: "var(--primary)" }}>
            Destinations
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 900 }}>
            Sacred places & heritage routes
          </h2>
          <p style={{ color: "var(--muted)" }}>
            Combine multiple destinations into one tailored package. Group
            discounts available.
          </p>
        </div>

        <div className="destinations-grid" style={styles.destinationsGrid}>
          {items.map((d) => (
            <article
              key={d.name}
              className="destination-card"
              style={{
                ...styles.destinationCard,
                backgroundImage: `url(${d.img})`,
              }}
            >
              <div style={styles.destinationOverlay} />
              <div style={styles.destinationContent}>
                <div style={styles.destinationName}>{d.name}</div>
                <div style={styles.destinationTag}>Popular route</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Map section: placed after destinations and before testimonials */
function MapSection() {
  return (
    <section
      id="map"
      className="section"
      aria-label="Map and contact"
      style={{ padding: "2.25rem 0" }}
    >
      <div className="container" style={{ display: "grid", gap: 24 }}>
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontWeight: 800, color: "var(--primary)" }}>Find Us</div>
          <h3 style={{ fontSize: 20, marginTop: 6 }}>Our office & meeting point</h3>
          <p style={{ color: "var(--muted)", marginTop: 6 }}>
            Visit us at our office to plan your next pilgrimage or call / email to book.
          </p>
        </div>

        <div style={styles.mapGrid}>
          <div style={styles.mapCard}>
            {/* Embedded Google Map iframe — update the src to a specific place if you want */}
            <iframe
              title="Suvidha Holydays Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3489.6175804129934!2d72.669788!3d23.050601000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAzJzAyLjIiTiA3MsKwNDAnMTEuMiJF!5e1!3m2!1sen!2sin!4v1764601481267!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 260 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />


          </div>

          <div style={styles.mapContact}>
            <h4 style={{ margin: 0, marginBottom: 8 , }}>Office</h4>

            <div style={{ marginBottom: 12, color: "var(--muted)" }}>
              <strong>Address:</strong>
              <div>107 1st Floor, MURTIDHAM COMPLEX, Raspan Cross Rd, opp. Gokul Party Plot, near Rajhans Cinema Pavilion Mall, New India Colony, Nikol, Ahmedabad,</div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <strong>Phone</strong>
              <div>
                <a href="tel:+919876543210" style={styles.contactLink}>
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <strong>Email</strong>
              <div>
                <a
                  href="mailto:info@suvidhaholydays.example"
                  style={styles.contactLink}
                >
                  info@suvidhaholydays.example
                </a>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <strong>Business Hours</strong>
              <div style={{ color: "var(--muted)", marginTop: 6 }}>
                Mon - Sat: 09:30 — 18:30
                <br />
                Sun: By appointment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Patel Family",
      text:
        "Our Shirdi trip was perfectly organized. Hotels, food & darshan timing — everything was smooth.",
      
    },
    {
      name: "Mishbah Shaikh",
      text: "Went with our society group — very well managed and punctual.",
      
    },
    {
      name: "Pradeep Singh",
      text: "Comfortable for kids and elders. Highly recommended.",
      
    },
    {
      name: "Keval Shah",
      text: "good service and nice experience.",
      
    },
    {
      name: "Akshay Jodhani",
      text: "perfect planning and execution of trip.",
      
    },
     {
      name: "Alpesh Mehta",
      text: "nice experience with suvidha holidays.",
      
    },
     {
      name: "Ashok Panchal",
      text: "my experience was good.",
      
    },

    {
      name: "Piyush Radadiya",
      text: "excellent service and good hospitality.",
      
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontWeight: 900, color: "var(--primary)" }}>Reviews</div>
          <h2 style={{ fontSize: 22, fontWeight: 500 }}>What devotees say</h2>
          <p style={{ color: "var(--muted)" }}>
            Real feedback from families and group travelers....<br></br>
          </p>
        </div>

        <div className="testimonials-grid" style={styles.testimonialsGrid}>
          {items.map((t) => (
            <article key={t.name} className="testimonial-card" style={styles.testimonialCard}>
              <div style={styles.testimonialStars}>★★★★★</div>
              <div style={styles.testimonialText}>“{t.text}”</div>
              <div style={styles.testimonialAuthor}>
                <div style={{ fontWeight: 800 }}>{t.name}</div>
                <div style={{ color: "var(--muted)", fontWeight: 600 }}>
                  {t.meta}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return <section id="contact" className="section" />;
}

/* Footer component (attractive with background image + overlay + columns) */
function Footer() {
  const bgImage =
    "https://wallpapercave.com/wp/wp11109428.jpg"; // change if you like

  return (
    <footer
      className="footer"
      style={{
        position: "relative",
        color: "white",
        marginTop: 24,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(6,23,46,0.65) 100%, rgba(6,23,46,0.9) 100%)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 2, padding: "48px 16px" }}>
        <div className="container" style={styles.footerGrid}>
          {/* About / Logo */}
          <div style={styles.footerColumn}>
            <div style={{ fontWeight: 900, fontSize: 20, marginBottom: 8 ,marginLeft:-90}}>
              Suvidha Holydays
            </div>
            <div style={{ color: "rgba(255,255,255,0.9)", marginBottom: 12 ,marginLeft:-90}}>
              Trusted pilgrimage & pilgrimage packages — comfortable travel,
              curated stays, smooth darshan scheduling.
            </div>

            <div style={{ display: "flex", gap: 30, marginTop: 45 }}>
              <a
                aria-label="Facebook"
                href="#"
                style={styles.socialIcon}
              >
                {/* FB icon (svg) */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.09 5.92 21.16 10.73 21.93v-6.92h-3.23v-2.98h3.23V9.41c0-3.2 1.9-4.97 4.81-4.97 1.39 0 2.84.25 2.84.25v3.12h-1.6c-1.58 0-2.07.98-2.07 1.99v2.37h3.53l-.56 2.98h-2.97v6.92c4.81-.77 8.87-4.84 8.87-9.86z"/>
                </svg>
              </a>

              <a aria-label="Instagram" href="#" style={styles.socialIcon}>
                {/* IG icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm6.5-.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 9.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8z"/>
                </svg>
              </a>

              <a aria-label="WhatsApp" href="#" style={styles.socialIcon}>
                {/* WA icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.37 0 .07 5.3.07 11.93c0 2.1.55 4.13 1.6 5.93L0 24l6.4-1.65c1.75 1 3.78 1.58 5.94 1.58 6.63 0 11.93-5.3 11.93-11.93 0-3.18-1.24-6.17-3.75-8.52zM12 21.5c-1.82 0-3.6-.47-5.12-1.36l-.36-.22-3.8.98.99-3.71-.23-.37A8.14 8.14 0 0 1 3.86 11.9C3.86 7 7.98 2.9 12.88 2.9c2.17 0 4.16.8 5.67 2.25 1.5 1.45 2.34 3.43 2.34 5.5 0 4.9-4.12 8.85-8.89 8.85z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div style={styles.footerColumn}>
            <div style={{ fontWeight: 800, marginBottom: 12 }}>Quick Links<br></br></div>
            <nav aria-label="footer quick links" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a onClick={() => scrollToId("hero")} style={styles.footerLink}>HOME</a>
              <a onClick={() => scrollToId("packages")} style={styles.footerLink}>PACKAGES</a>
              <a onClick={() => scrollToId("destinations")} style={styles.footerLink}>DESTINATIONS</a>
              <a onClick={() => scrollToId("testimonials")} style={styles.footerLink}>REVIEWS</a>
              <a onClick={() => scrollToId("contact")} style={styles.footerLink}>CONTACT</a>
            </nav>
          </div>

          {/* Contact info */}
          <div style={styles.footerColumn}>
            <div style={{ fontWeight: 800, marginBottom: 12 }}>Contact</div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Phone</div>
              <a href="tel:+919876543210" style={styles.footerContactLink}>+91 98765 43210</a>
            </div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Email</div>
              <a href="mailto:info@suvidhaholydays.example" style={styles.footerContactLink}>info@suvidhaholydays.example</a>
            </div>

            <div style={{ marginTop: 8 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Address</div>
              <div style={{ color: "rgba(255,255,255,0.9)" }}>
                Near Main Road, Shirdi, Maharashtra 423109
              </div>
            </div>
          </div>

          {/* Small map preview (clickable) */}
          
        </div>

        {/* copyright */}
        <div style={{ marginTop: 28, textAlign: "center", color: "rgba(255,255,255,0.75)" }}>
          © {new Date().getFullYear()} Suvidha Holydays...
        </div>
      </div>
    </footer>
  );
}

/* App */
export default function App() {
  return (
    <div>
      <Navbar />
      
      <Hero />
      <Packages />
      <Destinations />
      <MapSection />
      <Testimonials />
      <Contact />
      <Footer />

      
    </div>
  );
}

/* Inline style objects used across components */
const styles = {
  destinationsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  destinationCard: {
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    boxShadow: "0 6px 18px rgba(9,30,66,0.12)",
  },
  destinationOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(7,18,34,0.0) 10%, rgba(7,18,34,0.45) 100%)",
    zIndex: 0,
  },
  destinationContent: {
    position: "relative",
    zIndex: 2,
    padding: 14,
    color: "white",
    width: "100%",
  },
  destinationName: { fontWeight: 500, fontSize: 16 },
  destinationTag: {
    marginTop: 6,
    fontSize: 12,
    background: "rgba(255,255,255,0.12)",
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    color: "rgba(255,255,255,0.95)",
    fontWeight: 500,
  },

  mapGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: 16,
    alignItems: "stretch",
  },
  mapCard: {
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(9,30,66,0.12)",
    minHeight: 260,
  },
  mapContact: {
    padding: 16,
    borderRadius: 12,
    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
    color: "var(--text)",
    boxShadow: "0 8px 24px rgba(9,30,66,0.06)",
    minHeight: 260,
    width: "110%",
  },

  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  testimonialCard: {
    padding: 18,
    borderRadius: 12,
    background: "white",
    boxShadow: "0 8px 22px rgba(9,30,66,0.06)",
  },
  testimonialStars: {
    marginBottom: 8,
    color: "#FFB400",
    fontWeight: 800,
  },
  testimonialText: {
    color: "var(--muted)",
    marginBottom: 12,
  },
  testimonialAuthor: {
    marginTop: 6,
  },

  // footer
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 24,
    alignItems: "start",
  },
  footerColumn: {
    minWidth: 0,
  },
  socialIcon: {
    display: "flex",
    alignItems: "center",
    
    justifyContent: "center",
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 8,
    background: "rgba(255,255,255,0.06)",
    color: "white",
    textDecoration: "none",
  },
  footerLink: {
    color: "",
    textDecoration: "none",
    cursor: "pointer",
    fontWeight:400,
  },
  footerContactLink: {
    color: "#0ea5e9",
    textDecoration: "none",
    display: "inline-block",
    marginTop: 6,
  },
  footerLinkInline: {
    color: "rgba(255,255,255,0.95)",
    textDecoration: "underline",
    fontWeight: 200,
  },
  contactLink: {
    color: "#0ea5e9",
    textDecoration: "none",
  },
};
