'use client';

import { useEffect, useState } from 'react';
import { MapPin, CalendarDays, Clock3, Heart, Flower2, ArrowDown, ExternalLink } from 'lucide-react';

const weddingDate = new Date('2026-11-22T10:30:00+05:30').getTime();
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Thillai+Sivam+Marriage+Hall+Madurai';

function TempleArt() {
  return <svg className="temple-art" viewBox="0 0 900 570" role="img" aria-label="Decorative South Indian temple gopuram illustration" preserveAspectRatio="xMidYMax meet">
    <defs><linearGradient id="gold" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#f5d995"/><stop offset="1" stopColor="#9c6829"/></linearGradient></defs>
    <g fill="none" stroke="url(#gold)" strokeWidth="2" opacity=".76">
      <path d="M450 38 410 94h80L450 38Z"/><path d="M392 98h116l-12 30h-92l-12-30Z"/>
      <path d="M375 130h150l-12 32H387l-12-32Z"/><path d="M356 164h188l-14 34H370l-14-34Z"/>
      <path d="M335 200h230l-16 35H351l-16-35Z"/><path d="M310 237h280l-18 38H328l-18-38Z"/>
      <path d="M285 277h330l-22 40H307l-22-40Z"/><path d="M260 319h380l-25 43H285l-25-43Z"/>
      <path d="M230 364h440l-28 48H258l-28-48Z"/><path d="M200 414h500v30H200z"/>
      <path d="M170 447h560v22H170z"/><path d="M130 474h640v25H130z"/>
      <path d="M95 504h710v24H95z"/><path d="M70 533h760v20H70z"/>
      {Array.from({length:7},(_,i)=><g key={i}><path d={`M${370+i*27} ${145+i*49}v15m-7-7h14`}/><circle cx={384+i*22} cy={182+i*42} r="5"/></g>)}
      <path d="M380 553v-92m140 92v-92M250 553v-58m400 58v-58"/>
      <path d="M350 553v-30q25-36 50 0v30m100 0v-30q25-36 50 0v30"/>
      <path d="M0 558q120-32 240 0t240 0 240 0 180 0"/>
    </g>
    <g fill="#d8ae65" opacity=".8"><circle cx="450" cy="29" r="5"/><circle cx="392" cy="91" r="3"/><circle cx="508" cy="91" r="3"/><circle cx="170" cy="445" r="4"/><circle cx="730" cy="445" r="4"/></g>
  </svg>;
}

function Diya({ side }: { side: 'left' | 'right' }) {
  return <div className={`diya diya-${side}`} aria-hidden="true"><span className="flame"/><span className="wick"/><span className="bowl"/><span className="stand"/></div>;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, weddingDate - Date.now());
      setTimeLeft({ days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60 });
    };
    update(); const timer = window.setInterval(update, 1000); return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [entered]);

  return <main>
    <div className="top-rule" />
    <section className={`hero ${entered ? 'entered' : ''}`}>
      <div className="mandala mandala-one">✺</div><div className="mandala mandala-two">✺</div>
      <div className="petal petal-one">✿</div><div className="petal petal-two">✽</div><div className="petal petal-three">✿</div><div className="petal petal-four">✽</div>
      <div className="hero-inner">
        <div className="blessing">॥ ஸ்ரீ கணேசாய நமः ॥</div>
        <div className="ornament"><span/>✥<span/></div>
        <p className="eyebrow">WITH THE BLESSINGS OF OUR ELDERS</p>
        <p className="inviting">Mr. Muniraj &amp; Mrs. Chitra Devi</p>
        <p className="small-copy">solicit your blessings and request the pleasure of your company<br/>at the wedding &amp; reception of their son</p>
        <div className="names-block">
          <h1>Kavin</h1><div className="weds"><span/>weds<span/></div><h1>Sivakami</h1>
        </div>
        <p className="daughter">D/o. Mr. Karthikeyan &amp; Mrs. Kalyani</p>
        <div className="ornament lower"><span/>❖<span/></div>
        <p className="date-line">21 &amp; 22 November 2026 <i>·</i> Madurai</p>
        <div className="hero-cta"><button onClick={() => { setEntered(true); document.getElementById('celebration')?.scrollIntoView({ behavior: 'smooth' }); }}>Explore invitation <ArrowDown size={15}/></button></div>
      </div>
      <TempleArt />
      <Diya side="left"/><Diya side="right"/>
      <div className="corner corner-tl"/><div className="corner corner-tr"/><div className="corner corner-bl"/><div className="corner corner-br"/>
      <div className="hero-bottom">ஓம் நமசிவாய</div>
    </section>

    <section className="countdown-section" id="celebration">
      <div className="section-kicker">THE AUSPICIOUS DAY APPROACHES</div><h2>Counting every moment</h2><p className="section-sub">Until we begin our forever</p>
      <div className="countdown">{Object.entries(timeLeft).map(([label,value])=><div className="count-unit" key={label}><strong>{String(value).padStart(2,'0')}</strong><span>{label}</span></div>)}</div>
      <div className="count-foot">SUNDAY, 22 NOVEMBER 2026 <span>✥</span> 10:30 AM ONWARDS</div>
    </section>

    <section className="events-section">
      <div className="section-kicker">TWO DAYS OF JOY</div><h2>Join our celebration</h2><p className="section-sub">Your presence will make our day even more special</p>
      <div className="event-grid">
        <article className="event-card reveal"><div className="event-symbol">❋</div><p className="event-label">THE EVENING BEFORE</p><h3>Reception</h3><div className="event-date">Saturday <b>21</b> November 2026</div><div className="event-detail"><Clock3 size={17}/> 7:00 PM onwards</div><div className="event-divider">✥</div><p className="event-note">An evening of warmth, smiles<br/>and celebration</p></article>
        <article className="event-card featured reveal"><div className="event-symbol">❋</div><p className="event-label">THE AUSPICIOUS MOMENT</p><h3>Wedding</h3><div className="event-date">Sunday <b>22</b> November 2026</div><div className="event-detail"><Clock3 size={17}/> 10:30 AM onwards</div><div className="event-divider">✥</div><p className="event-note">As two hearts and families<br/>come together as one</p></article>
      </div>
    </section>

    <section className="venue-section reveal">
      <div className="venue-arch"><div className="section-kicker">CELEBRATE WITH US</div><h2>Venue</h2><div className="venue-icon"><MapPin size={23}/></div><h3>Thillai Sivam Marriage Hall A/C</h3><p>Natham Rd, Opp: Thiruppalai EB sub-station,<br/>Tagore Nagar, Bharat Nagar, Tiruppalai,<br/>Madurai, Tamil Nadu 625014</p><a className="map-button" href={mapUrl} target="_blank" rel="noreferrer">View on Google Maps <ExternalLink size={15}/></a></div>
    </section>

    <footer className="footer">
      <div className="footer-flower">❀</div><p className="footer-blessing">Your blessings are the greatest gift</p><h2>Kavin <span>&amp;</span> Sivakami</h2><p className="footer-date">21 — 22 NOVEMBER 2026 <i>·</i> MADURAI</p><div className="ornament"><span/>✥<span/></div><p className="compliments">WITH BEST COMPLIMENTS</p><p className="dora">Dora</p><p className="footer-end">நன்றி · வணக்கம்</p>
    </footer>
  </main>;
}
