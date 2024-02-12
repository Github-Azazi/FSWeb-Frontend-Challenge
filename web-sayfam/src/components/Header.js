<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
import { useContext } from "react";
import { CiteContext } from "./contexts/CiteContext";
import { toast } from "react-toastify";
function Header() {
  const { theme, setTheme, store, lang } = useContext(CiteContext);
  const notify = () => {
    if (lang === "ENG") {
      toast("O zaman hemen mustafabasaaar@gmail.com'a mail atıyorsun");
    }
    if (lang === "TÜRKÇE") {
      toast("Then you immediately send an e-mail to mustafabasaaar@gmail.com");
    }
  };

  return (
    <header className="header-container">
      <div
        className={theme === "LIGHT" ? "header-symbol-dark" : "header-symbol"}
      >
        <div
          className={
            theme === "LIGHT" ? "header-symbol-text-dark" : "header-symbol-text"
          }
        >
          A
        </div>{" "}
      </div>
      <div className="header-links">
        <div className="header-skill">{store.baslik.skills}</div>
        <div className="header-projects">{store.baslik.projects}</div>
        <div className="hire-button">
          <button
            onClick={notify}
            className={theme === "LIGHT" ? "hire-button-dark" : ""}
          >
            {store.baslik.hireme}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;