function Place(props) {
  function handleClick() {
    props.onImageClick(props);
  }
  return (
    <div className="place">
      <h2 className="place__title">{props.name}</h2>
      <div className="place__website">
        <p className="place__url-heading">URL</p>
        <a href={props.link} className="place__link">{props.linkName}</a>
      </div>
      <img src={props.imageLink} alt={props.name} className="place__image" onClick={handleClick}/>
      <div>
        <p className="place__paragraph">
          {props.descriptionOne}
        </p>
        {props.descriptionTwo && (
          <p className="place__paragraph">
            {props.descriptionTwo}
          </p>
        )}
      </div>
    </div>
  );
}

export default Place;