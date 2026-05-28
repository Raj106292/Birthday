import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const wifeName = "Pratishruti Sharma";
const nickname = "Shruti";
const birthdayMonth = 4;
const birthdayDay = 29;
const relationshipStart = new Date("2019-05-29T00:00:00");
const privateMessage =
  "Shruti, seven years with you have become my favorite proof that love can grow softer, deeper, and stronger at the same time. We have crossed our first marriage anniversary, and still my heart feels like it is only beginning to understand how lucky I am to call you my wife.";

const wishes = [
  { place: "Bangla", text: "Shuvo jonmodin, Shruti" },
  { place: "English", text: "Happy birthday, my love" },
  { place: "French", text: "Joyeux anniversaire, mon amour" },
  { place: "Spanish", text: "Feliz cumpleanos, mi amor" },
  { place: "Italian", text: "Buon compleanno, amore mio" },
  { place: "Japanese", text: "Otanjoubi omedetou, Shruti" },
];

const memories = [
  { title: "Seven years", body: "Seven years of choosing each other, learning each other, and building a love that feels more like home every day." },
  { title: "Our first anniversary", body: "We crossed our first marriage anniversary, but I still look at you with the same wonder as the beginning." },
  { title: "My promise", body: "I will keep choosing you in the quiet mornings, the difficult evenings, and every ordinary day that becomes beautiful because you are there." },
];

const reasons = [
  "You are my calm place after every long day.",
  "You make love feel steady, mature, and real.",
  "You turn small moments into memories I want to keep.",
  "Your smile still changes the whole room for me.",
  "You are my wife, my Shruti, and my best chapter.",
];

const galleryPhotos = [
  { title: "Our favorite smile", caption: "The smile I can never get tired of.", image: "/assets/images/optimized/gallery-1.jpg", color: "#f8c8d8" },
  { title: "Seven years of us", caption: "A story built one day, one laugh, one promise at a time.", image: "/assets/images/optimized/gallery-2.jpg", color: "#b8f2e6" },
  { title: "First anniversary", caption: "The first milestone of a lifetime I want with you.", image: "/assets/images/optimized/gallery-3.jpg", color: "#ffe6c7" },
  { title: "My peaceful place", caption: "The person who makes the world feel gentle.", image: "/assets/images/optimized/gallery-4.jpg", color: "#d8f3dc" },
  { title: "Little forever", caption: "The everyday memories that quietly become everything.", image: "/assets/images/optimized/gallery-5.jpg", color: "#cde7f0" },
  { title: "Only Shruti", caption: "A page, a wish, and a heart made only for you.", image: "/assets/images/optimized/gallery-6.jpg", color: "#ffd6a5" },
  { title: "A chapter I love", caption: "One more proof that my favorite memories have you in them.", image: "/assets/images/optimized/gallery-7.jpg", color: "#e9d5ff" },
  { title: "The life we built", caption: "Seven years, our first anniversary crossed, and so much more waiting for us.", image: "/assets/images/optimized/gallery-8.jpg", color: "#c7f9cc" },
  { title: "Always my Shruti", caption: "Some pictures are not just pictures. They are reasons to feel grateful.", image: "/assets/images/optimized/gallery-9.jpg", color: "#fbcfe8" },
];

const privateNotes = [
  "I loved you before the wedding day, and I love you even more after knowing what it means to build a life beside you.",
  "Thank you for being patient with my imperfect days and generous with your beautiful heart.",
  "I do not need a perfect world. I need the world where I come home to you.",
  "Happy birthday, Shruti. May this year give you the softness, respect, joy, and love you give so freely.",
];

const timeline = [
  { date: "Year 01", title: "The beginning", body: "The first chapter where your name slowly became my favorite word." },
  { date: "Year 07", title: "Still us", body: "Seven years later, the love is not smaller. It is deeper, quieter, and more certain." },
  { date: "Anniversary 01", title: "Husband and wife", body: "Our first marriage anniversary crossed, and my promise to you feels stronger than ever." },
  { date: "Forever", title: "What comes next", body: "More birthdays, more memories, more ordinary days made beautiful together." },
];

const jarMemories = [
  "The way you make home feel real.",
  "The comfort in hearing your voice.",
  "The little jokes only we understand.",
  "The way you love with both strength and softness.",
  "The future that feels brighter because you are in it.",
];

