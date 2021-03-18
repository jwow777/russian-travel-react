function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer__links">
          <li className="footer__item"><a href="https://yandex.ru/maps" className="footer__link">Карты</a></li>
          <li className="footer__item"><a href="https://yandex.ru/pogoda" className="footer__link">Погода</a></li>
          <li className="footer__item"><a href="https://rasp.yandex.ru" className="footer__link">Расписание</a></li>
          <li className="footer__item"><a href="https://calendar.yandex.ru" className="footer__link">Календарь</a></li>
          <li className="footer__item"><a href="https://travel.yandex.ru" className="footer__link">Путешествия</a></li>
        </ul>
      </nav>
      <p className="footer__copyright">&copy; 2020. Александр Распертов</p>
    </footer>
  );
}

export default Footer;