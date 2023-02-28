import "./style.scss";

import { getToken } from "../../utils/api";

const AppHeader = ({ isLogged, setIsLogged }) => {
  const handleClick = () => {
    console.log("amozefijazmeoij");
    setIsLogged(true);
  };

  return (
    <>
     <div class="header__title-container"></div>
      <header className="header__title-container">
        <a href="/">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/883745b3-a6f9-4bba-ae0b-acc875ed3e6c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230228T084725Z&X-Amz-Expires=86400&X-Amz-Signature=2c40e5cda5e8381e567911840cbb6b1c9b0c4894f1cad45c7461bd1c14f49920&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" 
          alt="logo O'délices" 
          className= "logo"
        />
         </a>

         <a href="/">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/013ad70b-7c62-464c-9201-9a96392e6737/logo_odelices.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230228T084810Z&X-Amz-Expires=86400&X-Amz-Signature=40944b99746b21899d8a0f445333bb76e5b8ca87e8ae7092875046b15123a5b0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22logo_odelices.png%22&x-id=GetObject" 
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
