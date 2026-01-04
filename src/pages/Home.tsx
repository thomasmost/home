import heroImage from '../images/fantasy-life-bts.jpg';

function Home() {
  return (
    <div className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Writer. Etc.
          </h1>
          <p className="hero-subtitle">
            <em>One of them creative types.</em>
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
