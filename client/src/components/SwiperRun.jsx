import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import running from "../assets/images/pexels-runffwpu-2654902.jpg";

function SwiperRun() {
  return (
    <Carousel>
      <div>
        <img src={running} alt="" />
        <h2 className="titleRun">5 KM</h2>
      </div>
      <div>
        <img src={running} alt="" />
        <h2 className="titleRun">10 KM</h2>
      </div>
      <div>
        <img src={running} alt="" />
        <h2 className="titleRun">Semi-Marathon</h2>
      </div>
      <div>
        <img src={running} alt="" />
        <h2 className="titleRun">Marathon</h2>
      </div>
    </Carousel>
  );
}

export default SwiperRun;
