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

const publications = [
  {
    title:
      "One Lens, Many Worlds: A Capability-Typed Interface for World-Model Interpretability",
    venue: "arXiv, 2026",
    summary:
      "A common interface for interpreting recurrent, token-based, and joint-embedding world models.",
    links: [{ label: "paper", href: "https://arxiv.org/abs/2606.09936" }],
  },
  {
    title:
      "Affinity Map: Few-Shot Protein Family Classification via Prototypical Networks",
    venue: "Zenodo, 2026",
    summary:
      "Few-shot protein classification using ESM-2 representations and prototypical learning.",
    links: [
      { label: "paper", href: "https://zenodo.org/records/19200508" },
      { label: "code", href: "https://github.com/MDerazNasr/Affinity-Map" },
    ],
  },
];

const projects = [
  {
    name: "MotionWorld",
    description:
      "Real-time world-model planning and control in Unreal Engine.",
    href: "https://github.com/MDerazNasr/Unreal-Engine-World-Model",
  },
  {
    name: "OpenVINO VLA Optimization",
    description:
      "Export, profiling, and Intel GPU optimization for a vision-language-action model.",
    href: "https://github.com/MDerazNasr/openVINO-project-21",
  },
  {
    name: "DreamNav",
    description:
      "A pipeline that turns walkthrough video into a navigable Gaussian scene.",
    href: "https://github.com/MDerazNasr/Dream-nav",
  },
  {
    name: "FlowRT",
    description:
      "Experimental C++ and CUDA inference for flow-matching models.",
    href: "https://github.com/MDerazNasr/FlowRT",
  },
];

export default function Home() {
  return (
    <main>
      <header className="intro">
        <Image
          className="portrait"
          src="https://avatars.githubusercontent.com/u/85366477?v=4"
          alt="Mohamed Deraz Nasr"
          width={136}
          height={136}
          priority
        />
        <div>
          <h1>Mohamed Deraz Nasr</h1>
          <p className="role">ML researcher and systems engineer</p>
          <nav aria-label="Profiles and contact">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="about" aria-label="About">
        <p>
          I am an M.S. student in Computer Science at Georgia Tech. I currently
          work as a research engineer intern at Qualia and contribute to
          OpenVINO through Google Summer of Code.
        </p>
        <p>
          My interests include world models, embodied AI, 3D reconstruction,
          and efficient inference. I like work that connects machine learning
          research with reliable systems.
        </p>
      </section>

      <section>
        <h2>Publications</h2>
        <div className="item-list">
          {publications.map((publication) => (
            <article className="item" key={publication.title}>
              <h3>{publication.title}</h3>
              <p className="meta">{publication.venue}</p>
              <p>{publication.summary}</p>
              <p className="item-links">
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
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Selected projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article key={project.name}>
              <h3>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Background</h2>
        <div className="background-list">
          <p>
            <strong>Georgia Institute of Technology</strong>
            <span>M.S. Computer Science, 2026–2027</span>
          </p>
          <p>
            <strong>University of Ottawa</strong>
            <span>B.Sc. Software Engineering, 2020–2025</span>
          </p>
          <p>
            Previously at Shopify, the University of Ottawa, and March Networks.
          </p>
        </div>
      </section>

      <footer>
        <p>
          Feel free to reach out at{" "}
          <a href="mailto:mderaznasr@gmail.com">mderaznasr@gmail.com</a>.
        </p>
      </footer>
    </main>
  );
}
