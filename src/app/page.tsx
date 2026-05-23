'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

export default function StridesAndStoriesLanding() {

const [timeLeft, setTimeLeft] = useState({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
});

useEffect(() => {
  const calculateCountdown = () => {
    const now = new Date();

    const nextSunday = new Date();
    nextSunday.setDate(
      now.getDate() + ((7 - now.getDay()) % 7 || 7)
    );
    nextSunday.setHours(6, 0, 0, 0);

    const difference = nextSunday.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    setTimeLeft({
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    });
  };

  calculateCountdown();

  const timer = setInterval(calculateCountdown, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 overflow-x-hidden scroll-smooth">

      {/* Navbar */}
<header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
  <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo */}
    <div>
      <h1 className="text-xl font-extrabold tracking-tight">
        Strides <span className="text-orange-500">&</span> Stories
      </h1>
    </div>

    {/* Menu */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

      <a
        href="#about"
        className="hover:text-orange-500 transition-colors"
      >
        About
      </a>

      <a
        href="#run"
        className="hover:text-orange-500 transition-colors"
      >
        Sunday Run
      </a>

      <a
        href="#gallery"
        className="hover:text-orange-500 transition-colors"
      >
        Gallery
      </a>

    </div>

    {/* CTA */}
    <a
      href="https://chat.whatsapp.com/LdLcDdZpvq64VFBKo0rN31"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-slate-900 px-5 py-3 text-white text-sm font-medium hover:scale-105 transition-transform"
    >
      Join Community
    </a>

  </nav>
</header>

      {/* Hero */}
      <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_30%)]" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-200 blur-3xl opacity-20" />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-36 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex rounded-full border border-orange-200 bg-white/90 backdrop-blur px-4 py-2 text-sm shadow-lg">
              📍 Hyderabad • Weekend Social Run Club
            </span>

            <h1 className="mt-8 text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1]">
              Strides <span className="text-orange-500">&</span> Stories
            </h1>

            <p className="mt-5 text-2xl text-slate-700 font-medium">
              Run. Connect. Build Stories.
            </p>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Sunday sunrise runs — coffee, breakfast, conversations, and meaningful connections.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
  href="https://chat.whatsapp.com/LdLcDdZpvq64VFBKoOrN31"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto rounded-3xl bg-slate-900 px-7 py-4 text-white font-medium shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 transition-transform inline-block"
>
  Join this Sunday's Run
</a>
              <button className="rounded-3xl border border-slate-300 bg-white px-7 py-4 font-medium hover:bg-slate-50 transition">
                See Route Map →
              </button>
            </div>

            <div className="mt-10 flex gap-8 text-sm text-slate-600 flex-wrap">
              <span>🏃 Beginner Friendly</span>
              <span>☕ Coffee After</span>
              <span>🤝 Meaningful Connections</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-white shadow-2xl border border-orange-100 p-8 rotate-2">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-orange-100 to-amber-50 h-[420px] flex items-center justify-center text-center p-8">
                <div>
                  <div className="text-6xl mb-5">🌅</div>
                  <h3 className="text-3xl font-bold">Sunday Sunrise Runs</h3>
                  <p className="mt-4 text-slate-600">
                    Easy-paced runs • Coffee • Conversations • Community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">Stride → Sip → Story</h2>
          <p className="mt-4 text-lg text-slate-600">
            More than fitness — this is where movement meets meaningful conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              emoji: '🏃',
              title: 'Stride',
              text: 'Easy, beginner-friendly runs with zero pressure and good vibes only.',
            },
            {
              emoji: '☕',
              title: 'Sip',
              text: 'Coffee, chai, breakfast and relaxed conversations after the run.',
            },
            {
              emoji: '✨',
              title: 'Story',
              text: 'Meet interesting people, share ideas and create meaningful friendships.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm hover:-translate-y-1 transition-all">
              <div className="text-5xl">{item.emoji}</div>
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-orange-400 uppercase text-sm tracking-[0.2em]">
              Built for better weekends
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              A social club that starts with a run.
            </h2>
            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              Whether you're new to the city, looking to meet like-minded people, or simply want to start Sundays differently — this is your space.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              'Beginners Welcome',
              'No Pace Pressure',
              'Coffee & Breakfast',
              'Meaningful Conversations',
              'Creators & Professionals',
              'Community First',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-700 bg-slate-800 p-6 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Run */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="rounded-[2.5rem] bg-white border border-orange-100 shadow-xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div>
              <p className="uppercase tracking-[0.2em] text-orange-500 text-sm font-semibold">
                Upcoming Meetup
              </p>
              <h3 className="text-4xl font-bold mt-3">
                Sunday Sunrise Run ☀️
              </h3>
              <div className="mt-5 space-y-2 text-slate-600 text-lg">
                <p>📍 Corporate Bhawan Road - Bandlaguda </p>
                <p>🕕 Sunday • 6:00 AM</p>
                <p>🏃 Easy 5K Run</p>
                <p>☕ Coffee & Conversations After</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <button className="rounded-3xl bg-orange-500 px-8 py-4 text-white font-semibold hover:scale-105 transition-transform shadow-lg">
                RSVP on WhatsApp
              </button>
              <a
  href="https://www.instagram.com/stridesandstories_community/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-3xl border border-slate-300 px-8 py-4 font-medium bg-white inline-block text-center"
>
  Follow Us on Instagram
</a>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[2.5rem] bg-slate-900 text-white p-10 md:p-14 text-center shadow-xl">
          <p className="uppercase tracking-[0.2em] text-orange-400 text-sm font-semibold">
            Next Sunday Run
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Countdown to the Next Stride ⏳
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Every Sunday • Corporate Bhawan Road - Bandlaguda • 6:00 AM
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {[
  { value: timeLeft.days, label: 'Days' },
  { value: timeLeft.hours, label: 'Hours' },
  { value: timeLeft.minutes, label: 'Minutes' },
  { value: timeLeft.seconds, label: 'Seconds' },
].map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] bg-slate-800 border border-slate-700 p-6"
              >
                <h3 className="text-4xl font-bold text-orange-400">
                  {item.value}
                </h3>
                <p className="mt-2 text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Run Details */}
<section id="run" className="max-w-6xl mx-auto px-6 py-20">
  <div className="rounded-[2.5rem] bg-slate-900 text-white p-10 md:p-14 shadow-2xl">

    <div className="text-center">
      <p className="uppercase tracking-[0.2em] text-orange-400 text-sm font-semibold">
        Join This Sunday
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold">
        Next Sunday Run 🏃
      </h2>

      <p className="mt-4 text-slate-300 text-lg">
        A relaxed social run designed for meaningful
        conversations, movement, and coffee after.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-12">

      <div className="rounded-[2rem] bg-slate-800 p-6">
        <h3 className="text-xl font-semibold">
          📍 Meeting Point
        </h3>
        <p className="mt-2 text-slate-300">
          Saroornagar Lake Entrance
        </p>
      </div>

      <div className="rounded-[2rem] bg-slate-800 p-6">
        <h3 className="text-xl font-semibold">
          ⏰ Time
        </h3>
        <p className="mt-2 text-slate-300">
          Sunday • 6:00 AM
        </p>
      </div>

      <div className="rounded-[2rem] bg-slate-800 p-6">
        <h3 className="text-xl font-semibold">
          🏃 Distance
        </h3>
        <p className="mt-2 text-slate-300">
          5 KM Social Run
        </p>
      </div>

      <div className="rounded-[2rem] bg-slate-800 p-6">
        <h3 className="text-xl font-semibold">
          ☕ Coffee After
        </h3>
        <p className="mt-2 text-slate-300">
          Yes — breakfast & conversations
        </p>
      </div>

    </div>
  </div>
</section>

{/* Gallery Section */}
<section
  id="gallery"
  className="max-w-7xl
   mx-auto px-6 pb-24">
  <div className="text-center">
    <h2 className="text-4xl font-bold">
      Stories in Motion
    </h2>

    <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
      Future runs, sunrise moments, conversations,
      coffee and memories will live here.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

  <div className="overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-white">
    <img
      src="/Gallery/run2.jpeg"
      alt="Sunday Run"
      className="w-full h-[420px] md:h-[500px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
    />
  </div>

  <div className="overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-white">
    <img
      src="/Gallery/run3.jpeg"
      alt="Community Run"
      className="w-full h-[420px] md:h-[500px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
    />
  </div>

  <div className="overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-white">
    <img
      src="/Gallery/run4.jpeg"
      alt="Coffee After Run"
      className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
    />

</div>
</div>
      </section>
    </div>
  )
}
