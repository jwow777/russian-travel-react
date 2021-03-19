import leadPolka from '../images/lead-polka.jpg';
import photoGrid from '../utils/photoGrid';
import place from '../utils/place';
import introList from '../utils/introList';
import PhotoGrid from './PhotoGrid';
import Place from './Place';
import IntroList from './IntroList';
import { TranslationContext } from "../contexts/TranslationContext";
import { useContext } from "react";

function Main(props) {
  const translation = useContext(TranslationContext);
  return (
    <main className="content">
      <div className="content__wrapper">
        <section className="lead">
          <h1 className="lead__title">{translation.leadTitle}</h1>
          <p className="lead__subtitle">{translation.leadSubtitle}</p>
          <img src={leadPolka} className="lead__image" alt="Вагон поезда" />
          <p className="lead__caption">{translation.leadCaption}</p>
        </section>
        <section className="intro">
          <h2 className="intro__title">{translation.introTitle}</h2>
          <p className="intro__text">{translation.introText}</p>
          <ul className="intro__list">
            {introList.map((item,index) => 
              <IntroList 
                text={item.text}
                value={item.value}
                isLang={props.isLang}
                key={index}
              />
            )}
          </ul>
        </section>
      </div>
      <section className="photo-grid">
        {photoGrid.map(item => 
          <PhotoGrid 
            name={item.name}
            imageLink={item.link}
            key={item.id}
            onImageClick={props.onImageClick}
          />
        )}
      </section>
      <section className="places">
        {place.map((item,index) => 
          <Place 
            name={item.name} 
            link={item.link} 
            linkName={item.linkName} 
            imageLink={item.imageLink} 
            descriptionOne={item.descriptionOne} 
            descriptionTwo={item.descriptionTwo} 
            isLang={props.isLang}
            key={index}
            onImageClick={props.onImageClick}
          />
        )}
      </section>
      <section className="cover">
        <a href="https://stampsy.com/na-elektrichkakh-do-baikala" className="cover__overlay">
          <h2 className="cover__title">{translation.coverTitle}</h2>
          <p className="cover__subtitle">{translation.coverSubtitle}</p>
        </a>
      </section>
    </main>
  );
}

export default Main;