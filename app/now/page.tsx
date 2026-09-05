// Personal websites often have a link that says “now” that tells you what this person is focused on at this point in their life. It’s called a “now page”.
import type { ReactNode } from "react";
import Link from "next/link";

const linkClass =
  "text-[#69f2b1] underline-offset-4 hover:underline no-underline";

const nowItems: ReactNode[] = [
  <>
    deep dive into dependent types introduced by Martin-Löf and the propositions
    as types concept
  </>,
  <>
    working my way through{" "}
    <a href="https://mlir.llvm.org/" className={linkClass}>
      MLIR
    </a>{" "}
    concepts to write passes and dialects for our compiler
  </>,
  <>
    revisiting controls and messages in{" "}
    <a href="https://bevy.org" className={linkClass}>
      Bevy
    </a>{" "}
    to improve train interactions
  </>,
  <>understanding rustc, hoping to start contributing small fixes</>,
];

const publishedOn = "2026-07-24";
const updatedOn = "2026-09-05";

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
          <Link
            href="/"
            className="technical-label uppercase hover:text-[#69f2b1] transition-colors no-underline"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            ← yves ineichen
          </Link>
          <h1 className="mono-header text-5xl md:text-7xl font-bold tracking-tighter text-[#e2e2e8] leading-none uppercase mt-4">
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
