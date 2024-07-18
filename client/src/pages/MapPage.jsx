import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import tournefeuille from "../assets/images/tournefeuille.jpg";

const position = [43.575937, 1.352977];
export default function MapPage() {
  return (
    <main>
      <div className="map">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          id="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Triathlon de Toulouse</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="imgDes">
        <div className="imgDescription">
          <img src={tournefeuille} alt="" className="imgTournefeuille" />
          <ul className="listTri">
            <li>Au lac de la Ramée</li>
            <li>10 Km</li>
            <li>25 €</li>
          </ul>
        </div>
      </div>
      <div className="paragrapheDesign">
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam velit
          eligendi porro voluptas eveniet perferendis voluptatum maiores eum!
          Quos ab molestias aspernatur eos sequi quidem delectus aut dolor,
          cumque libero eum eveniet, soluta optio cum aliquam, mollitia eaque
          explicabo quaerat blanditiis veniam fuga voluptatum. Dolore sed
          similique eum veniam ea.
        </p>
      </div>
    </main>
  );
}
