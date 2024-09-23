import { Carousel } from "@material-tailwind/react";
import pre4 from "../assets/pre4.jpg";
import pre5 from "../assets/pre5.jpg";
import pre6 from "../assets/pre6.jpg";
import CarSummary from "./CarSummary";
import Accordions from "./Accordions";
const CarImageCarousel = () => {
  return (
    <div>
       <Carousel >
      <div className="w-1/2">
      <img
        src={pre4}
        alt="image 1"
        className="h-full w-1/2 "
      />

        </div>
      <img
        src={pre5}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={pre6}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
      <CarSummary/>
      <Accordions/>
    </div>
  );
};

export default CarImageCarousel;
