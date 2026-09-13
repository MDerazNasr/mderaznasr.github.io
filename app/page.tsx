import Image from "next/image";

const links = [
  { label: "Email", href: "mailto:mderaznasr@gmail.com" },
  { label: "GitHub", href: "https://github.com/MDerazNasr" },
  {
    label: "Scholar",
    href: "https://scholar.google.ca/citations?user=oPnY09IAAAAJ&hl=en",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-deraz-nasr-21825b203/",
  },
  { label: "CV", href: "https://mderaznasr.xyz/pdf/resume.pdf" },
];

const researchAreas = [
  {
    number: "01",
    title: "Embodied intelligence",
    text: "World models, planning, and simulation for agents that need to predict before they act.",
  },
  {
    number: "02",
    title: "Efficient inference",
    text: "Making multimodal and generative models fast enough for real-world, real-time systems.",
  },
  {
    number: "03",
    title: "3D & generative systems",
    text: "Reconstruction and learned representations that turn observations into explorable environments.",
  },
];

const publications = [
  {
    year: "2026",
    venue: "arXiv",
    title:
      "One Lens, Many Worlds: A Capability-Typed Interface for World-Model Interpretability",
    description:
      "A shared interface for probing and intervening on world models across recurrent, token-based, and joint-embedding architectures.",
    paper: "https://arxiv.org/abs/2606.09936",
  },
  {
    year: "2026",
    venue: "Zenodo",
    title:
      "Affinity Map: Few-Shot Protein Family Classification via Prototypical Networks",
    description:
      "Few-shot protein classification with ESM-2 representations and episodic prototypical learning for rare protein families.",
    paper: "https://zenodo.org/records/19200508",
    code: "https://github.com/MDerazNasr/Affinity-Map",
  },
];

const projects = [
  {
    index: "01",
    name: "MotionWorld",
    label: "World models · Unreal Engine",
    description:
      "A real-time, action-conditioned world model that lets an Unreal character imagine movement futures, navigate two moving obstacles, and replan from collision-finalized state.",
    result: "0 collisions in the accepted live run · 798 Python tests",
    href: "https://github.com/MDerazNasr/Unreal-Engine-World-Model",
    visual: "world",
  },
  {
    index: "02",
    name: "OpenVINO VLA Optimization",
    label: "GSoC · ML systems",
    description:
      "Exported and profiled a vision-language-action model, then contributed a targeted Intel GPU optimization for its main VLM bottleneck.",
    result: "11.44% lower VLM latency · upstream PR opened",
    href: "https://github.com/MDerazNasr/openVINO-project-21",
    visual: "kernel",
  },
  {
    index: "03",
    name: "DreamNav",
    label: "3D reconstruction · Research prototype",
    description:
      "A local-first pipeline that turns a short walkthrough video into a navigable Gaussian scene using COLMAP, remote GPU training, and reconstruction quality gates.",
    result: "End-to-end prototype · actively improving reconstruction quality",
    href: "https://github.com/MDerazNasr/Dream-nav",
    visual: "scene",
  },
  {
    index: "04",
    name: "FlowRT",
    label: "CUDA · Generative inference",
    description:
      "An experimental inference engine for flow-matching models, exploring persistent trajectory kernels, speculative execution, and time-conditioned INT8 quantization.",
    result: "C++17 · CUDA · CUTLASS · TensorRT",
    href: "https://github.com/MDerazNasr/FlowRT",
    visual: "flow",
  },
];

