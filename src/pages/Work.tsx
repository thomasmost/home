interface WorkItem {
  title: string;
  publication: string;
  year: string;
  url: string;
  description?: string;
}

const comingSoon: WorkItem[] = [
  {
    title: 'Fantasy Life',
    publication: '',
    year: '2026',
    url: 'https://fantasylifefilm.com',
    description: 'A short film about a couple getting out of the house to fight about getting off.',
  },
];

const works: WorkItem[] = [
  {
    title: "'Húsavík' Saved Me During a Breakup. Here's Why It Deserves to Win the Oscar",
    publication: 'USA Today',
    year: '2021',
    url: 'https://www.usatoday.com/story/entertainment/movies/2021/04/20/oscars-husavik-saved-me-during-breakup-why-deserves-win/7245416002/',
    description: 'A personal essay on heartbreak and "Eurovision Song Contest."',
  },
];

const projects = [
  {
    title: 'The Elandrid',
    type: 'Podcast',
    url: 'https://tvtropes.org/pmwiki/pmwiki.php/Podcast/TheElandrid',
    description: 'An epic science fantasy originally recorded as a podcast. That I did not make this TV Tropes page brings me a frankly silly amount of pride!',
  },
  {
    title: 'Romans',
    type: 'Theatre',
    url: 'https://www.romans.nyc',
    description: 'A comedy that was produced at Dixon Place in 2021, exploring modern politics through a reimagining of the Romulus and Remus legend.',
  },
  {
    title: 'Versa',
    type: 'Software',
    url: 'https://versa.org',
    description: 'A secure network for the transmission of business customer data to corporate software platforms. Y Combinator S22 Batch. Pays the bills.',
  },
];

const screenplays = [
  {
    title: "It Didn't Have To Be Like This",
    description: 'After losing her job, her relationship, and her favorite blouse, Mary becomes convinced she is living in an alternate reality, where everything is worse.',
    awards: [
      {
        name: 'LA Screenplay Awards - Summer 2025 Quarter Finalist',
        url: 'https://lascreenplayawards.com/result/',
      },
      {
        name: 'Save the Cat! Screenplay Challenge - Top 25',
        url: 'https://savethecat.com/news/save-the-cat-2025-screenplay-challenge-top-25-announced',
      },
    ],
  },
];

function Work() {
  return (
    <>
      <section className="section">
        <h1 className="hero-title">Work</h1>
        <p className="text-muted">
          Selected writing, projects, and creative endeavors.
        </p>
      </section>
      <section>
        <h2 className="section-title">Coming Soon</h2>
        {comingSoon.map((work) => (
          <a
            key={work.url}
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-item"
          >
            <div className="work-title">{work.title}</div>
            <div className="work-meta">
              {work.year}
            </div>
            {work.description && (
              <p className="card-description mt-4">{work.description}</p>
            )}
          </a>
        ))}
      </section>
      <br />

      <section className="section">
        <h2 className="section-title">Screenwriting</h2>
        {screenplays.map((script) => (
          <div key={script.title} className="work-item">
            <div className="work-title">{script.title}</div>
            {script.description && (
              <p className="card-description mt-4">{script.description}</p>
            )}
            <ul style={{ marginTop: '0.5rem', listStyle: 'none', padding: 0 }}>
              {script.awards.map((award) => (
                <li key={award.url} style={{ marginBottom: '0.25rem' }}>
                  <a
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: 'inherit' }}
                  >
                    {award.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <br />

      <section className="section">
        <h2 className="section-title">Published Writing</h2>
        {works.map((work) => (
          <a
            key={work.url}
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-item"
          >
            <div className="work-title">{work.title}</div>
            <div className="work-meta">
              {work.publication} · {work.year}
            </div>
            {work.description && (
              <p className="card-description mt-4">{work.description}</p>
            )}
          </a>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Other Projects</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <div className="card-title">{project.title}</div>
              <div className="card-meta">{project.type}</div>
              <p className="card-description">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Work;
