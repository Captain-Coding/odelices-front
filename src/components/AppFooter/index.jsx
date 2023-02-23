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
            <a to="/cgu">Conditions Générales d'utilisation</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default AppFooter;
