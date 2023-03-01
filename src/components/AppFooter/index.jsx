// import react
import { NavLink, Link } from "react-router-dom";

// import css
import "./style.scss";

function AppFooter() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
          <NavLink to="/cgu"> Conditions Générales d'utilisation </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default AppFooter;
