
import BrandList2 from "./BrandList2";
import { Carousel } from "@material-tailwind/react";

import pre4 from "../assets/pre4.jpg";
import pre5 from "../assets/pre5.jpg";
import pre6 from "../assets/pre6.jpg";
// import { Link } from "react-router-dom";
const PremiumCars = () => {
    return (
        <div>
            <Carousel
                className=" overflow-hidden"
                autoplay
                autoplayDelay={5000}
                loop
            >
               <div className="relative overflow-hidden">
               
                    <img src={pre4} alt="Image 1" className="object w-full md:h-full h-[200px]" />
                    <div className="absolute grid inset-0 bg-black/40">
                    <div className=" mt-2 md:mt-8 md:ml-10 mx-5 ">
                        <div className="text-white text-lg md:text-xl lg:text-4xl  mb-2  font-bold  rounded">                    
                            Premium Cars Collection...
                        </div>
                        <p className="text-white font-bold mb-5  text-xs lg:w-2/3 md:text-xl rounded">
                    Car Is Where Early Adopters And Innovation Seekers Lively Imaginative Tech Before It Hits The Mainstream
                    </p>
                    <button className="bg-white text-black border border-gray-300 rounded px-4 py-2 hover:bg-gray-100">
                        Click Me
                    </button>
                   
                    </div>
                    </div>
                  
                   
                </div>

                <div className="relative">
               
               <img src={pre5} alt="Image 1" className="object-cover w-full md:h-full h-[200px] " />
               <div className="absolute grid inset-0 bg-black/40">
               <div className=" mt-2 md:mt-8 ml-10">
                   <span className="text-white  text-md md:text-xl lg:text-4xl mb-2 font-bold  rounded">                    
                   Redefining The Standards Of Luxury
                   </span>
              
               </div>
               </div>
             
              
           </div>

           <div className="relative">
               
               <img src={pre6} alt="Image 1" className="object-cover w-full md:h-full h-[200px]" />
               <div className="absolute grid inset-0 bg-black/30">
               <div className="mt-2 md:mt-8 ml-10">
                   <div className="text-white  text-md md:text-xl lg:text-4xl mb-5  font-bold  rounded">                    
                   Drive the Dream. Live the Luxury
                   </div>
                  
              
               </div>
               </div>
             
              
           </div>

                
            </Carousel>
            <BrandList2/>
        </div>
    );
}
 
export default PremiumCars;