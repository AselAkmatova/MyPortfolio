import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__header-nav header-nav">
        <Link className="header-nav__link" to={`/home`}>
          Home
        </Link>
        <Link className="header-nav__link" to={`/about`}>
          About
        </Link>
        <Link className="header-nav__link" to={`/portfolio`}>
          Portfolio
        </Link>
        <Link className="header-nav__link" to={`/contact`}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
