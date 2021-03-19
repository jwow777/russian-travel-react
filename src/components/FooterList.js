function FooterList(props) {
  return (
    <li className="footer__item">
      <a href={props.link} className="footer__link">{props.isLang === 'ru' ? props.text.ru : props.text.en}</a>
    </li>
  );
}

export default FooterList;