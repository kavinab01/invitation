'use client';

import { useEffect, useState } from 'react';
import { CalendarDays, Clock3, MapPin, ExternalLink, ArrowDown, Heart, Flower2, Sparkles } from 'lucide-react';

const weddingDate = new Date('2026-11-22T10:30:00+05:30').getTime();
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Thillai+Sivam+Marriage+Hall%2C+Tiruppalai%2C+Madurai+625014';

function Ornament() {
  return <div className="ornament" aria-hidden="true"><span />✥<span /></div>;
}

function Countdown() {
  const [left, setLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, weddingDate - Date.now());
      setLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor(diff / 3600000) % 24,
        minutes: Math.floor(diff / 60000) % 60,
        seconds: Math.floor(diff / 1000) % 60,
      });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="countdown-grid">
    {Object.entries(left).map(([label, value]) => <div className="count-box" key={label}>
      <strong>{String(value).padStart(2, '0')}</strong><span>{label}</span>
    </div>)}
  </div>;
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main className="site-shell">
    <section className="hero" id="home">
      <div className="hero-shade" />
      <div className="garland garland-left">✿　✿　✿　✿　✿</div>
      <div className="garland garland-right">✿　✿　✿　✿　✿</div>
      <div className="hero-frame">
        <div className="ganesha" aria-label="Ganesha symbol">ॐ</div>
        <p className="tamil-blessing">ஸ்ரீ கணேசாய நமःை</p>
        <Ornament />
        <p className="hero-kicker">திருமண அழைப்பிதழ்</p>
        <p className="english-kicker">W E D D I N G&nbsp; I N V I T A T I O N</p>
        <div className="couple-names"><h1>Kavin M</h1><div className="weds"><span />weds<span /></div><h1>Sivakami K</h1></div>
        <Ornament />
        <p className="hero-date"><CalendarDays size={17} /> 21 &amp; 22 November 2026 <i /> <MapPin size={17} /> Madurai</p>
        <button className="explore-button" onClick={() => { setEntered(true); document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' }); }}>
          {entered ? 'View celebration' : 'Explore invitation'} <ArrowDown size={16} />
        </button>
        <p className="hero-mantra">ஓம் நமசிவாய</p>
      </div>
      <div className="hero-bottom-ornament">❧　❋　❧</div>
    </section>

    <section className="count-section paper-section" id="countdown">
      <div className="hanging-bells" aria-hidden="true">♧　♧　♧</div>
      <p className="section-kicker">THE AUSPICIOUS DAY APPROACHES</p>
      <h2>Countdown to our wedding</h2>
      <Ornament />
      <Countdown />
      <p className="count-caption">SUNDAY, 22 NOVEMBER 2026 <b>✥</b> 10:30 AM ONWARDS</p>
    </section>

    <section className="events-section paper-section">
      <p className="section-kicker">TWO DAYS OF JOY</p>
      <h2>Wedding celebrations</h2>
      <Ornament />
      <p className="section-intro">With the blessings of our elders, we invite you to celebrate with us.</p>
      <div className="event-grid">
        <article className="event-card reveal">
          <div className="event-icon">❀</div><p className="event-label">THE EVENING BEFORE</p><h3>Reception</h3>
          <p className="event-date">Saturday, 21st November 2026</p>
          <p className="event-time"><Clock3 size={17} /> 7:00 PM onwards</p>
          <div className="card-divider">✥</div><p className="event-note">An evening of warmth, smiles<br />and celebration.</p>
        </article>
        <article className="event-card event-card-olive reveal">
          <div className="event-icon">♧</div><p className="event-label">THE AUSPICIOUS MOMENT</p><h3>Wedding</h3>
          <p className="event-date">Sunday, 22nd November 2026</p>
          <p className="event-time"><Clock3 size={17} /> 10:30 AM onwards</p>
          <div className="card-divider">✥</div><p className="event-note">As two hearts and families<br />come together as one.</p>
        </article>
      </div>
    </section>

    <section className="venue-section">
      <div className="venue-inner reveal">
        <p className="section-kicker">CELEBRATE WITH US</p><h2>Venue</h2><Ornament />
        <MapPin className="venue-pin" size={30} />
        <h3>Thillai Sivam Marriage Hall A/C</h3>
        <p className="venue-address">Natham Rd, Opp: Thiruppalai EB sub-station,<br />Tagore Nagar, Bharat Nagar, Tiruppalai,<br />Madurai, Tamil Nadu 625014</p>
        <a className="map-button" href={mapUrl} target="_blank" rel="noreferrer">View on Google Maps <ExternalLink size={15} /></a>
      </div>
      <div className="venue-side-art" aria-hidden="true">❧　♘　❧</div>
    </section>

    <footer className="footer paper-section">
      <Flower2 className="footer-flower" size={34} />
      <p className="footer-blessing">Your presence and blessings are our greatest gift</p>
      <h2>Kavin <span>&amp;</span> Sivakami</h2>
      <p className="footer-date">21 — 22 NOVEMBER 2026 <i>·</i> MADURAI</p>
      <Ornament />
      <p className="compliments">WITH BEST COMPLIMENTS</p><p className="dora">Dora</p>
      <p className="footer-mantra">நன்றி · வணக்கம்</p>
      <Heart size={14} className="footer-heart" />
    </footer>
  </main>;
}
