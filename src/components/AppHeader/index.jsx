import "./style.scss";

import { getToken } from "../../utils/api";

const AppHeader = ({ isLogged, setIsLogged }) => {
  const handleClick = () => {
    console.log("amozefijazmeoij");
    setIsLogged(true);
  };

  return (
    <>
      <header className="header">
        <img src="../../Integration/images/logo_odelices.png" alt="logo O'délices" />
        <img src="../../Integration/images/logo_odelices2.png" alt="logo O'Delices" />

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

        <button onClick={handleClick}>Connexion</button>
      </header>

      <h1>O'Délices</h1>
    </>
  );
};

export default AppHeader;
