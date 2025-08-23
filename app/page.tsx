import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function CV() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Yves Ineichen</h1>
          <p className="text-xl text-gray-600 mb-6">Software Engineer</p>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Zurich, Switzerland</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>iff@yvesineichen.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>
                <a href="https://github.com/iff">github.com/iff</a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <span>
                <a href="https://linkedin.com/in/yvesineichen">
                  linkedin.com/in/yvesineichen
                </a>
              </span>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">
            About
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate about high-performance computing, distributed systems,
            and system-level optimization, currently exploring Rust in my free
            time with hopes of incorporating it into future professional
            projects. Strong advocate for clean code, test-driven development,
            using Git, Nix, and CI.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What really drives me is the challenge of squeezing performance out of 
            complex systems. Programming isn't just my job - it's my passion, and 
            I love exploring the endless possibilities it offers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
            Experience
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">
                    Principal Deep Learning Software Engineer
                  </h3>
                  <p className="text-gray-600">PTC Inc.</p>
                </div>
                <span className="text-sm text-gray-500">2018 - 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>
                  Computer vision: classification, pose estimation, pose
                  refinement using TensorFlow and PyTorch.
                </li>
                <li>
                  Managing single/multi-gpu experiments (as code) on Kubernetes.
                </li>
                <li>
                  Optimizing/exporting networks for on device inference
                  using LiteRT/CoreML.
                </li>
                <li>
                  Responsible for software engineering practices: CI (gha),
                  testing, release management and tooling.
                </li>
                <li>
                  Technologies: Python (uv, ruff, basedpyright), Docker, AWS, 
                  convolutional neural networks, transformers.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">
                    Postdoc and Research Staff Member
                  </h3>
                  <p className="text-gray-600">IBM Research - Zurich</p>
                </div>
                <span className="text-sm text-gray-500">2012 - 2016</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>
                  Contributing to{" "}
                  <a href="https://github.com/xdata-skylark/libskylark">
                    libskylark
                  </a>: an open source software library for distributed randomized numerical 
                  linear algebra with applications to machine learning and statistical data analysis.
                </li>
                <li>Graph analytics</li>
                <li>Text analytics data pipeline</li>
                <li>Technologies: C++, OpenMP/MPI, Python, Java, Kafka, NLP, distributed computing.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
            Education
          </h2>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">
                  Ph.D. Computer Science
                </h3>
                <p className="text-gray-600">ETH Zurich</p>
              </div>
              <span className="text-sm text-gray-500">2009 - 2012</span>
            </div>
            <p className="text-gray-700">
              Parallel multi-objective optimization with applications to
              particle accelerator design
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 mt-8">
              <div>
                <h3 className="text-lg font-semibold">
                  Master in Computer Science
                </h3>
                <p className="text-gray-600">ETH Zurich</p>
              </div>
              <span className="text-sm text-gray-500">2002 - 2008</span>
            </div>
            <p className="text-gray-700">
              Master in computational science with a minor in compiler design
              focusing on parallel numerical simulations (HPC)
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C++", "Rust", "Nix"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">HPC and ML</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "MPI",
                  "OpenMP",
                  "CUDA",
                  "TensorFlow",
                  "PyTorch",
                  "CoreML/LiteRT/ONNX",
                  "distributed computing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Linux/NixOS", "Git", "bash/zsh", "Docker", "AWS", "Google Cloud"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Communication",
                  "Code Review",
                  "Mentoring",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
            Featured Projects
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">ave.rs</h3>
              <p className="text-gray-700 mb-2">
                A Rust-based backend that implements operational transformation
                (OT) for collaborative applications, specifically designed to
                work with multiple climbing gym management systems through a
                single API.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Rust",
                  "TypeScript",
                  "Firestore",
                  "Nix",
                  "Git",
                  "Docker",
                  "Google Cloud",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">muchi</h3>
              <p className="text-gray-700 mb-2">
                Wrapping <a href="https://mochi.cards">Mochi</a> API using reqwest (no
                async) to synchronise my Roam Resarch flashcards to Mochi.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Rust", "Nix", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">nihilistic-nvim</h3>
              <p className="text-gray-700 mb-2">
                My cosy <a href="https://github.com/iff/nihilistic-nvim">neovim configuration</a> with 
                lots of customizations. Makes me feel at home when writing code.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Lua", "Nix", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section className="mb-12 hidden">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
            Awards
          </h2>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold">
                Gordon Bell Prize
              </h3>
            </div>
            <span className="text-sm text-gray-500">2015</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold">
                PRACE Award
              </h3>
            </div>
            <span className="text-sm text-gray-500">2012</span>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
            Beyond Code
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <p>
                Coffee enthusiast who co-founded a <a href="https://roestlabor.coffee">coffee roastery</a>,
                combining passion for quality coffee with entrepreneurial spirit.
              </p>
            </div>
            
            <div>
              <p>
                Ergonomics optimizer with a focus on split keyboards (Moonlander and <a href="https://www.zsa.io/voyager">Voyager</a>),
                constantly refining <a href="https://configure.zsa.io/voyager/layouts/brY5x/latest/1">layouts and keybindings</a>{" "}
                for efficiency and comfort.
              </p>
            </div>

            <div>
              <p>
                I value family life deeply, and I reserve quiet moments for bouldering, sport‑climbing, <a href="https://iff.io">photography</a>, 
                reading, and nurturing my curiosity by acquiring new skills and knowledge.
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm border-t border-gray-200 pt-6">
          <p>last update: 20th August 2025</p>
        </footer>
      </div>
    </div>
  );
}
