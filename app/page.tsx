import Image from "next/image";
import { EmailCopyButton } from "./EmailCopyButton";

const links = [
  { label: "GitHub", href: "https://github.com/MDerazNasr" },
  {
    label: "Scholar",
    href: "https://scholar.google.ca/citations?user=oPnY09IAAAAJ&hl=en",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-deraz-nasr-21825b203/",
  },
  { label: "CV", href: "/cv.pdf" },
];

const publications = [
  {
    title:
      "One Lens, Many Worlds: A Capability-Typed Interface for World-Model Interpretability",
    venue: "arXiv",
    year: "2026",
    description:
      "Introduces WorldModelLens, a capability-typed adapter and shared hook-and-cache layer for analyzing activations, imagined rollouts, and interventions across heterogeneous world-model architectures.",
    links: [{ label: "paper", href: "https://arxiv.org/abs/2606.09936" }],
  },
  {
    title:
      "Affinity Map: Few-Shot Protein Family Classification via Prototypical Networks",
    venue: "Zenodo",
    year: "2026",
    description:
      "Benchmarks CNN, k-mer, frozen ESM-2, and episodic LoRA encoders for few-shot protein classification, finding that LoRA improves one-shot accuracy but weakens multi-shot prototypes.",
    links: [
      { label: "paper", href: "https://zenodo.org/records/19200508" },
      { label: "code", href: "https://github.com/MDerazNasr/Affinity-Map" },
    ],
  },
];

const projects = [
  {
    name: "3D Reconstruction Platform",
    description:
      "Turns short walkthrough videos into navigable 3D Gaussian scenes through COLMAP pose recovery, remote GPU training, and reconstruction quality gates.",
    href: "https://github.com/MDerazNasr/Dream-nav",
  },
  {
    name: "Motion World Model",
    description:
      "Uses an action-conditioned state-space model and model-predictive control for real-time navigation around moving obstacles in Unreal Engine.",
    href: "https://github.com/MDerazNasr/Unreal-Engine-World-Model",
  },
  {
    name: "OpenVINO VLA Optimization",
    description:
      "Exports, profiles, and optimizes a vision-language-action model for low-latency robot control on Intel GPU hardware.",
    href: "https://github.com/MDerazNasr/openVINO-project-21",
  },
  {
    name: "Reinforcement Learning Race Simulator",
    description:
      "Trains a PPO racing agent with tyre dynamics, pit strategy, safety-car events, multi-agent competition, and real circuit geometry.",
    href: "https://github.com/MDerazNasr/Race-Strategy-Simulator",
  },
];

export default function Home() {
  return (
    <main>
      <header className="masthead">
        <div className="masthead-copy">
          <p className="monogram">MDN / Copenhagen</p>
          <h1>Mohamed Deraz Nasr</h1>
          <p className="intro-text">
            I&apos;m interested in building intelligent systems that can
            understand, predict, and act in the physical world. My interests
            span world models, robotics, 3D perception, and efficient machine
            learning systems. I hope to help turn advances in machine learning
            into reliable systems with real-world impact.
          </p>
          <nav aria-label="Profiles and contact">
            <EmailCopyButton />
            {links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="portrait-frame">
          <Image
            className="portrait"
            src="/profile.jpeg"
            alt="Mohamed Deraz Nasr"
            width={400}
            height={400}
            priority
          />
          <span aria-hidden="true" />
        </div>
      </header>

      <section className="indexed-section" aria-labelledby="publications-title">
        <div className="section-index" aria-hidden="true">
          01
        </div>
        <div>
          <h2 id="publications-title">Publications</h2>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <h3>{publication.title}</h3>
                <p className="meta">
                  {publication.venue} · {publication.year}
                </p>
                <p>{publication.description}</p>
                <div className="entry-links">
                  {publication.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="indexed-section" aria-labelledby="projects-title">
        <div className="section-index" aria-hidden="true">
          02
        </div>
        <div>
          <h2 id="projects-title">Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <article key={project.name}>
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="indexed-section" aria-labelledby="background-title">
        <div className="section-index" aria-hidden="true">
          03
        </div>
        <div>
          <h2 id="background-title">Background</h2>
          <div className="background-list">
            <article>
              <div>
                <h3>Georgia Institute of Technology</h3>
                <p>M.S. in Computer Science</p>
              </div>
              <p>2026–Present</p>
            </article>
            <article>
              <div>
                <h3>University of Ottawa</h3>
                <p>B.Sc. in Software Engineering</p>
              </div>
              <p>2020–2025</p>
            </article>
          </div>
        </div>
      </section>

      <footer>
        <span>Mohamed Deraz Nasr</span>
        <span>Last updated 2026</span>
      </footer>
    </main>
  );
}
