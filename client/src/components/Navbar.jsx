import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ user }) {
  return (
    <nav className="navbar">
      <h1 className="title">
        Cours
        <br />
        Forrest
        <br />
        Cours
      </h1>

      <ul className="buttonList">
        <li className="buttonHome">
          <Link to="/">
            <button type="button" className="button">
              Home
            </button>
          </Link>
        </li>
        {user === null ? (
          <li className="buttonConnexionNav">
            <Link to="/register">
              <button type="submit" className="button">
                Connexion
              </button>
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/logout">
              <button type="button" className="conect">
                Se déconnecter
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  user: PropTypes.string.isRequired,
};