function CelebrationCanvas({ burstKey, mode = "confetti" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrame;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const createBurst = () => {
      const palette = ["#f8c8d8", "#f7b267", "#7bdff2", "#fff3b0", "#b8f2e6"];
      const originX = mode === "fireworks" ? window.innerWidth * (0.25 + Math.random() * 0.5) : window.innerWidth / 2;
      const originY = mode === "fireworks" ? window.innerHeight * (0.28 + Math.random() * 0.25) : window.innerHeight * 0.32;
      const count = mode === "fireworks" ? 180 : 110;

      particles = Array.from({ length: count }, (_, index) => {
        const angle = (Math.PI * 2 * index) / count + Math.random() * 0.3;
        const speed = mode === "fireworks" ? Math.random() * 6 + 2 : Math.random() * 5 + 2;
        return {
          x: originX,
          y: originY,
          vx: mode === "fireworks" ? Math.cos(angle) * speed : (Math.random() - 0.5) * 9,
          vy: mode === "fireworks" ? Math.sin(angle) * speed : Math.random() * -7 - 2,
          size: Math.random() * 7 + 3,
          rotation: Math.random() * 360,
          spin: Math.random() * 10 - 5,
          gravity: mode === "fireworks" ? 0.025 : Math.random() * 0.12 + 0.07,
          color: palette[Math.floor(Math.random() * palette.length)],
          life: 1,
        };
      });
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles = particles
        .map((particle) => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + particle.gravity,
          rotation: particle.rotation + particle.spin,
          life: particle.life - (mode === "fireworks" ? 0.01 : 0.008),
        }))
        .filter((particle) => particle.life > 0 && particle.y < window.innerHeight + 40);

      particles.forEach((particle) => {
        context.save();
        context.globalAlpha = Math.max(particle.life, 0);
        context.translate(particle.x, particle.y);
        context.rotate((particle.rotation * Math.PI) / 180);
        context.fillStyle = particle.color;
        if (mode === "fireworks") {
          context.beginPath();
          context.arc(0, 0, particle.size * 0.42, 0, Math.PI * 2);
          context.fill();
        } else {
          context.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 0.55);
        }
        context.restore();
      });

      if (particles.length) animationFrame = requestAnimationFrame(draw);
    };

    resize();
    createBurst();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [burstKey, mode]);

  return <canvas className="confetti" ref={canvasRef} aria-hidden="true" />;
}

