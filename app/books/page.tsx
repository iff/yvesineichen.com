import Link from "next/link";

type Book = {
  title: string;
  author: string;
  standout?: boolean;
};

const booksByYear: { year: number | string; books: Book[] }[] = [
  {
    year: 2026,
    books: [
      {
        title: "* Breakneck: China's Quest to Engineer the Future",
        author: "Dan Wang",
      },
      {
        title:
          "The Proof in the Code: How a Truth Machine Is Transforming Math and AI",
        author: "Kevin Hartnett",
        standout: true,
      },
      {
        title:
          "The Infinity Machine: Demis Hassabis, Deep Mind and the Quest for Superintelligence",
        author: "Sebastian Mallaby",
      },
      {
        title: "The Soul of A New Machine",
        author: "Tracy Kidder",
        standout: true,
      },
      {
        title: "Stormlight Archive",
        author: "Brandon Sanderson",
        standout: true,
      },
    ],
  },
  {
    year: 2025,
    books: [
      {
        title: "There Is No Antimemetics Division",
        author: "qntm",
      },
      {
        title: "Chip War: The Fight for the World's Most Critical Technology",
        author: "Chris Miller",
        standout: true,
      },
      {
        title:
          "Hunt, Gather, Parent: What Ancient Cultures Can Teach us about Rising Children",
        author: "Michaeleen Doucleff",
      },
      { title: "Source Code: My Beginnings", author: "Bill Gates" },
      {
        title: "The Fabric of Reality: Towards a Theory of Everything",
        author: "David Deutsch",
        standout: true,
      },
    ],
  },
  {
    year: 2024,
    books: [
      {
        title: "Bobiverse (series)",
        author: "Dennis Taylor",
      },
      {
        title: "Bravery: Chasing Dreams, Befriending Pain, and Other Big Ideas",
        author: "Alexi Pappas",
        standout: true,
      },
      {
        title: "Tomorrow, and Tomorrow, and Tomorrow: A novel",
        author: "Gabrielle Zevin",
      },
      {
        title: "Novelist as a Vocation: An exploration of a writer's life",
        author: "Haruki Murakami",
      },
    ],
  },
  {
    year: 2023,
    books: [
      {
        title:
          "The Beginning of Infinity: Explanations that Transform The World",
        author: "David Deutsch",
        standout: true,
      },
      {
        title: "Skin in the Game: Hidden Asymmetries in Daily Life",
        author: "Nassim Nicholas Taleb",
      },
    ],
  },
  {
    year: 2022,
    books: [
      {
        title: "Worth the Candle",
        author: "Alexander Wales",
      },
      {
        title: "The Expanse (series)",
        author: "James Corey",
      },
      {
        title: "The Dawn of Everything: A New History of Humanity",
        author: "David Graeber",
      },
      {
        title:
          "The Scout Mindset: Why Some People See Things Clearly and Others Don't",
        author: "Julia Galef",
      },
      {
        title: "Stories of Your Life and Others",
        author: "Ted Chiang",
      },
    ],
  },
  {
    year: 2020,
    books: [
      {
        title: "Exhalation",
        author: "Ted Chiang",
      },
      {
        title: "A Brief History Series",
        author: "Yuval Noah Harari",
        standout: true,
      },
    ],
  },
  {
    year: 2019,
    books: [
      {
        title: "A Wild Sheep Chase",
        author: "Haruki Murakami",
        standout: true,
      },
      {
        title: "The Vital Question: Why is life the way it is?",
        author: "Nick Lane",
        standout: true,
      },
      {
        title: "The Order of Time",
        author: "Carlo Rovelli",
      },
      {
        title: "Rationality: From AI to Zombies",
        author: "Eliezer Judkowsky",
      },
      {
        title: "Der Teil und das Ganze: Gespraeche im Umkreis der Atomphysik",
        author: "Werner Heisenberg",
        standout: true,
      },
      {
        title: "Surely You're Joking, Mr. Feynman!",
        author: "Richard P. Feynman",
        standout: true,
      },
      {
        title: "Welcome to the Universe: An Astrophysical Tour",
        author: "Neil deGrasse Tyson",
        standout: true,
      },
    ],
  },
  {
    year: 2018,
    books: [
      {
        title:
          "Gravitational Waves: How Einstein's spacetime ripples reveal the secrets of the universe",
        author: "Brian Clegg",
      },
      {
        title: "The Elephant in the Brain: Hidden Motives in Everyday Life",
        author: "Robin Hanson",
      },
      {
        title: "Nonviolent Communication: A Language of Life",
        author: "Marshall Rosenberg",
      },
      {
        title: "Surfing Uncertainty: Prediction, Action, and the Embodied Mind",
        author: "Andy Clark",
        standout: true,
      },
      {
        title: "Einstein: His Life and the Universe",
        author: "Walter Isaacson",
      },
    ],
  },
  {
    year: "< 2018",
    books: [
      {
        title: "The Man Who Knew Infinity: A Life of the Genius Ramanujan",
        author: "Robert Kanigel",
      },
      {
        title: "How to Create a Mind: The Secret of Human Thought Revealed",
        author: "Ray Kurzweil",
      },
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
      },
      {
        title: "Fermant's Last Theorem",
        author: "Simon Singh",
      },
      {
        title: "The Kingkiller Chronicle",
        author: "Patrick Rothfuss",
      },
      {
        title: "Hackers: Heroes of the Computer Revolution",
        author: "Steven Levy",
      },
      {
        title: "Masters of Doom",
        author: "David Kushner",
      },
      {
        title: "On Writing: A Memoir of the Craft",
        author: "Stephen King",
      },
      {
        title: "Wheel of Time",
        author: "Robert Jordan, Brandon Sanderson",
      },
      {
        title: "The Selfish Gene",
        author: "Richard Dawkins",
      },
      {
        title: "The Rational Optimist",
        author: "Matt Ridely",
      },
      {
        title: "The Red Queen",
        author: "Matt Ridely",
      },
      {
        title:
          "Art & Fear: Obeservations on the Perils (and Rewards) of Artmaking",
        author: "David Bayles, Ted Orland",
      },
    ],
  },
];

export default function Books() {
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
            BOOKS
          </h1>
          <p className="text-[#c4c7c8] mt-4 text-lg">
            A curated list of what I've read, by year.{" "}
            <span className="text-[#69f2b1]">Highlighted</span> ones left a
            mark.
          </p>
        </header>

        {/* YEARS */}
        <div className="space-y-16">
          {booksByYear.map(({ year, books }) => (
            <section key={year}>
              <h2 className="mono-header text-3xl md:text-4xl font-bold text-[#e2e2e8] mb-6 pb-2 border-b border-[#3d4a41]">
                {year}
              </h2>
              <ul className="space-y-3">
                {books.map((book) => (
                  <li
                    key={book.title}
                    className={
                      book.standout ? "text-[#69f2b1]" : "text-[#c4c7c8]"
                    }
                  >
                    <span className="font-medium">{book.title}</span>
                    <span
                      className={
                        book.standout ? "text-[#69f2b1]/70" : "text-[#86948a]"
                      }
                    >
                      {" "}
                      — {book.author}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="pt-16 mt-16 border-t border-[#3d4a41] text-center">
          <p
            className="technical-label opacity-50"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            EOF
          </p>
        </footer>
      </main>
    </div>
  );
}
