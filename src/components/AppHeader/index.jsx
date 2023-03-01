import "./style.scss";
import { NavLink } from "react-router-dom";
import { getToken } from "../../utils/api";

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
          <NavLink to="/">
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/883745b3-a6f9-4bba-ae0b-acc875ed3e6c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230301T143528Z&X-Amz-Expires=86400&X-Amz-Signature=73e4c7e4dc4fb71b64a1a07afdeb56878c15aff5998ac22333b22d336444a34d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
              alt="logo O'délices"
              className="logo"
            />
          </NavLink>

          <NavLink to="/">
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/013ad70b-7c62-464c-9201-9a96392e6737/logo_odelices.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230301T143603Z&X-Amz-Expires=86400&X-Amz-Signature=7ffc4b144004789b4bf71228b827eb796a11a0d0ecf64bfcd0e8e21e6e492a31&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22logo_odelices.png%22&x-id=GetObject"
              alt="logo O'Delices"
              className="logo"
            />
          </NavLink>


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
            <NavLink to="/recipes"> Toutes les recettes </NavLink>
            <NavLink to="/signup"> <button>S'inscrire</button> </NavLink>
            <NavLink to="/signin"> <button>Connexion</button> </NavLink>
            {/* <button onClick={handleClick}>s'inscrire</button>      
        <button onClick={handleClick}>Connexion</button> */}
          </div>
        </header>

        <h1 className="title_principal">O'Délices, la cuisine sans limites </h1>
      </nav>
    </>
  );
};

export default AppHeader;
