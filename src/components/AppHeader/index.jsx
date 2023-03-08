import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { getToken } from "../../utils/api";
import logo_odelices from "../../assets/images/logo_odelices.png";
import "./style.scss";
import { useEffect } from "react";

const AppHeader = ({ isLogged, setIsLogged }) => {

  return (
    <>

      {/* <div className="header__title-container"></div> */}
      <header className="header__title-container">
        <nav className="header-nav">
          <Link to="/">
            <img src={logo_odelices} alt="logo O'Delices" className="logo" />
          </Link>
          <h1 className="title_principal">O'Délices, la cuisine sans limites </h1>
          <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
        </nav>
      </header>


    </>
  );
};

export default AppHeader;
