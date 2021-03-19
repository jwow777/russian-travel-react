import { TranslationContext } from "../contexts/TranslationContext";
import { useContext } from "react";
import footerList from "../utils/footerList";
import FooterList from "./FooterList";

function Footer(props) {
  const translation = useContext(TranslationContext);
  return (
    <footer className="footer">
      <nav>
        <ul className="footer__links">
          {footerList.map((item,index) => 
            <FooterList 
              text={item.text}
              link={item.link}
              isLang={props.isLang}
              key={index}
            />
          )}
        </ul>
      </nav>
      <p className="footer__copyright">&copy; {translation.footerCopyright}</p>
    </footer>
  );
}

export default Footer;