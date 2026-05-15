export default function StridesAndStoriesLanding() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_30%)]" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-200 blur-3xl opacity-20" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex rounded-full border border-orange-200 bg-white/80 backdrop-blur px-4 py-2 text-sm shadow-sm">
              📍 Saroornagar • Weekend Social Run Club
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Strides <span className="text-orange-500">&</span> Stories
            </h1>

            <p className="mt-5 text-2xl text-slate-700 font-medium">
              Come for the run. Stay for the stories.
            </p>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              We’re building meaningful weekends around Saroornagar — easy social runs, coffee, breakfast, and conversations that turn strangers into friends.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
  href="https://chat.whatsapp.com/LdLcDdZpvq64VFBKoOrN31"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-3xl bg-slate-900 px-7 py-4 text-white font-medium shadow-xl hover:scale-105 transition-transform inline-block"
>
  Join the community on WhatsApp
</a>
              <button className="rounded-3xl border border-slate-300 bg-white px-7 py-4 font-medium hover:bg-slate-50 transition">
                View Route
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
                <p>📍 Saroornagar Lake</p>
                <p>🕕 Sunday • 6:00 AM</p>
                <p>🏃 Easy 4K Run</p>
                <p>☕ Coffee & Conversations After</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <button className="rounded-3xl bg-orange-500 px-8 py-4 text-white font-semibold hover:scale-105 transition-transform shadow-lg">
                RSVP on WhatsApp
              </button>
              <a
  href="https://www.instagram.com/ram_avsr/"
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
            Every Sunday • Saroornagar Lake • 6:00 AM
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {[
              { value: '02', label: 'Days' },
              { value: '13', label: 'Hours' },
              { value: '42', label: 'Minutes' },
              { value: '09', label: 'Seconds' },
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

      {/* Gallery Placeholder */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Stories in Motion</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Future runs, sunrise moments, conversations, coffee and memories will live here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-[2rem] bg-gradient-to-br from-orange-100 to-stone-100 h-72 flex items-center justify-center text-slate-500 text-lg">
              Your Run Photos Here
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
