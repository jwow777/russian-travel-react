import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Россия" />
      <ul className="header__lang-links">
        <li><a href="/" className="header__lang-link header__lang-link_true">Ru</a></li>
        <li><a href="/" className="header__lang-link">En</a></li>
      </ul>
    </header>
  );
}

export default Header;