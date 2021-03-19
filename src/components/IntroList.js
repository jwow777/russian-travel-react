function IntroList(props) {
  return (
    <li>{props.isLang === 'ru' ? props.text.ru : props.text.en} <span className="intro__number">{props.value}</span></li>
  );
}

export default IntroList;