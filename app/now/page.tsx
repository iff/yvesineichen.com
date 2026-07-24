// Personal websites often have a link that says “now” that tells you what this person is focused on at this point in their life. It’s called a “now page”.
import type { ReactNode } from "react";

const linkClass =
  "text-[#69f2b1] underline-offset-4 hover:underline no-underline";

const nowItems: ReactNode[] = [
  <>
    learning{" "}
    <a href="https://lean-lang.org/" className={linkClass}>
      Lean
    </a>{" "}
    by working my way through the{" "}
    <a
      href="https://adam.math.hhu.de/#/g/leanprover-community/nng4"
      className={linkClass}
    >
      natural number game
    </a>{" "}
    in{" "}
    <a href="https://github.com/iff/nng" className={linkClass}>
      nvim
    </a>
  </>,
  <>
    building{" "}
    <a href="https://verion-eda.com/" className={linkClass}>
      better RTL
    </a>{" "}
    tools
  </>,
  <>
    working on a train-puzzle game in{" "}
    <a href="https://bevy.org" className={linkClass}>
      Bevy
    </a>
  </>,
  <>understanding rustc, hoping to start contributing small fixes</>,
];

const publishedOn = "2026-07-24";
const updatedOn = "2026-07-24";

export default function Now() {
  return (
    <div
      className="min-h-screen bg-[#111317] text-[#e2e2e8] antialiased selection:bg-[#69f2b1] selection:text-[#003823]"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* Decorative background element */}
      <div className="fixed top-0 right-0 w-1/3 h-screen pointer-events-none opacity-[0.03] overflow-hidden z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-l from-[#69f2b1] to-transparent" />
        <div className="h-full w-full flex items-center justify-center">
          <span className="mono-header text-[40rem] font-black text-[#69f2b1] leading-none rotate-12 translate-x-1/2">
            Y
          </span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-32">
        {/* HEADER */}
        <header className="mb-16 md:mb-24">
          <h1 className="mono-header text-5xl md:text-7xl font-bold tracking-tighter text-[#e2e2e8] leading-none uppercase">
            NOW
          </h1>
          <p className="text-[#c4c7c8] mt-4 text-lg max-w-3xl">
            This is a{" "}
            <a href="https://nownownow.com/about" className={linkClass}>
              now page
            </a>
            .
          </p>
        </header>

        {/* ITEMS */}
        <ul className="space-y-4">
          {nowItems.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-[#69f2b1] font-mono text-sm shrink-0 mt-0.5">
                //
              </span>
              <span className="text-[#c4c7c8] text-lg leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* FOOTER */}
        <footer className="pt-16 mt-16 border-t border-[#3d4a41] text-center">
          <p
            className="technical-label opacity-50"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            Published on {publishedOn} and updated on {updatedOn}
          </p>
        </footer>
      </main>
    </div>
  );
}
