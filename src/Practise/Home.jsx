import {
  Navbar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function Home() {
 
 
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <div className="p-1 font-bold text-gray-800">
        <a href="#" className="flex items-center">
          CRUD
        </a>
      </div>
      <div className="p-1 font-semibold text-gray-400">
        <Link to="/create" className="flex items-center">
          CREATE
        </Link>
      </div>
      <div className="p-1 font-semibold text-gray-400">
        <Link href="#" className="flex items-center" to="/">
          READ
        </Link>
      </div>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography> */}
    </ul>
  );
 
  return (
    <div className="m-6 ">
      <Navbar className=" h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-slate-100">
        <div className="flex items-center justify-between ">
         
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
           
          </div>
        </div>
        
      </Navbar>
      
    </div>
  );
}