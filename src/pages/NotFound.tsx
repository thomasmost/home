import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="section text-center" style={{ marginTop: '4rem' }}>
      <h1 className="hero-title">404</h1>
      <p className="hero-subtitle">Page not found.</p>
      <Link to="/" style={{ textDecoration: 'underline' }}>
        Return home
      </Link>
    </div>
  );
}

export default NotFound;
