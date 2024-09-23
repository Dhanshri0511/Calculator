import { useState } from 'react';

const Accordions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordions = [
    {
      title: 'Overview',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between ">
        <span>Vehicle Type :</span>
        <span>SUV</span>
      </div>
      <div className="py-2 flex justify-between ">
        <span>Engine :</span>
        <span>2995cc, Turbocharged, V6, DOHC</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Fuel :</span>
        <span>Petrol</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Peak Power :</span>
        <span>340PS / 335BHP @ 5000 RPM</span>
      </div>
    </div>
    },
    {
      title: 'Engine & Transmission',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Engine Displacement:</span>
        <span>2995cc, Turbocharged, V6, DOHC</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Power Figure:</span>
        <span>340PS / 335BHP @ 5000 RPM</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Torque Figure:</span>
        <span>500 Nm @ 1370 - 4500 RPM</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Drivetrain:</span>
        <span>Quattro permanent all-wheel drive</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Transmission:</span>
        <span>8-speed tiptronic Automatic Transmission</span>
      </div>
    </div>
    },
    {
      title: 'Hybrid System',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>E-Motor Type/Size:</span>
        <span>NA</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Power Figure:</span>
        <span>NA</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Torque Figure:</span>
        <span>NA</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Combined Power & Torque:</span>
        <span>NA</span>
      </div>
    </div>
    },
    {
      title: 'Performance & Efficiency',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Eco Start/Stop System:</span>
        <span>Yes</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Driving Modes:</span>
        <span>Audi drive select</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Terrain Response Mode:</span>
        <span>NA</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Active Aerodynamics:</span>
        <span>NA</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Exhaust System/Type:</span>
        <span>NA</span>
      </div><div className="py-2 flex justify-between">
        <span>Rear Axle Steering:</span>
        <span>NA</span>
      </div><div className="py-2 flex justify-between">
        <span>Acceleration 0-100kmph:</span>
        <span>5.9sec</span>
      </div><div className="py-2 flex justify-between">
        <span>TopSpeed:</span>
        <span>250kmph</span>
      </div><div className="py-2 flex justify-between">
        <span>Fuel Type:</span>
        <span>Petrol</span>
      </div><div className="py-2 flex justify-between">
        <span>Fuel Consumption:</span>
        <span>9.7kmpl</span>
      </div><div className="py-2 flex justify-between">
        <span>Emission Std:</span>
        <span>BS6</span>
      </div>
    </div>
    },
    {
      title: 'Exterior Equipment',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Head Lamps:</span>
        <span>HD Matrix LED Automatic Headlights w/ Auto-high beam assist</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Head Lamp Washer :</span>
        <span>Yes</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>DRLs:</span>
        <span>LED</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Fog Lamps:</span>
        <span>NA</span>
      </div>
    </div>
    },

    {
      title: 'Interior Equipment',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Interior:</span>
        <span>Mono Tone</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Interior Trim:</span>
        <span>Decorative inserts in Meshed Aluminium & Piano Black</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Gear Knob:</span>
        <span>Leather</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Side Sill Moulding:</span>
        <span>In Aluminium</span>
      </div>
    </div>
    },
    {
      title: 'Seats & Upholstery',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Front Seats:</span>
        <span>12-Way Electrically adjustable front seats</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Comfort Driver Seat :</span>
        <span>Yes w/ 2 Pre-Set Memory</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Comfort Co-Driver Seat:</span>
        <span>Yes</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Electric Lumbar Support Driver Seat:</span>
        <span>Yes</span>
      </div>
    </div>
    },
    {
      title: 'Entertaintment Front',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>HD Colour Display:</span>
        <span>high-resolution 25.65 cms (10.1) touch colour display</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>In-Built Hard Drive:</span>
        <span>NA</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>CD/DVD Player:</span>
        <span>Yes</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>AM/FM Radio:</span>
        <span>Yes</span>
      </div>
    </div>
    },
    {
      title: 'Entertaintment Rear',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Screens:</span>
        <span>NA</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Input ports :</span>
        <span>NA</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Other Equipments:</span>
        <span>NA</span>
      </div>
      
    </div>
    },
    {    
      title: 'Safety Equipment',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Airbags:</span>
        <span>8</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>ABS:</span>
        <span>Yes</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>EBD :</span>
        <span>Yes</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>BA:</span>
        <span>Yes</span>
      </div>
    </div>
    },
    {
      title: 'Suspensions , Brakes , Wheels & Tyres',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Front Suspension:</span>
        <span>Adaptive Air Suspension</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Rear Suspension:</span>
        <span>Adaptive Air Suspension</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Front Brakes:</span>
        <span>Ventilated Disc</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Rear Brakes:</span>
        <span>Ventilated Disc</span>
      </div>
    </div>
    },
    {
      title: 'Dimensions , Weight , Storage , Capacity ',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Length:</span>
        <span>4986mm</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Width:</span>
        <span>4986mm</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Height:</span>
        <span>705mm</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Wheelbase:</span>
        <span>2995mm</span>
      </div>
    </div>
    },
    {
      title: 'Warranty & Service Package ',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Warranty:</span>
        <span>NA</span>
      </div>
      <div className="py-2 flex justify-between">
        <span>Service Package w/ Details:</span>
        <span>NA</span>
      </div>
    </div>
    },
    {
      title: 'Exterior Colours',
      content: <div className="pl-4 pb-4 text-gray-700">
      <div className="py-2 flex justify-between">
        <span>Exterior Colours:</span>
        <span>Orca Black</span>
      </div>
    </div>
    },
  ];

  return (
    <div className="w-full p-16">
            <h2 className="text-2xl font-semibold mb-6">FULL SPECIFICATION</h2>
      {accordions.map((accordion, index) => (
        <div key={index} className="border-b w-full">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left py-4 px-4 font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none"
          >
            {accordion.title}
          </button>
          {activeIndex === index && (
            <div className="w-full px-4 py-2 bg-gray-50">
              <p className="text-gray-600">{accordion.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
