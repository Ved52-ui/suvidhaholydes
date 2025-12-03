import React from "react";

// About.jsx
// Long, detailed About page for Suvidha Holydays
// Uses Tailwind CSS utility classes for styling (project already uses Tailwind per canvas guidance)

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=60"
            alt="pilgrimage hero"
            className="w-full h-full object-cover opacity-60"
            aria-hidden
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-4xl bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/30">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900">
              About Suvidha Holydays
            </h1>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              Trusted travel & pilgrimage specialists based in Ahmedabad, Gujarat —
              offering domestic tours, international packages, and comfortable tempo
              traveller rentals. We handle end-to-end planning so families and
              groups can travel safely and memorably.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-600 text-white font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition"
              >
                Contact Us
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-sky-200 bg-white text-sky-700 font-medium hover:bg-sky-50 transition"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core summary grid */}
      <section className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-sky-700 font-bold">Nature of Business</h3>
            <p className="mt-2 text-sm text-slate-600">Service Provider &amp; Others</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-sky-700 font-bold">Legal Status</h3>
            <p className="mt-2 text-sm text-slate-600">Proprietorship</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-sky-700 font-bold">Annual Turnover</h3>
            <p className="mt-2 text-sm text-slate-600">₹0 - ₹40 L</p>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-sky-700 font-bold">GST Registration Date</h3>
            <p className="mt-2 text-sm text-slate-600">29-Dec-2017</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-sky-700 font-bold">Total Employees</h3>
            <p className="mt-2 text-sm text-slate-600">Up to 10 people</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-sky-700 font-bold">GST Number</h3>
            <p className="mt-2 text-sm text-slate-600 font-mono">24ASEPK3864E1ZW</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-sky-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-sky-900">Our Mission</h2>
              <p className="mt-4 text-slate-700"> 
                To make pilgrimage and travel planning effortless and memorable by
                providing tailored itineraries, comfortable transport and
                trustworthy local support. We design journeys that are safe,
                culturally rich and suited for families and groups of all ages.
              </p>

              <h2 className="mt-8 text-3xl font-extrabold text-sky-900">Our Vision</h2>
              <p className="mt-4 text-slate-700">
                Be the most reliable regional travel partner for spiritual,
                heritage and leisure travel — known for punctuality, care and
                exceptional logistics.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition transform hover:scale-[1.01] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60"
                  alt="team meeting"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg">Safety & Care</h3>
                  <p className="mt-2 text-sm text-slate-600">We prioritise health, senior-friendly transport and clear communication.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition transform hover:scale-[1.01] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=60"
                  alt="buses and tempo travellers"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg">Comfortable Transport</h3>
                  <p className="mt-2 text-sm text-slate-600">Well-maintained tempo travellers & vehicles for group travel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services (detailed cards) */}
      <section id="services" className="container mx-auto px-6 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-sky-900">What we do</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Comprehensive travel offerings built for groups and family pilgrimages.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Domestic Tour Packages",
              desc: "Curated domestic routes including Shirdi, Ajanta & Ellora, Trimbakeshwar and hill stations.",
              img: "https://images.unsplash.com/photo-1505765050523-0a9f2f5f8b66?auto=format&fit=crop&w=1200&q=60",
            },
            {
              title: "International Packages",
              desc: "We arrange international itineraries with trusted partners — visas, flights, hotels and transfers.",
              img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=60",
            },
            {
              title: "Tempo Traveller Hire",
              desc: "Comfortable tempo travellers available on hire with driver, for one-day trips or multi-day pilgrimages.",
              img: "https://images.unsplash.com/photo-1541872703-e3f1a9f3b4d0?auto=format&fit=crop&w=1200&q=60",
            },
          ].map((s) => (
            <article key={s.title} className="bg-white rounded-2xl shadow p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-xl h-44">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">{s.title}</div>
              </div>

              <p className="mt-4 text-slate-600">{s.desc}</p>

              <div className="mt-4 flex items-center gap-3">
                <a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-600 text-white font-medium hover:bg-sky-700 transition transform hover:-translate-y-0.5">Book Now</a>
                <a className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition">Know More</a>
              </div>
            </article>
          ))}
        </div>

        {/* long descriptive paragraphs to make the page very long as requested */}
        <div className="mt-10 prose max-w-none text-slate-700">
          <h3>Our approach to planning</h3>
          <p>
            Each itinerary is crafted by travel experts who combine deep local knowledge with logistics experience.
            We analyze travel time, darshan windows, dining options suitable for groups and comfortable rest stops.
            For religious tours we respect temple rules, dress codes and required bookings.
          </p>

          <h3>Quality assurance & local partners</h3>
          <p>
            Suvidha Holydays works with a network of hotels, guest houses and tour guides who meet our quality standards.
            All partners are vetted and briefed about group requirements — especially for senior travellers and children.
          </p>

          <h3>Custom group itineraries</h3>
          <p>
            We frequently design bespoke programmes — multi-destination cultural routes, group darshan plans and family-friendly stays.
            Discounts and upgrades are offered for repeated travellers and large groups.
          </p>

          <h3>Logistics and safety protocols</h3>
          <p>
            Vehicles undergo scheduled maintenance; drivers are experienced and background-checked. We provide emergency
            contact numbers and on-trip coordination for seamless communication.
          </p>

          <h3>Responsible tourism</h3>
          <p>
            Our operations emphasize minimal environmental impact, support local economies and respect local traditions.
            We encourage responsible photography, waste reduction, and support local artisans by including curated shopping stops.
          </p>

          <h3>Pricing & payment</h3>
          <p>
            Transparent pricing — no hidden charges. We accept bank transfers, UPI and offline payment methods suitable for
            groups. Detailed invoices with GST breakdown are provided for corporate or group settlements.
          </p>
        </div>
      </section>

      {/* Timeline / History (long) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-sky-900 text-center">Our Journey</h2>

          <div className="mt-10 space-y-8">
            {[{
              year: '2016',
              title: 'Small beginnings',
              text: 'Founded in Ahmedabad with a passion for organizing local pilgrimage groups and family trips.'
            },{
              year: '2017',
              title: 'GST Registered',
              text: 'Officially registered under GST (24ASEPK3864E1ZW) on 29-Dec-2017 and began structured operations.'
            },{
              year: '2019',
              title: 'Fleet expansion',
              text: 'Expanded our tempo traveller fleet to better serve group travel needs across Gujarat and neighbouring states.'
            },{
              year: '2021',
              title: 'Digitising bookings',
              text: 'Introduced streamlined booking confirmations and contactless coordination to improve guest experience.'
            },{
              year: '2024',
              title: 'Stronger partnerships',
              text: 'We strengthened relationships with hotels and pilgrimage managers to get preferential slots for devotees.'
            }].map((t,i)=> (
              <div key={t.year} className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">{t.year}</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{t.title} <span className="text-sm text-slate-500 ml-2">({t.year})</span></h4>
                  <p className="mt-2 text-slate-600">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet showcase */}
      <section className="container mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-sky-900 text-center">Our Fleet</h2>
        <p className="text-center text-slate-600 mt-2">Comfortable vehicles maintained to high safety standards.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {["Tempo Traveller (12-20 seater)", "Mini Bus (24-32 seater)", "Sedan / Innova for small groups"].map((f)=> (
            <div key={f} className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="h-44 rounded-lg overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1582719478179-4f9f8b0b8b10?auto=format&fit=crop&w=1200&q=60" alt={f} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 font-bold">{f}</h3>
              <p className="mt-2 text-sm text-slate-600">Experienced drivers, regular servicing and comfortable seating for long journeys.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-sky-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-sky-900 text-center">Meet the Team</h2>
          <p className="text-center text-slate-600 mt-2">Small, dedicated team working behind the scenes.</p>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {name: 'Ramesh Patel', role: 'Founder & Operations'},
              {name: 'Sonal Desai', role: 'Bookings & Groups'},
              {name: 'Driver Team', role: 'Experienced Drivers'},
            ].map((p)=> (
              <div key={p.name} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="h-40 rounded-lg overflow-hidden bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60" alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="mt-4 font-bold">{p.name}</h4>
                <div className="text-sm text-slate-600">{p.role}</div>
                <p className="mt-3 text-sm text-slate-600">Contactable for itinerary planning and support during travel.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Legal (long) */}
      <section className="container mx-auto px-6 py-14">
        <h2 className="text-2xl font-extrabold text-sky-900">Legal & Compliance</h2>
        <p className="mt-4 text-slate-700">
          Suvidha Holydays operates as a proprietorship and complies with regional laws for transportation and tourism.
          We maintain records for GST and provide legally compliant invoices. Below are key details:
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white p-6 shadow">
            <h4 className="font-semibold">GST Details</h4>
            <p className="mt-2 text-sm text-slate-600">GST Number: <span className="font-mono">24ASEPK3864E1ZW</span></p>
            <p className="mt-1 text-sm text-slate-600">GST Registration Date: 29-Dec-2017</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h4 className="font-semibold">Company Info</h4>
            <p className="mt-2 text-sm text-slate-600">Nature: Service Provider and Others</p>
            <p className="mt-1 text-sm text-slate-600">Legal Status: Proprietorship</p>
            <p className="mt-1 text-sm text-slate-600">Annual Turnover Band: ₹0 - ₹40 L</p>
          </div>
        </div>

        <div className="mt-6 prose text-slate-700">
          <h3>Records & transparency</h3>
          <p>
            We maintain clean bookkeeping and will provide any required documents for corporate travel settlements. On request
            we share booking confirmations, hotel vouchers and vehicle allocation sheets to support reimbursement.
          </p>
        </div>
      </section>

      {/* FAQs long list */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-sky-900 text-center">Frequently Asked Questions</h2>

          <div className="mt-8 space-y-4 max-w-4xl mx-auto">
            {[{
              q: 'How do I book a group pilgrimage?',
              a: 'Call or email our bookings team with dates, headcount and preferred hotels. We will draft a quote and itinerary; once agreed, a small advance confirms the group.'
            },{
              q: 'Do you arrange darshan timings and priority slots?',
              a: 'Where possible, yes. Many major pilgrimage sites allow group slot bookings — we coordinate these well in advance.'
            },{
              q: 'What safety measures do you follow?',
              a: 'Regular vehicle maintenance, experienced drivers, emergency helpline, clear SOPs for medical issues and senior-friendly rest planning.'
            },{
              q: 'Can you handle special dietary or medical needs?',
              a: 'Yes. Please inform us while booking and we will coordinate meals and rest breaks accordingly.'
            },{
              q: 'What are your payment options?',
              a: 'Bank transfer, UPI and offline payment. GST-compliant invoices are issued for every booking.'
            }].map((f)=> (
              <details key={f.q} className="group p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition">
                <summary className="font-semibold cursor-pointer list-none">{f.q}</summary>
                <div className="mt-2 text-slate-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials CTA long */}
      <section className="py-12 bg-sky-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-extrabold text-sky-900">Hear from our travellers</h3>
            <p className="mt-3 text-slate-600">Families and groups regularly praise our punctuality and planning. Read a few stories below.</p>

            <div className="mt-6 space-y-4 text-left">
              <blockquote className="p-4 bg-slate-50 rounded-md border-l-4 border-sky-600">
                “Our Shirdi trip was perfectly organized. Hotels, food & darshan timing — everything was smooth.” — Patel Family
              </blockquote>

              <blockquote className="p-4 bg-slate-50 rounded-md border-l-4 border-sky-600">
                “Went with our society group — very well managed and punctual.” — Mishbah Shaikh
              </blockquote>

              <div className="mt-4 text-right">
                <a className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-md font-medium hover:bg-sky-700 transition">Read more reviews</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section id="contact" className="py-14">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-extrabold text-sky-900">Get in touch</h2>
            <p className="mt-2 text-slate-600">Call or message us to start planning your next pilgrimage or group tour.</p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="text-sm font-semibold text-slate-700">Phone</div>
                <a href="tel:+919876543210" className="text-sky-600 font-medium">+91 98765 43210</a>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-700">Email</div>
                <a href="mailto:info@suvidhaholydays.example" className="text-sky-600 font-medium">info@suvidhaholydays.example</a>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-700">Address</div>
                <div className="text-slate-600">Near Main Road, Shirdi - 423109, Maharashtra</div>
              </div>

              <div className="pt-4">
                <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition">Call Now</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow">
            <iframe
              title="Suvidha Holydays map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3489.6175804129934!2d72.669788!3d23.050601000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAzJzAyLjIiTiA3MsKwNDAnMTEuMiJF!5e1!3m2!1sen!2sin!4v1764601481267!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: 360, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="bg-sky-900 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-lg">Suvidha Holydays</div>
            <div className="text-sm text-sky-200">Trusted pilgrimage & travel services</div>
          </div>

          <div className="text-sm text-sky-300">
            © {new Date().getFullYear()} Suvidha Holydays — GST: <span className="font-mono">24ASEPK3864E1ZW</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
