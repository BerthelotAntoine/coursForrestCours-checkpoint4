import { Link } from "react-router-dom";
import imgtoulouse from "../assets/images/toulouseimg.jpg";

export default function Kilometer10Page() {
  return (
    <main>
      <div className="cardCity">
        <div className="imgAndName">
          <Link to="/map">
            <img src={imgtoulouse} alt="" className="imgToulouse" />
          </Link>
          <h2 className="cityName">Toulouse</h2>
        </div>
        <div className="imgAndName">
          <Link to="/map">
            <img src={imgtoulouse} alt="" className="imgToulouse" />
          </Link>
          <h2 className="cityName">Castres</h2>
        </div>
      </div>
    </main>
  );
}
