import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import tirathlon from "../assets/images/triathlon.jpg";

function SwiperTriathlon() {
  return (
    <Carousel>
      <div>
        <img src={tirathlon} alt="" />
        <h2 className="titleRun">Triathlon S</h2>
      </div>
      <div>
        <img src={tirathlon} alt="" />
        <h2 className="titleRun">Triathlon M</h2>
      </div>
      <div>
        <img src={tirathlon} alt="" />
        <h2 className="titleRun">Triathlon L</h2>
      </div>
      <div>
        <img src={tirathlon} alt="" />
        <h2 className="titleRun">Iron Man</h2>
      </div>
    </Carousel>
  );
}

export default SwiperTriathlon;
