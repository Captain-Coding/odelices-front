import "./style.scss";

import { getToken } from "../../utils/api";

const AppHeader = ({ isLogged, setIsLogged }) => {
  const handleClick = () => {
    console.log("amozefijazmeoij");
    setIsLogged(true);
  };

  return (
    <>
     <div className="header__title-container"></div>
      <header className="header__title-container">
        <a href="/">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/013ad70b-7c62-464c-9201-9a96392e6737/logo_odelices.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230227T162042Z&X-Amz-Expires=86400&X-Amz-Signature=96b98c88d4c395ee55e89e2bc3a681a12e96d5c3d481c42a10bf1262a01bb693&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22logo_odelices.png%22&x-id=GetObject" 
          alt="logo O'délices" 
          className= "logo"
        />
         </a>

         <a href="/">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/02123ab9-8505-4b51-a3c0-d71d1f50fb3a/image_%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230227T162543Z&X-Amz-Expires=86400&X-Amz-Signature=a1bf31bc9dabd383f74b2225c0ce0d4d653f1abf1821fafcffca3e5c3e14ef44&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22image%2520%282%29.png%22&x-id=GetObject" 
          alt="logo O'Delices"
          className= "logo"
          />
          </a>

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
        <button onClick={handleClick}>s'inscrire</button>      
        <button onClick={handleClick}>Connexion</button>
      </header>

      <h1>O'Délices, la cuisine sans limites </h1>
    </>
  );
};

export default AppHeader;
