import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="site-title">
            Thomas Constantine Moore
          </Link>
          <nav className="nav">
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link
              to="/work"
              className={`nav-link ${isActive('/work') ? 'active' : ''}`}
            >
              Work
            </Link>
            <Link
              to="/poetry"
              className={`nav-link ${isActive('/poetry') ? 'active' : ''}`}
            >
              Poetry
            </Link>
          </nav>
        </div>
      </header>

      <main className="page">
        <div className="container">
          {children}
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <span className="footer-text">
            © {new Date().getFullYear()} Thomas Constantine Moore
          </span>
        </div>
      </footer>
    </>
  );
}

export default Layout;
