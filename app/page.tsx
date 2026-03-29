import { Mail, Github, Linkedin } from "lucide-react";

export default function CV() {
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

      <main className="max-w-6xl mx-auto px-6 py-16 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-y-24">
        {/* HEADER */}
        <header className="md:col-span-12 mb-12">
          <div className="flex flex-col gap-4">
            <span
              className="technical-label uppercase"
              style={{ fontFamily: "var(--font-fira-code)" }}
            >
              programming on a 80286 started it all
            </span>
            <h1 className="mono-header text-5xl md:text-8xl font-bold tracking-tighter text-[#e2e2e8] leading-none uppercase">
              YVES INEICHEN
            </h1>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[#69f2b1] font-medium tracking-tight text-xl md:text-2xl uppercase mono-header">
              <span>Software Engineering</span>
              <span className="text-[#3d4a41] select-none">/</span>
              <span>HPC</span>
              <span className="text-[#3d4a41] select-none">/</span>
              <span>Deep Learning</span>
            </div>
            <a
              href="https://github.com/iff"
              className="flex items-center gap-2 text-[#86948a] text-sm font-mono hover:text-[#e2e2e8] transition-colors no-underline mt-2"
            >
              <Github className="w-4 h-4" />
              github.com/iff
            </a>
          </div>
        </header>

        {/* 00 — LEAD STATEMENT */}
        <section className="md:col-span-4 lg:col-span-3 mt-16 md:mt-32">
          <h2
            className="technical-label"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            cat {"<<"}EOF
          </h2>
        </section>
        <section className="md:col-span-8 lg:col-span-9 mt-0 md:mt-32 mb-4">
          <div className="max-w-3xl">
            <p className="mono-header text-2xl md:text-4xl font-medium text-[#e2e2e8] leading-tight">
              ENGINEERING SCALABLE SYSTEMS AT THE INTERSECTION OF{" "}
              <span className="text-[#69f2b1]">HIGH-PERFORMANCE COMPUTING</span>{" "}
              AND <span className="text-[#69f2b1]">MACHINE INTELLIGENCE</span>.
            </p>
            <p className="text-[#c4c7c8] mt-8 text-lg border-l-2 border-[#3d4a41] pl-6">
              Passionate about distributed systems and system-level optimization
              — currently building and shipping production Rust across start-up
              backends and open-source. The challenge of squeezing performance
              out of complex systems never gets old.
            </p>
          </div>
        </section>

        {/* 01 — PROFESSIONAL HISTORY */}
        <section className="md:col-span-4 lg:col-span-3">
          <h2
            className="technical-label sticky top-12 uppercase"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            01_PROFESSIONAL_EXPERIENCE
          </h2>
        </section>
        <section className="md:col-span-8 lg:col-span-9 space-y-20">
          <div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[#69f2b1] text-sm">
                2018 — 2025
              </span>
              <h3 className="mono-header text-3xl font-bold text-[#e2e2e8]">
                PTC_INC
              </h3>
              <p className="text-[#c4c7c8]">
                Principal Deep Learning Software Engineer
              </p>
              <ul className="text-[#c4c7c8] text-sm space-y-2 mt-2 border-l border-[#3d4a41] pl-4">
                <li>
                  Researching and implementing state of the art{" "}
                  <span className="text-[#69f2b1]">computer vision</span>{" "}
                  architectures for classification, pose estimation, and pose
                  refinement using TensorFlow and PyTorch. Introducing{" "}
                  <span className="text-[#69f2b1]">multi-GPU parallelism</span>{" "}
                  and quantization into production training.
                </li>
                <li>
                  Optimizing networks for on-device inference using
                  LiteRT/CoreML and responsible software engineering practices.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "Docker",
                  "AWS",
                  "Kubernetes",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#333539] text-[10px] text-[#bbcabf] font-mono uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[#69f2b1] text-sm">
                2013 — 2016
              </span>
              <h3 className="mono-header text-3xl font-bold text-[#e2e2e8]">
                IBM_RESEARCH
              </h3>
              <p className="text-[#c4c7c8]">
                Postdoc and Research Staff Member
              </p>
              <ul className="text-[#c4c7c8] text-sm space-y-2 mt-2 border-l border-[#3d4a41] pl-4">
                <li>
                  Developing distributed{" "}
                  <span className="text-[#69f2b1]">
                    randomized linear algebra
                  </span>{" "}
                  algorithms in{" "}
                  <a
                    href="https://github.com/xdata-skylark/libskylark"
                    className="text-[#69f2b1] underline-offset-4 hover:underline no-underline"
                  >
                    libskylark
                  </a>
                  , scaling numerical ML workloads across large clusters using
                  MPI and OpenMP.
                </li>
                <li>
                  Building graph and text analytics pipelines for large-scale
                  data processing.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {["C++", "OpenMP/MPI", "Python", "Java", "Kafka", "NLP"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#333539] text-[10px] text-[#bbcabf] font-mono uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 02 — ACADEMIC & HONORS */}
        <section className="md:col-span-4 lg:col-span-3">
          <h2
            className="technical-label sticky top-12 uppercase"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            02_EDUCATION_&amp;_HONORS
          </h2>
        </section>
        <section className="md:col-span-8 lg:col-span-9 space-y-12">
          <div className="border-l-2 border-[#69f2b1] pl-8 py-2">
            <h4 className="mono-header text-xl font-bold text-[#e2e2e8] uppercase tracking-tight">
              PhD Computer Science
            </h4>
            <p className="text-[#86948a] text-sm font-mono mt-1">
              ETH ZURICH | 2010 — 2013
            </p>
            <p className="text-[#c4c7c8] mt-4 leading-relaxed italic">
              "Parallel multi-objective optimization with applications to
              particle accelerator design"
            </p>
          </div>

          <div className="border-l-2 border-[#3d4a41] pl-8 py-2">
            <h4 className="mono-header text-xl font-bold text-[#e2e2e8] uppercase tracking-tight">
              Master in Computer Science
            </h4>
            <p className="text-[#86948a] text-sm font-mono mt-1">
              ETH ZURICH | 2002 — 2008
            </p>
            <p className="text-[#c4c7c8] mt-4 leading-relaxed">
              <span className="text-[#69f2b1] uppercase">
                Computational science
              </span>{" "}
              with a minor in{" "}
              <span className="text-[#69f2b1] uppercase">compiler design</span>,
              focusing on parallel numerical simulations (
              <span className="text-[#69f2b1] uppercase">HPC</span>)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div>
              <span className="technical-label block mb-4 uppercase">
                HONORS
              </span>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-[#69f2b1] font-mono text-sm shrink-0">
                    [01]
                  </span>
                  <span className="text-[#bbcabf] text-sm">
                    Gordon Bell Prize — "An Extreme-Scale Implicit Solver for
                    Complex-PDEs: Highly Heterogeneous Flow in Earth's Mantle"
                    (2015)
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#69f2b1] font-mono text-sm shrink-0">
                    [02]
                  </span>
                  <span className="text-[#bbcabf] text-sm">
                    PRACE Award — "A Fast and Scalable Low Dimensional Solver
                    for Charged Particle Dynamics in Large Particle
                    Accelerators" (2012)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <span className="technical-label block mb-4 uppercase">
                SKILLS
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Rust",
                  "Python",
                  "C++",
                  "Nix",
                  "MPI",
                  "OpenMP",
                  "CUDA",
                  "TensorFlow",
                  "PyTorch",
                  "CoreML/LiteRT",
                  "Docker",
                  "AWS",
                  "Git/Jujutsu",
                  "Linux/NixOS",
                  "bash/zsh",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-[#c4c7c8] px-2 py-1 border border-[#3d4a41]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 — SYSTEMS & EXPERIMENTS */}
        <section className="md:col-span-4 lg:col-span-3">
          <h2
            className="technical-label sticky top-12 uppercase"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            03_PROJECTS
          </h2>
        </section>
        <section className="md:col-span-8 lg:col-span-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#3d4a41]">
            <div className="bg-[#111317] p-8 border-b border-[#3d4a41] lg:border-r">
              <h4 className="mono-header text-xl font-bold text-[#69f2b1] mb-3">
                AVE.RS
              </h4>
              <p className="text-[#c4c7c8] text-sm leading-relaxed mb-4">
                Async Rust backend using axum, implementing operational
                transformation (OT) for collaborative climbing gym management
                systems through a single API.
              </p>
              <a
                href="https://github.com/iff/ave.rs"
                className="flex items-center gap-2 text-[#69f2b1] text-xs font-mono hover:opacity-70 transition-opacity no-underline mb-4"
              >
                <Github className="w-3 h-3" />
                github.com/iff/ave.rs
              </a>
              <div className="flex flex-wrap gap-2">
                {[
                  "Rust",
                  "TypeScript",
                  "Firestore",
                  "Nix",
                  "Docker",
                  "GCP",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#333539] text-[10px] text-[#bbcabf] font-mono uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#111317] p-8 border-b border-[#3d4a41]">
              <h4 className="mono-header text-xl font-bold text-[#69f2b1] mb-3">
                OSH-OXY
              </h4>
              <p className="text-[#c4c7c8] text-sm leading-relaxed mb-4">
                Simple fuzzy finder TUI to search shell histories, building on
                ratatui and the skim fuzzy matcher algorithm.
              </p>
              <a
                href="https://github.com/iff/osh-oxy"
                className="flex items-center gap-2 text-[#69f2b1] text-xs font-mono hover:opacity-70 transition-opacity no-underline mb-4"
              >
                <Github className="w-3 h-3" />
                github.com/iff/osh-oxy
              </a>
              <div className="flex flex-wrap gap-2">
                {["Rust", "Nix", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#333539] text-[10px] text-[#bbcabf] font-mono uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#111317] p-8 border-b border-[#3d4a41] lg:border-b-0 lg:border-r">
              <h4 className="mono-header text-xl font-bold text-[#69f2b1] mb-3">
                NIHILISTIC-NVIM
              </h4>
              <p className="text-[#c4c7c8] text-sm leading-relaxed mb-4">
                My cosy neovim configuration with lots of customizations for a
                comfortable development environment.
              </p>
              <a
                href="https://github.com/iff/nihilistic-nvim"
                className="flex items-center gap-2 text-[#69f2b1] text-xs font-mono hover:opacity-70 transition-opacity no-underline mb-4"
              >
                <Github className="w-3 h-3" />
                github.com/iff/nihilistic-nvim
              </a>
              <div className="flex flex-wrap gap-2">
                {["Lua", "Nix", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#333539] text-[10px] text-[#bbcabf] font-mono uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#111317] p-8">
              <h4 className="mono-header text-xl font-bold text-[#69f2b1] mb-3">
                RUST_PROJECTS
              </h4>
              <p className="text-[#c4c7c8] text-sm leading-relaxed mb-4">
                Bevy ECS puzzle game, high-throughput data ingestion pipeline
                via sqlx/rayon, GPU-accelerated compute libraries with CUDA
                backends via bindgen/FFI and Python bindings via PyO3.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Rust", "Bevy", "CUDA", "PyO3", "sqlx"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#333539] text-[10px] text-[#bbcabf] font-mono uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 — BEYOND CODE */}
        <section className="md:col-span-4 lg:col-span-3">
          <h2
            className="technical-label sticky top-12 uppercase"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            04_BEYOND_CODE
          </h2>
        </section>
        <section className="md:col-span-8 lg:col-span-9 space-y-6 text-[#c4c7c8] leading-relaxed">
          <p>
            Coffee enthusiast who co-founded a{" "}
            <a
              href="https://roestlabor.coffee"
              className="text-[#69f2b1] underline-offset-4 hover:underline no-underline"
            >
              coffee roastery
            </a>
            , combining passion for quality coffee with entrepreneurial spirit.
          </p>
          <p>
            Ergonomics optimizer focused on split keyboards (Moonlander and{" "}
            <a
              href="https://www.zsa.io/voyager"
              className="text-[#69f2b1] underline-offset-4 hover:underline no-underline"
            >
              Voyager
            </a>
            ), constantly refining{" "}
            <a
              href="https://configure.zsa.io/voyager/layouts/brY5x/latest/1"
              className="text-[#69f2b1] underline-offset-4 hover:underline no-underline"
            >
              layouts and keybindings
            </a>{" "}
            for efficiency and comfort.
          </p>
          <p>
            Family life, bouldering, sport-climbing,{" "}
            <a
              href="https://iff.io"
              className="text-[#69f2b1] underline-offset-4 hover:underline no-underline"
            >
              photography
            </a>
            , and nurturing curiosity by acquiring new skills and knowledge.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="md:col-span-12 pt-16 pb-8 border-t border-[#3d4a41] text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 technical-label text-[#86948a]">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <a
                href="mailto:iff@yvesineichen.com"
                className="hover:text-[#69f2b1] transition-colors no-underline"
              >
                iff@yvesineichen.com
              </a>
            </div>
            <span className="text-[#3d4a41] select-none">/</span>
            <div className="flex items-center gap-2">
              <Github className="w-3 h-3" />
              <a
                href="https://github.com/iff"
                className="hover:text-[#69f2b1] transition-colors no-underline"
              >
                iff
              </a>
            </div>
            <span className="text-[#3d4a41] select-none">/</span>
            <div className="flex items-center gap-2">
              <Linkedin className="w-3 h-3" />
              <a
                href="https://linkedin.com/in/yvesineichen"
                className="hover:text-[#69f2b1] transition-colors no-underline"
              >
                yvesineichen
              </a>
            </div>
            <span className="text-[#3d4a41] select-none">/</span>
            <span className="opacity-50">© 2026</span>
          </div>
          <p
            className="technical-label opacity-50 mt-4"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            EOF
          </p>
        </footer>
      </main>
    </div>
  );
}
