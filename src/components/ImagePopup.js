function ImagePopup(props) {
  return (
    <div className={`popup${props.image ? ' popup_opened' : ''}`} onClick={props.onClose}>
      <div className='popup__container'>
        <img className='popup__image' src={props.image ? props.image.imageLink : undefined} alt={props.image.name} />
      </div>
    </div>
  );
}

export default ImagePopup;