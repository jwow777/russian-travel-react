function Place(props) {
  function handleClick() {
    props.onImageClick(props);
  }
  return (
    <div className="place">
      <h2 className="place__title">{props.isLang === 'ru' ? props.name.ru : props.name.en}</h2>
      <div className="place__website">
        <p className="place__url-heading">URL</p>
        <a href={props.link} className="place__link">{props.linkName}</a>
      </div>
      <img src={props.imageLink} alt={props.isLang === 'ru' ? props.name.ru : props.name.en} className="place__image" onClick={handleClick}/>
      <div>
        <p className="place__paragraph">
          {props.isLang === 'ru' ? props.descriptionOne.ru : props.descriptionOne.en}
        </p>
        {props.descriptionTwo && (
          <p className="place__paragraph">
            {props.isLang === 'ru' ? props.descriptionTwo.ru : props.descriptionTwo.en}
          </p>
        )}
      </div>
    </div>
  );
}

export default Place;