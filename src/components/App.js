import { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { TranslationContext, translations } from "../contexts/TranslationContext";

function App() {
  const [selectedImage, setSelectedImage] = useState(false);
  const [lang, setLang] = useState("ru");
  
  function closePopup() {
    setSelectedImage(false);
  }
  
  return (
    <TranslationContext.Provider value={translations[lang]}>
      <Header isLang={lang} setLang={setLang}/>
      <Main onImageClick={setSelectedImage} isLang={lang}/>
      <Footer isLang={lang}/>
      <ImagePopup image={selectedImage} onClose={closePopup} />
    </TranslationContext.Provider>
  );
}

export default App;