const experience = [
  {
    date: "Jun 2026 — now",
    role: "Research Engineer Intern",
    org: "Qualia",
    place: "Copenhagen, Denmark",
  },
  {
    date: "May 2026 — now",
    role: "Machine Learning Systems Engineer",
    org: "OpenVINO · Google Summer of Code",
    place: "Remote",
  },
  {
    date: "Jan 2026 — now",
    role: "Graduate Researcher",
    org: "Georgia Institute of Technology",
    place: "Atlanta, Georgia",
  },
  {
    date: "Jan — Apr 2025",
    role: "Machine Learning Engineer Intern",
    org: "Shopify",
    place: "Ottawa, Canada",
  },
  {
    date: "Sep — Dec 2024",
    role: "Undergraduate Researcher",
    org: "University of Ottawa",
    place: "Ottawa, Canada",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ type }: { type: string }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-grid" />
      <span className="node node-a" />
      <span className="node node-b" />
      <span className="node node-c" />
      <span className="trajectory trajectory-a" />
      <span className="trajectory trajectory-b" />
      <span className="visual-code">{type.toUpperCase()}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mohamed Deraz Nasr, home">
          MDN<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="mailto:mderaznasr@gmail.com">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              Machine learning researcher <span>&amp;</span> systems engineer
            </p>
            <h1>
              Mohamed
              <br />
              Deraz Nasr<span className="accent-dot">.</span>
            </h1>
            <p className="hero-lede">
              I build learning systems that connect perception, prediction, and
              action—from world models and simulation to efficient model
              inference.
            </p>
            <ul className="social-links" aria-label="Profiles and contact">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label} <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-frame">
              <Image
                src="https://avatars.githubusercontent.com/u/85366477?v=4"
                alt="Mohamed Deraz Nasr"
                width="460"
                height="460"
                priority
              />
              <div className="portrait-scan" aria-hidden="true" />
            </div>
            <div className="portrait-caption">
              <span>Copenhagen, DK</span>
              <span>2026</span>
            </div>
          </div>
        </section>

        <section className="currently" aria-label="Current positions">
          <span className="status-dot" aria-hidden="true" />
          <p>
            Currently pursuing an M.S. in Computer Science at Georgia Tech,
            researching at Qualia, and contributing to OpenVINO through Google
            Summer of Code.
          </p>
        </section>

        <section className="about-section" id="about">
          <div className="section-label">About / Focus</div>
          <div className="about-content">
            <p className="about-statement">
              I&apos;m interested in the boundary between <em>modeling</em> and
              <em> systems</em>: how agents learn useful representations of the
              world, and how we make those models reliable and fast enough to
              run outside a notebook.
            </p>
            <div className="research-grid">
              {researchAreas.map((area) => (
                <article key={area.number}>
                  <span className="area-number">{area.number}</span>
                  <h2>{area.title}</h2>
                  <p>{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Research in code.</h2>
            </div>
            <p>
              A mix of research, open-source contributions, and systems
              experiments. I value reproducible demos and honest scope.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <ProjectVisual type={project.visual} />
                <div className="project-topline">
                  <span>{project.index}</span>
                  <span>{project.label}</span>
                </div>
                <h3>
                  {project.name} <Arrow />
                </h3>
                <p>{project.description}</p>
                <div className="project-result">{project.result}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="publications-section" id="publications">
          <div className="section-label">Publications</div>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <div className="publication-meta">
                  <span>{publication.year}</span>
                  <span>{publication.venue}</span>
                </div>
                <div>
                  <h2>{publication.title}</h2>
                  <p>{publication.description}</p>
                  <div className="publication-links">
                    <a href={publication.paper} target="_blank" rel="noreferrer">
                      Paper <Arrow />
                    </a>
                    {publication.code ? (
                      <a href={publication.code} target="_blank" rel="noreferrer">
                        Code <Arrow />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-heading experience-heading">
            <div>
              <p className="section-kicker">Experience</p>
              <h2>Learning by building.</h2>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-row" key={`${item.org}-${item.date}`}>
                <time>{item.date}</time>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.org}</p>
                </div>
                <span>{item.place}</span>
              </article>
            ))}
          </div>

          <div className="education-row">
            <div className="section-label">Education</div>
            <div className="education-items">
              <article>
                <span>2026 — 2027</span>
                <h3>Georgia Institute of Technology</h3>
                <p>M.S. Computer Science · GPA 3.9</p>
              </article>
              <article>
                <span>2020 — 2025</span>
                <h3>University of Ottawa</h3>
                <p>B.Sc. Software Engineering · GPA 3.7</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker">Let&apos;s talk</p>
          <h2>
            Interested in embodied AI,
            <br />
            world models, or fast inference?
          </h2>
          <a className="contact-link" href="mailto:mderaznasr@gmail.com">
            mderaznasr@gmail.com <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <span>© 2026 Mohamed Deraz Nasr</span>
        <span>Built with curiosity and careful benchmarks.</span>
      </footer>
    </>
  );
}
