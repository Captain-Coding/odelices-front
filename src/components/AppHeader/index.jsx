import "./style.scss";
import { Link } from "react-router-dom";
import { getToken } from "../../utils/api";
import logo_odelices from "../../assets/images/logo_odelices.png";

const AppHeader = ({ isLogged, setIsLogged }) => {
  const handleClick = () => {
    console.log("amozefijazmeoij");
    setIsLogged(true);
  };

  return (
    <>
      <nav>
        <div className="header__title-container"></div>
        <header className="header__title-container">
          <Link to="/">
            <img src={logo_odelices} alt="logo O'Delices" className="logo" />
          </Link>

          

          <menu>
            <ul>
              {!getToken() && (
                <>
                  {isLogged === true ? (
                    <>
                      <li>
                        <a href="/logout">Logout</a>
                      </li>
                      <li>Bonjour Yann</li>
                    </>
                  ) : (
                    <>
                      <li>
                      <a href="/signup">S'inscrire</a>
                    </li>
                    <li>
                      <a href="#">Connexion</a>
                    </li>
                    </>
                  )}
                </>
              )}
            </ul>
          </menu>
          <div className="button_header">
            <Link to="/recipes"> Toutes les recettes </Link>
            <Link to="/signup"> <button>S'inscrire</button> </Link>
            <Link to="/signin"> <button>Connexion</button> </Link>
            <button onClick={handleClick}>s'inscrire</button>      
        <button onClick={handleClick}>Connexion</button>
          </div>
        </header>

        <h1 className="title_principal">O'Délices, la cuisine sans limites </h1>
      </nav>
    </>
  );
};

export default AppHeader;
