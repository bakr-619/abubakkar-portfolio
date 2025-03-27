import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="text-center py-16 bg-gradient-to-r from-black to-gray-800">
        <h1 className="text-5xl font-bold text-cyan-400">Abu Bakkar</h1>
        <p className="mt-2 text-lg text-gray-300">
          A Cloud Engineer crafting scalable, innovative solutions.
        </p>
      </header>

      {/* Intro */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold">Cloud Engineer</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Passionate about building resilient cloud architectures and optimizing infrastructure for the future.
        </p>
      </section>

      {/* Stats */}
      <section className="flex flex-wrap justify-center gap-10 py-12 bg-gray-900">
        <div className="text-center">
          <span className="text-4xl font-bold text-cyan-400">+5</span>
          <p className="mt-2 text-gray-300">Years of Experience</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold text-cyan-400">+10</span>
          <p className="mt-2 text-gray-300">Projects Completed</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold text-cyan-400">+3</span>
          <p className="mt-2 text-gray-300">Certifications Earned</p>
        </div>
      </section>

      {/* Skills */}
      <section className="text-center py-12">
        <h3 className="text-2xl font-semibold">Skills & Tools</h3>
        <p className="mt-4 text-gray-400">
          AWS, Azure, Docker, Kubernetes, Terraform, CI/CD Pipelines
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h3 className="text-2xl font-semibold">Let's Work Together</h3>
        <a
          href="mailto:your.email@example.com"
          className="mt-4 inline-block px-6 py-3 bg-cyan-400 text-black font-semibold rounded-md hover:bg-cyan-500 transition"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}

export default App;