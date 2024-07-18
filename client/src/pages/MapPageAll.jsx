import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [43.575937, 1.352977];
export default function MapPageAll() {
  return (
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
  );
}
