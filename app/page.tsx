const links = {
  github: "https://github.com/NythralHome/cmesh",
  docs: "https://github.com/NythralHome/cmesh/tree/main/docs",
  releases: "https://github.com/NythralHome/cmesh/releases/latest",
  manager: "https://alpha.cmesh.nythral.com",
};

const stats = [
  ["Status", "Alpha testnet"],
  ["Current workload", "Distributed compute benchmarks"],
  ["Next milestone", "First model inference job"],
  ["License", "Open source"],
];

const roadmap = [
  "Private cluster manager with invite-based worker joins",
  "Desktop worker app for resource limits, status, logs, and disconnect",
  "Benchmark jobs that prove aggregate compute grows with workers",
  "Model workload runner for small inference tasks",
  "Storage sharing layer for model artifacts and cache coordination",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="/">
            <span className="brandMark" aria-hidden="true" />
            CMesh
          </a>
          <div className="navLinks">
            <a href={links.github}>GitHub</a>
            <a href={links.docs}>Docs</a>
            <a href={links.releases}>Releases</a>
            <a href={links.manager}>Alpha manager</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">Open-source AI compute clustering</div>
            <h1>CMesh</h1>
            <p>
              A decentralized-ready protocol and toolkit for turning trusted
              machines into a private AI compute cluster.
            </p>
            <div className="heroActions">
              <a className="button primary" href={links.releases}>
                Download worker
              </a>
              <a className="button" href={links.github}>
                Contribute on GitHub
              </a>
            </div>
          </div>

          <div className="networkPanel" aria-label="CMesh cluster diagram">
            <div className="meshCanvas">
              <span className="node manager">manager</span>
              <span className="node n1">mac arm</span>
              <span className="node n2">linux gpu</span>
              <span className="node n3">windows</span>
              <span className="node n4">storage</span>
              <span className="link l1" />
              <span className="link l2" />
              <span className="link l3" />
              <span className="link l4" />
              <span className="pulse p1" />
              <span className="pulse p2" />
            </div>
          </div>
        </div>
      </section>

      <section className="statusBand">
        {stats.map(([label, value]) => (
          <div className="stat" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="section">
        <div>
          <h2>What problem it solves</h2>
          <p>
            Small teams often have idle laptops, workstations, and rented
            machines, but no simple way to combine them into one controlled
            compute pool. CMesh starts with private clusters: invite workers,
            set resource limits, run jobs, and measure whether more machines
            actually increase usable compute.
          </p>
        </div>
        <div className="callout">
          <strong>First release value</strong>
          <p>
            Prove connection, resource reporting, benchmark execution, and job
            result collection across real machines before moving into model
            inference.
          </p>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Current capabilities</h2>
          <ul className="checkList">
            <li>Cluster manager with local persistence</li>
            <li>Worker desktop app for macOS, Windows, and Linux</li>
            <li>Resource limits for CPU, memory, storage, GPU, and VRAM</li>
            <li>Compute jobs and cluster benchmark aggregation</li>
            <li>Operator dashboard for workers, jobs, and benchmarks</li>
          </ul>
        </div>
        <div>
          <h2>Roadmap</h2>
          <ol className="roadmap">
            {roadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contribute">
        <div>
          <h2>Built for contributors</h2>
          <p>
            The project is intentionally shaped like an open-source
            infrastructure project: readable architecture docs, focused issues,
            release artifacts, and a clear path from local testing to real
            private clusters.
          </p>
        </div>
        <div className="contributeActions">
          <a className="button primary" href={links.github}>
            Open repository
          </a>
          <a className="button" href={links.docs}>
            Read architecture
          </a>
        </div>
      </section>
    </main>
  );
}
