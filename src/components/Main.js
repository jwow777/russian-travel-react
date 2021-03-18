import leadPolka from '../images/lead-polka.jpg';
import photoGrid from '../utils/photoGrid';
import place from '../utils/place';
import PhotoGrid from './PhotoGrid';
import Place from './Place';

function Main(props) {
  return (
    <main className="content">
      <div className="content__wrapper">
        <section className="lead">
          <h1 className="lead__title">Путешествия по России</h1>
          <p className="lead__subtitle">Настоящая страна не в выпусках новостей, а здесь.</p>
          <img src={leadPolka} className="lead__image" alt="Вагон поезда" />
          <p className="lead__caption">ваша полка — верхняя</p>
        </section>
        <section className="intro">
          <h2 className="intro__title">Чего мы там не видели?</h2>
          <p className="intro__text">
            По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая
            вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов.
            Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране. Мы выбрали и описали
            некоторые интересные места, достойные вашего отпуска.
          </p>
          <ul className="intro__list">
            <li>Часовых поясов <span className="intro__number">11</span></li>
            <li>Объектов природного наследия ЮНЕСКО <span className="intro__number">12</span></li>
            <li>Объектов культурного наследия ЮНЕСКО <span className="intro__number">16</span></li>
            <li>Природных заповедников <span className="intro__number">105</span></li>
            <li>Аэропортов <span className="intro__number">241</span></li>
          </ul>
        </section>
      </div>
      <section className="photo-grid">
        {photoGrid.map(item => <PhotoGrid name={item.name} imageLink={item.link} key={item.id} onImageClick={props.onImageClick}/>)}
      </section>
      <section className="places">
        {place.map(item => <Place name={item.name} link={item.link} linkName={item.linkName} imageLink={item.imageLink} descriptionOne={item.descriptionOne} descriptionTwo={item.descriptionTwo} key={item.id}  onImageClick={props.onImageClick}/>)}
      </section>
      <section className="cover">
        <a href="https://stampsy.com/na-elektrichkakh-do-baikala" className="cover__overlay">
          <h2 className="cover__title">До Байкала «на собаках»</h2>
          <p className="cover__subtitle">По мотивам учебной темы о Транссибе и iframes — путешествие от столицы до Байкала на электричках.</p>
        </a>
      </section>
    </main>
  );
}

export default Main;