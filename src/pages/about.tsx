import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="section">
        <h1 className="hero-title">About</h1>
        <p>
          I'm a writer, actor, and software engineer based in New York City.
          I'm drawn to stories that explore the absurd, the poignant, and the
          spaces in between.
        </p>
        <p>
          I created the podcast{' '}
          <a href="https://www.thomastellsastory.com" target="_blank" rel="noopener noreferrer">
            <em>Thomas Tells a Story</em>
          </a>
          , an anthology of original fiction. In 2021, I produced{' '}
          <a href="https://www.romans.nyc" target="_blank" rel="noopener noreferrer">
            <em>Romans</em>
          </a>
          , a play at Dixon Place in the Lower East Side.
        </p>
        <p>
          Read more of my work on the{' '}
          <Link to="/work">Work</Link> page, or explore some{' '}
          <Link to="/poetry">poetry</Link>.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Achievements</h2>
        <div className="card-grid">
          <div className="achievement">
            <svg className="achievement-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="achievement-content">
              <div className="achievement-title">USA Today Published Contributor</div>
              <p className="achievement-description">
                Entertainment commentary reaching millions of readers
              </p>
            </div>
          </div>
          <div className="achievement">
            <svg className="achievement-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
            <div className="achievement-content">
              <div className="achievement-title">Dixon Place Production</div>
              <p className="achievement-description">
                Produced and staged "Romans" at the acclaimed NYC venue
              </p>
            </div>
          </div>
          <div className="achievement">
            <svg className="achievement-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
            <div className="achievement-content">
              <div className="achievement-title">Podcast Creator</div>
              <p className="achievement-description">
                "Thomas Tells a Story" - original fiction anthology
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
