import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';

function App() {
  const [selectedImage, setSelectedImage] = React.useState(false);
  
  function closePopup() {
    setSelectedImage(false);
  }

  return (
    <>
      <Header/>
      <Main onImageClick={setSelectedImage}/>
      <Footer/>
      <ImagePopup image={selectedImage} onClose={closePopup}/>
    </>
  );
}

export default App;