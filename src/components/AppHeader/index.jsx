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
        <img src="logo-odelice.png" alt="logo O'délices" />

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

      <h1>TEST</h1>
    </>
  );
};

export default AppHeader;
