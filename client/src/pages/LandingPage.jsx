import imagLanding from "../assets/images/pexels-bohlemedia-2803160.jpg";
import SwiperRun from "../components/SwiperRun";
import SwiperTriathlon from "../components/SwiperTriathlon";

export default function LandingPage() {
  return (
    <main>
      <div className="searchbar">
        <img src={imagLanding} alt="" className="firstImage" />
        <span className="search">
          <input
            type="text"
            name="searchbar"
            className="barSearch"
            placeholder="Recherche une course ou un triathlon"
          />
        </span>
      </div>

      <div>
        <h2 className="titleRunning">Course à pied</h2>
        <SwiperRun />
      </div>
      <div>
        <h2 className="titleRunning">Triathlon</h2>
        <SwiperTriathlon />
      </div>
    </main>
  );
}
