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

          <Link to="/">
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/013ad70b-7c62-464c-9201-9a96392e6737/logo_odelices.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230301T143603Z&X-Amz-Expires=86400&X-Amz-Signature=7ffc4b144004789b4bf71228b827eb796a11a0d0ecf64bfcd0e8e21e6e492a31&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22logo_odelices.png%22&x-id=GetObject"
              alt="logo O'Delices"
              className="logo"
            />
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
                      {/* <li>
                      <a href="/signup">S'inscrire</a>
                    </li>
                    <li>
                      <a href="#">Connexion</a>
                    </li> */}
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
            {/* <button onClick={handleClick}>s'inscrire</button>      
        <button onClick={handleClick}>Connexion</button> */}
          </div>
        </header>

        <h1 className="title_principal">O'D??lices, la cuisine sans limites </h1>
      </nav>
    </>
  );
};

export default AppHeader;