function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!playing || useFallback) return undefined;

    const track = new Audio("/assets/music/birthday-song.mp3");
    track.loop = true;
    track.volume = 0.42;
    track.play().catch(() => setUseFallback(true));

    return () => {
      track.pause();
      track.currentTime = 0;
    };
  }, [playing, useFallback]);

  useEffect(() => {
    if (!playing || !useFallback) {
      audioRef.current?.close();
      audioRef.current = null;
      return undefined;
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audio = new AudioContext();
    const gain = audio.createGain();
    gain.gain.value = 0.035;
    gain.connect(audio.destination);
    audioRef.current = audio;

    const notes = [392, 440, 523.25, 659.25, 587.33, 523.25, 440, 392];
    let step = 0;
    const playNote = () => {
      const oscillator = audio.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = notes[step % notes.length];
      oscillator.connect(gain);
      oscillator.start();
      oscillator.stop(audio.currentTime + 0.42);
      step += 1;
    };

    playNote();
    const timer = window.setInterval(playNote, 520);
    return () => {
      window.clearInterval(timer);
      audio.close();
    };
  }, [playing, useFallback]);

  return (
    <div className="musicControl">
      <button className="pillControl" onClick={() => setPlaying((current) => !current)} type="button">
        {playing ? "Pause music" : "Play music"}
      </button>
      <div className={`visualizer ${playing ? "playing" : ""}`} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function getNextBirthday(now) {
  const year = now.getFullYear();
  const birthdayThisYear = new Date(year, birthdayMonth, birthdayDay, 0, 0, 0);
  return now <= birthdayThisYear ? birthdayThisYear : new Date(year + 1, birthdayMonth, birthdayDay, 0, 0, 0);
}

function getCountdownParts(target, now) {
  const difference = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference / 3600000) % 24);
  const minutes = Math.floor((difference / 60000) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function App() {
  const [introOpen, setIntroOpen] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [now, setNow] = useState(new Date());
  const [activeMemory, setActiveMemory] = useState(0);
  const [noteIndex, setNoteIndex] = useState(0);
  const [wishIndex, setWishIndex] = useState(0);
  const [jarIndex, setJarIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [burstKey, setBurstKey] = useState(0);
  const [celebrationMode, setCelebrationMode] = useState("fireworks");
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [secretOpen, setSecretOpen] = useState(false);

  const birthdayTarget = getNextBirthday(now);
  const countdown = getCountdownParts(birthdayTarget, now);
  const isBirthday = now.getMonth() === birthdayMonth && now.getDate() === birthdayDay;
  const daysTogether = Math.floor((now.getTime() - relationshipStart.getTime()) / 86400000);
  const yearsTogether = Math.max(7, now.getFullYear() - relationshipStart.getFullYear());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (introOpen) return undefined;

    const timers = [
      window.setInterval(() => setActiveMemory((current) => (current + 1) % memories.length), 4400),
      window.setInterval(() => setNoteIndex((current) => (current + 1) % reasons.length), 3600),
      window.setInterval(() => setWishIndex((current) => (current + 1) % wishes.length), 3300),
      window.setInterval(() => setJarIndex((current) => (current + 1) % jarMemories.length), 4200),
      window.setInterval(() => setMessageIndex((current) => (current + 1) % privateNotes.length), 5200),
    ];

    return () => timers.forEach(window.clearInterval);
  }, [introOpen]);

  useEffect(() => {
    if (introOpen) return undefined;

    const timer = window.setInterval(() => {
      setCelebrationMode((current) => (current === "fireworks" ? "confetti" : "fireworks"));
      setBurstKey((current) => current + 1);
    }, 2800);

    setBurstKey((current) => current + 1);
    return () => window.clearInterval(timer);
  }, [introOpen]);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  };

  return (
    <main>
      <CelebrationCanvas burstKey={burstKey} mode={celebrationMode} />
      <div className="floatingHearts" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {introOpen && (
        <section className={`introGate ${introLeaving ? "leaving" : ""}`} aria-label="Birthday opening message">
          <div className="introStars" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="introCard">
            <p className="eyebrow">29 May, only for Shruti</p>
            <h1>Many many happy returns of the day</h1>
            <p>
              A little birthday world is waiting behind this button, made only for
              Pratishruti Sharma.
            </p>
            {!isBirthday && (
              <div className="countdown" aria-label="Countdown to 29 May">
                <span><strong>{countdown.days}</strong> days</span>
                <span><strong>{countdown.hours}</strong> hours</span>
                <span><strong>{countdown.minutes}</strong> min</span>
                <span><strong>{countdown.seconds}</strong> sec</span>
              </div>
            )}
            {!isBirthday && <p className="previewNote">Preview mode is open now. On 29 May, this becomes her birthday unlock.</p>}
            <button
              className="magicButton"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                setIntroLeaving(true);
                setCelebrationMode("fireworks");
                window.setTimeout(() => {
                  setIntroOpen(false);
                  setBurstKey((current) => current + 1);
                }, 720);
              }}
              type="button"
            >
              <span>Open your surprise</span>
            </button>
          </div>
        </section>
      )}

      <section className="hero" aria-label={`Birthday wish for ${wifeName}`}>
        <img className="heroImage" src="/assets/images/optimized/birthday-hero.jpg" alt="Candlelit birthday table with flowers, cake, and a wrapped gift" />
        <div className="heroShade" />
        <div className="heroControls" aria-label="App controls">
          <MusicToggle />
          <button className="pillControl" onClick={toggleFullscreen} type="button">Fullscreen</button>
        </div>
        <div className="heroContent">
          <button
            className={`secretStar ${secretOpen ? "open" : ""}`}
            onClick={() => {
              setSecretOpen(true);
              setCelebrationMode("fireworks");
              setBurstKey((current) => current + 1);
            }}
            type="button"
            aria-label="Open hidden secret message"
          >
            *
          </button>
          <p className="eyebrow">Only for {nickname}</p>
          <h1>Happy Birthday, {wifeName}</h1>
          <p className="heroCopy">{privateMessage}</p>
          <div className="heroActions">
            <a href="#story">Our story</a>
            <a href="#letter">Your letter</a>
          </div>
        </div>
      </section>

      {secretOpen && (
        <section className="secretMessage" aria-label="Hidden private message">
          <p className="eyebrow">You found the secret</p>
          <h2>Shruti, even in a page full of wishes, this tiny hidden place is only for one truth: I am happiest when I am yours.</h2>
        </section>
      )}

      <section className="dedication" aria-label="Private dedication">
        <div>
          <p className="eyebrow">Private message</p>
          <h2>{privateNotes[messageIndex]}</h2>
        </div>
        <div className="meter" aria-label="Animated birthday progress">
          <span />
        </div>
      </section>

      <section className="loveCounter revealSection" aria-label="Love counter">
        <article>
          <p className="eyebrow">Love counter</p>
          <h2>{yearsTogether}+ years of us</h2>
        </article>
        <article>
          <strong>{daysTogether.toLocaleString()}</strong>
          <span>days together</span>
        </article>
        <article>
          <strong>1st</strong>
          <span>marriage anniversary crossed</span>
        </article>
        <article>
          <strong>∞</strong>
          <span>forever loading</span>
        </article>
      </section>

      <section className="story revealSection" id="story" aria-label="Animated relationship story">
        <div className="sectionHeading">
          <p className="eyebrow">Seven years of us</p>
          <h2>Our story keeps moving</h2>
        </div>
        <div className="memoryLayout">
          <div className="memoryTabs" aria-label="Memory moments">
            {memories.map((memory, index) => (
              <span className={activeMemory === index ? "active" : ""} key={memory.title}>
                {String(index + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
          <article className="memoryPanel">
            <p>{memories[activeMemory].title}</p>
            <h3>{memories[activeMemory].body}</h3>
          </article>
        </div>
      </section>

      <section className="gallery revealSection" aria-label="Animated photo gallery">
        <div className="sectionHeading">
          <p className="eyebrow">Photo gallery</p>
          <h2>Memories that move with us</h2>
        </div>
        <div className="photoMarquee">
          {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
            <article className="photoCard" key={`${photo.title}-${index}`}>
              <img
                src={photo.image}
                alt={photo.title}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "block";
                }}
              />
              <div className="photoPlaceholder" style={{ background: photo.color, display: "none" }} />
              <div>
                <h3>{photo.title}</h3>
                <p>{photo.caption}</p>
                <button onClick={() => setLightboxPhoto(photo)} type="button">View memory</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="letter open revealSection" id="letter" aria-label="Love letter">
        <div className="envelope open">
          <div className="letterSeal">S</div>
          <article>
            <p className="eyebrow">My letter</p>
            <h2>To my Shruti</h2>
            <p>
              Happy birthday, my love. You are not just the woman I married; you are the person who made seven years feel like a journey worth every step.
              After crossing our first marriage anniversary, I feel even more certain that my best decision is still you.
            </p>
          </article>
        </div>
      </section>

      <section className="timeline revealSection" aria-label="Relationship timeline">
        <div className="sectionHeading">
          <p className="eyebrow">Our timeline</p>
          <h2>Seven years, one forever</h2>
        </div>
        <div className="timelineRail">
          {timeline.map((item) => (
            <article key={item.title}>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="globalWish" aria-label="Birthday wishes around the world">
        <div>
          <p className="eyebrow">Across the world</p>
          <h2>{wishes[wishIndex].text}</h2>
          <p>{wishes[wishIndex].place}</p>
        </div>
      </section>

      <section className="giftQuiz revealSection" aria-label="Animated gift and promise">
        <article className="giftBox open">
          <p className="eyebrow">Birthday promise</p>
          <h2>Tonight, tomorrow, and the years after this: I choose you, Shruti.</h2>
        </article>
        <article className="quizBox messageBox">
          <p className="eyebrow">Little truths</p>
          <h3>{privateNotes[messageIndex]}</h3>
        </article>
      </section>

      <section className="jar" aria-label="Animated memory jar">
        <div>
          <p className="eyebrow">Memory jar</p>
          <h2>{jarMemories[jarIndex]}</h2>
        </div>
      </section>

      <section className="reasons revealSection" aria-label="Animated reasons I love you">
        <div className="sectionHeading">
          <p className="eyebrow">Five notes for you</p>
          <h2>Reasons my heart keeps choosing you</h2>
        </div>
        <div className="reasonGrid">
          {reasons.map((reason, index) => (
            <article className={`reason ${noteIndex === index ? "open" : ""}`} key={reason}>
              <span>{reason}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="finale" aria-label="Final birthday message">
        <p className="eyebrow">Forever, from me to you</p>
        <h2>Happy birthday, Shruti. May this year love you as beautifully as you have loved me through these seven years.</h2>
      </section>

      <section className="certificate" aria-label="Birthday certificate">
        <p className="eyebrow">Official birthday certificate</p>
        <h2>Presented to {wifeName}</h2>
        <p>Loved for seven years, cherished after our first anniversary, and chosen for every tomorrow.</p>
        <strong>29 May</strong>
      </section>

      {lightboxPhoto && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightboxPhoto.title}>
          <button className="lightboxClose" onClick={() => setLightboxPhoto(null)} type="button" aria-label="Close photo">Close</button>
          <img src={lightboxPhoto.image} alt={lightboxPhoto.title} />
          <div>
            <h2>{lightboxPhoto.title}</h2>
            <p>{lightboxPhoto.caption}</p>
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
