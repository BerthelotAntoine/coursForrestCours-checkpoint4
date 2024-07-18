import axios from "axios";
import { useOutletContext, Link } from "react-router-dom";

export default function LogoutPage() {
  const { setCurrentUser } = useOutletContext();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3310/api/auth/logout", {
        withCredentials: true,
      });

      setCurrentUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="pageDeconnect">
      <h3 className="titleDeconnect">
        Êtes-vous sûr de vouloir vous déconnecter ?
      </h3>
      <div className="button_connexion">
        <Link to="/">
          <button type="button" onClick={handleLogout} className="conect">
            Se déconnecter{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
