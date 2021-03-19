import headerLogo from '../images/header-logo.svg';

function Header(props) {
  const handleChangeLang = (e) => props.setLang(e.target.textContent.toLowerCase());

  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Россия"/>
      <p className="header__lang-link" onClick={handleChangeLang}>{props.isLang === 'ru' ? 'En' : 'Ru'}</p>
    </header>
  );
}

export default Header;