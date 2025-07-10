import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

export default function CV() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Yves Ineichen</h1>
          <p className="text-xl text-gray-600 mb-6">Software Engineer</p>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>iff@yvesineichen.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Zurich, Switzerland</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>yvesineichen.dev</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>github.com/iff</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/yvesineichen</span>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">
            About
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate about high-performance computing, distributed systems,
            and system-level optimization, currently exploring Rust in my free
            time with hopes of incorporating it into future professional
            projects. Strong advocate for clean code, test-driven development,
            using Git, Nix, and CI. Always eager to learn new technologies and
            solve complex problems.
          </p>
        </section>

        {/* Experience */}
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
                <li>this</li>
                <li>that</li>
                <li>and more</li>
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
                <li>bla</li>
                <li>bli</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
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
            <p className="text-gray-700">HPC, ...</p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">
                  Master in Computer Science
                </h3>
                <p className="text-gray-600">ETH Zurich</p>
              </div>
              <span className="text-sm text-gray-500">2002 - 2008</span>
            </div>
            <p className="text-gray-700">HPC, ...</p>
          </div>
        </section>

        {/* Skills */}
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
                {["Git", "Docker", "AWS", "Google Cloud"].map((skill) => (
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

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
            Featured Projects
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Aver.rs</h3>
              <p className="text-gray-700 mb-2">Boulder gym management tool.</p>
              <div className="flex flex-wrap gap-2">
                {["Rust", "TypeScript", "Firestore", "Nix", "Git"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-200 pt-6">
          <p>© 2025 Yves Ineichen. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
