import { useState } from 'react';
import heroImage from '../images/fantasy-life-bts.jpg';

const HERO_TAGLINES = [
  'One of them creative types.',
  'Often found thinking about something else.',
  'Absent-minded digressor.',
  'High-level bard in a low-magic setting.',
];

function Home() {
  const [tagline] = useState(
    () => HERO_TAGLINES[Math.floor(Math.random() * HERO_TAGLINES.length)]
  );

  return (
    <div className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Writer. Etc.
          </h1>
          <p className="hero-subtitle">
            <em className="hero-tagline">{tagline}</em>
            <br />
            Seattle &rarr; Brooklyn.
          </p>
        </div>
        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="Behind the scenes of Fantasy Life"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
