import { Link } from "react-router-dom";

export default function Navbar() {
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
        <li className="buttonConnexionNav">
          <Link to="/register">
            <button type="submit" className="button">
              Connexion
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
