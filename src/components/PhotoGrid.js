function PhotoGrid(props) {
  function handleClick() {
    props.onImageClick(props);
  }
  return (
    <div style={{backgroundImage: `url(${props.imageLink})`}} className="photo-grid__item" onClick={handleClick}></div>
  );
}

export default PhotoGrid;