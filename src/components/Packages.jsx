// src/components/Packages.jsx
import React, { useState, useEffect } from "react";
import { justdialPackages } from "../data/justdialPackages";

/**
 * Packages component — improved balanced modal & consistent day cards.
 *
 * Uses CSS classes in src/index.css for consistent layout/typography.
 * Removes WhatsApp & Book buttons (per request).
 * Makes "View More" button prominent and consistent.
 */

export default function Packages() {
  const [activePkg, setActivePkg] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // ensure scroll is disabled when modal is open
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const openPkg = (pkg) => {
    setActivePkg(pkg);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActivePkg(null);
  };

  return (
    <section id="packages" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Tour Packages</div>
          <h2 className="section-title">Popular Domestic Packages — Suvidha Turism</h2>
          <p className="section-subtitle">
            Click <strong>View More</strong> to see places to visit and a clear day-by-day itinerary.
          </p>
        </div>

        <div className="packages-grid" style={{ marginTop: 8 }}>
          {justdialPackages.map((p) => (
            <article key={p.id} className="package-card" aria-labelledby={`pkg-${p.id}-title`}>
              <div
                className="package-media"
                style={{ backgroundImage: `url(${p.image})` }}
                role="img"
                aria-label={p.title}
              />

              <div className="package-body">
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ flex: 1 }}>
                    <div id={`pkg-${p.id}-title`} className="package-title">{p.title}</div>
                    <div className="package-excerpt">{p.excerpt}</div>
                  </div>
                </div>

                <div className="package-footer">
                  <div>
                    <div style={{ fontSize: 12, color: "var(--muted-2)" }}>Starting</div>
                    <div className="package-price">{p.price}</div>
                  </div>

                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <button
                      className="view-more-btn"
                      onClick={() => openPkg(p)}
                      aria-expanded={open && activePkg?.id === p.id}
                      aria-controls="package-modal"
                    >
                      View More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 4 }}>
                        <path d="M5 12h14" stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5l7 7-7 7" stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && activePkg && (
        <div className="modal-overlay" role="dialog" aria-modal="true" id="package-modal">
          <div className="modal-window" role="document">
            {/* Left: image */}
            <div className="modal-left" aria-hidden="true">
              <img src={activePkg.image} alt={activePkg.title} />
              <div className="chip">From {activePkg.from || "Multiple cities"}</div>
            </div>

            {/* Right: content */}
            <div className="modal-right">
              <div className="modal-title-row">
                <div>
                  <div className="modal-title">{activePkg.title}</div>
                  <div style={{ color: "var(--muted-2)", marginTop: 6, fontSize: 13 }}>
                    {activePkg.includes || ""}
                  </div>
                </div>

                <div className="modal-badges">
                  <div className="badge">{activePkg.days || "Varies"}</div>
                  <div className="badge">{activePkg.price}</div>
                </div>
              </div>

              <div style={{ color: "#374151", marginTop: 6 }}>{activePkg.excerpt}</div>

              {/* places */}
              <div style={{ marginTop: 12 }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Places to visit</div>
                <div className="places-wrap">
                  {(activePkg.places || []).map((pl) => (
                    <div key={pl} className="place-chip">📍 {pl}</div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div style={{ marginTop: 12 }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Day-wise itinerary</div>

                <div className="itinerary-list" tabIndex={0}>
                  {(activePkg.itinerary || []).map((d, idx) => (
                    <div key={`${d.day}-${idx}`} className="day-card">
                      <div className="day-indicator">
                        <div className="day-num">{d.day}</div>
                        <div className="day-title">{d.title}</div>
                      </div>

                      <div className="day-details">
                        <div style={{ fontWeight: 700, marginBottom: 6 }}>{d.title}</div>
                        <div style={{ color: "#374151" }}>{d.details}</div>
                      </div>
                    </div>
                  ))}

                  {(!activePkg.itinerary || activePkg.itinerary.length === 0) && (
                    <div style={{ color: "var(--muted-2)" }}>
                      Detailed itinerary not available. Contact us for the exact day-wise plan.
                    </div>
                  )}
                </div>
              </div>

              {/* Footer: only Close button as requested */}
              <div style={{ display: "flex", alignItems: "center", marginTop: 12 }}>
                <button className="modal-close" onClick={() => closeModal()}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
