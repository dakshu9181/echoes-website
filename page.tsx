export default function EchoesAuthorWebsite() { return ( <div className="min-h-screen bg-black text-white overflow-hidden"> {/* Hero Section /} <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.72), rgba(0,0,0,0.96)), url('/cover.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', }} > {/ Floating Glow Effects */} <div className="absolute left-10 top-24 h-40 w-40 animate-pulse rounded-full bg-rose-700/20 blur-3xl" /> <div className="absolute bottom-20 right-10 h-52 w-52 animate-pulse rounded-full bg-red-900/20 blur-3xl" />

{/* Navigation */}
    <nav className="absolute top-0 flex w-full items-center justify-between px-8 py-6 backdrop-blur-sm">
      <h1 className="text-xl font-black tracking-[0.25em] text-white">
        DAKSH SAINI
      </h1>

      <div className="hidden gap-8 text-sm uppercase tracking-[0.2em] text-zinc-300 md:flex">
        <a href="#">Home</a>
        <a href="#">Novel</a>
        <a href="#">Universe</a>
        <a href="#">Community</a>
        <a href="#">Contact</a>
      </div>
    </nav>

    {/* Main Hero */}
    <div className="relative z-10 max-w-5xl animate-[fadeIn_1.5s_ease-in-out]">
      <p className="mb-5 text-sm uppercase tracking-[0.45em] text-rose-300 md:text-base">
        Even Silence Has a Story to Tell
      </p>

      <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl lg:text-8xl">
        Echoes of a Better Dawn
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-2xl">
        A haunting cinematic journey through emotions, silence, hope,
        memories, and the darkness hidden inside beauty.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
        <button className="rounded-2xl bg-white px-8 py-4 text-lg font-black text-black shadow-2xl transition duration-300 hover:scale-105 hover:bg-rose-100">
          Read Now
        </button>

        <button className="rounded-2xl border border-zinc-500 bg-black/30 px-8 py-4 text-lg font-bold backdrop-blur-xl transition hover:border-white hover:bg-white hover:text-black">
          Watch Trailer
        </button>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 flex flex-col items-center text-zinc-400">
      <div className="h-12 w-[1px] bg-zinc-600" />
      <p className="mt-3 text-xs uppercase tracking-[0.4em]">
        Enter The Universe
      </p>
    </div>
  </section>

  {/* Cinematic Quote Section */}
  <section className="relative border-t border-zinc-900 bg-black px-6 py-32 text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,0.18),transparent_60%)]" />

    <div className="relative z-10 mx-auto max-w-4xl">
      <p className="text-sm uppercase tracking-[0.5em] text-zinc-500">
        The Experience
      </p>

      <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
        "Some stories are not read.
        <br />
        They are felt in silence."
      </h2>

      <p className="mt-8 text-lg leading-relaxed text-zinc-400">
        Built like a cinematic universe — not just a normal author page.
      </p>
    </div>
  </section>

  {/* About Section */ */}
  <section className="mx-auto max-w-6xl px-6 py-24">
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          About The Author
        </p>

        <h2 className="text-4xl font-black md:text-6xl">
          Daksh Saini
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-zinc-300">
          A young visionary storyteller building immersive worlds through
          emotion-driven fiction and cinematic imagination.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-2xl bg-white px-6 py-3 font-bold text-black">
            Amazon Page
          </button>

          <button className="rounded-2xl border border-zinc-700 px-6 py-3 font-bold">
            Instagram
          </button>
        </div>
      </div>

      <div className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 shadow-2xl">
        <div className="aspect-[4/5] rounded-[2rem] border border-zinc-800 bg-zinc-950" />
      </div>
    </div>
  </section>

  {/* Features */}
  <section className="border-t border-zinc-900 bg-zinc-950 px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
          Ecosystem
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Big Website Features
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          "Animated homepage",
          "Novel showcase",
          "AI chatbot",
          "Online ebook reader",
          "Community comments",
          "Merchandise store",
          "Admin dashboard",
          "Newsletter system",
          "User login system",
        ].map((feature) => (
          <div
            key={feature}
            className="rounded-3xl border border-zinc-800 bg-black p-6 transition hover:-translate-y-1 hover:border-white"
          >
            <h3 className="text-xl font-bold">{feature}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-zinc-900 px-6 py-10 text-center text-zinc-500">
    © 2026 Echoes of a Better Dawn — Designed for cinematic storytelling.
  {/* 3D Book Showcase */}
  <section className="relative border-t border-zinc-900 bg-gradient-to-b from-black to-zinc-950 px-6 py-28">
    <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-rose-300">
          Featured Novel
        </p>

        <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
          Echoes of a Better Dawn
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-zinc-400">
          Explore a deeply emotional universe filled with mystery,
          darkness, memories, silence, and hope. Designed to feel like a
          cinematic experience rather than a traditional novel.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://amzn.in/d/0aROottP"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-7 py-4 font-black text-black transition hover:scale-105"
          >
            Buy on Amazon ↗
          </a>

          <button className="rounded-2xl border border-zinc-700 px-7 py-4 font-bold transition hover:border-white">
            Read Sample
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute h-72 w-72 rounded-full bg-red-900/20 blur-3xl" />

        <div className="relative rotate-[-6deg] rounded-[2rem] border border-zinc-700 bg-zinc-950 p-4 shadow-[0_0_80px_rgba(120,0,0,0.35)] transition duration-500 hover:rotate-0 hover:scale-105">
          <img
            src="/cover.jpg"
            alt="Book Cover"
            className="w-[320px] rounded-[1.5rem]"
          />
        </div>
      </div>
    </div>
  </section>

  {/* AI Assistant Section */}
  <section className="border-t border-zinc-900 bg-black px-6 py-28">
    <div className="mx-auto max-w-6xl rounded-[2rem] border border-zinc-800 bg-zinc-950/70 p-10 backdrop-blur-xl">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-rose-300">
            AI Lore Assistant
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Talk To The Universe
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Ask questions about characters, hidden meanings, theories,
            symbolism, future parts, and secrets from the story universe.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-black p-6">
          <div className="space-y-4">
            <div className="rounded-2xl bg-zinc-900 p-4 text-zinc-300">
              What does the silence symbolize?
            </div>

            <div className="rounded-2xl bg-rose-950/40 p-4 text-zinc-200">
              In the novel, silence represents emotions too deep to be
              spoken.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Community Section */}
  <section className="border-t border-zinc-900 bg-zinc-950 px-6 py-28">
    <div className="mx-auto max-w-6xl text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
        Community
      </p>

      <h2 className="mt-4 text-5xl font-black md:text-7xl">
        Fan Universe
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-800 bg-black p-8 text-left">
          <h3 className="text-2xl font-black">Theories</h3>
          <p className="mt-4 text-zinc-400">
            Fans can post hidden meanings, predictions, and symbolism.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-black p-8 text-left">
          <h3 className="text-2xl font-black">Exclusive Content</h3>
          <p className="mt-4 text-zinc-400">
            Wallpapers, unreleased pages, trailers, and announcements.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-black p-8 text-left">
          <h3 className="text-2xl font-black">Live Discussions</h3>
          <p className="mt-4 text-zinc-400">
            Readers interact together and discuss emotional moments.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Soundtrack Section */}
  <section className="relative overflow-hidden border-t border-zinc-900 bg-black px-6 py-28 text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,0.25),transparent_55%)]" />

    <div className="relative z-10 mx-auto max-w-4xl">
      <p className="text-sm uppercase tracking-[0.5em] text-zinc-500">
        Atmosphere
      </p>

      <h2 className="mt-5 text-5xl font-black md:text-7xl">
        Cinematic Soundtrack
      </h2>

      <p className="mt-8 text-lg leading-relaxed text-zinc-400">
        Enable ambient music while exploring the world of the novel.
      </p>

      <button className="mt-10 rounded-full border border-zinc-700 px-10 py-5 text-lg font-black transition hover:border-white hover:bg-white hover:text-black">
        Enable Soundtrack
      </button>
    </div>
  </section>

  {/* Newsletter */}
  <section className="border-t border-zinc-900 bg-zinc-950 px-6 py-24 text-center">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-4xl font-black md:text-6xl">
        Join The Journey
      </h2>

      <p className="mt-6 text-lg text-zinc-400">
        Receive updates, future releases, exclusive content, and secret
        announcements.
      </p>

      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <input
          placeholder="Enter your email"
          className="flex-1 rounded-2xl border border-zinc-700 bg-black px-6 py-4 text-white outline-none"
        />

        <button className="rounded-2xl bg-white px-8 py-4 font-black text-black transition hover:scale-105">
          Subscribe
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-zinc-900 px-6 py-10 text-center text-zinc-500">
    © 2026 Echoes of a Better Dawn — Designed for cinematic storytelling.
  </footer>
</div>

); }