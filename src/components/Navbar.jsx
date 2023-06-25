import  { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constant";
import { TfiClose} from 'react-icons/tfi'

const Navbar = () => { 

  const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
  return (

    
   <header className="flex justify-between px-12 py-4">
    
    <a href="https://tesla.com/models">     
      <img src={logo} className="w-28 object-contain" />
      </a>

      <div className="hidden items-center lg:flex gap-x-6">
        {navLinks.map(({ id, title }) => (
          <p
            key={id}
            className="cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-gray-200"
          >
            {title}
          </p>
        ))}
      </div>

      <div className="flex gap-x-4 ">
      <a href="https://shop.tesla.com">
        <p className="cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-gray-200
        hidden items-center lg:flex gap-x-6">
          Shop
        </p>
        </a>

        <a href="https://tesla.com/teslaaccount">
        <p className="cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-gray-200 hidden items-center lg:flex gap-x-6">
          Account
        </p>
        </a>
        <p 
        onClick={handleNav} className="cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-gray-200 hidden items-center lg:flex gap-x-6">
          Menu
        </p>

        <div className="lg:hidden">
          <button onClick={handleNav} className="inline-flex items-center rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
            Menu
          </button>
        </div>
        

        <div
          className={
            nav
              ? "bg-white absolute right-0 top-0 w-80 h-full z-10"
              : "fixed right-[-100%]"
          }
        >
          <div className="flex justify-end pr-8 pt-8">
            <TfiClose onClick={handleNav} className="rounded p-1 hover:bg-black/5 cursor-pointer" size={28} />
          </div>
          <ul className="pt-8 px-6">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 ">
              <a href="https://tesla.com/models">Model S</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/model3">Model 3</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modelx">Model X</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modely">Model Y</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarroof">Solar Roof</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarpanels">Solar Panels</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/inventory/new/m3">
                Existing Inventory
              </a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/inventory/used/m3">
                Used Inventory
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;