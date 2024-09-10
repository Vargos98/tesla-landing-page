// import React from 'react'
import './Header.css'; // Make sure you have this CSS file for additional styles

const Header = () => {
  return (
    <div className="header-container bg-model-y h-screen w-full bg-center bg-cover relative">
      <div className="pt-5 flex justify-between">
        <div>
          <svg
            className="w-44 lg:w-32 ml-8 cursor-pointer text-white"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
            />
          </svg>
        </div>
        <div className="hidden lg:inline">
          <ul className="menu flex gap-5 text-1xl font-medium text-white">
            <li className="menu-item py-1 px-2 hover:bg-slate-300 rounded-full cursor-pointer hover:text-black relative">
              Vehicles
              <ul className="dropdown hidden absolute top-full left-0 mt-2 bg-white text-black w-48 rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-300">Model S</li>
                <li className="px-4 py-2 hover:bg-gray-300">Model 3</li>
                <li className="px-4 py-2 hover:bg-gray-300">Model X</li>
                <li className="px-4 py-2 hover:bg-gray-300">Model Y</li>
                <li className="px-4 py-2 hover:bg-gray-300">Cybertruck</li>
              </ul>
            </li>
            <li className="menu-item py-1 px-2 hover:bg-slate-300 rounded-full cursor-pointer hover:text-black relative">
              Energy
              <ul className="dropdown hidden absolute top-full left-0 mt-2 bg-white text-black w-48 rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-300">Solar Panels</li>
                <li className="px-4 py-2 hover:bg-gray-300">Powerwall</li>
              </ul>
            </li>
            <li className="menu-item py-1 px-2 hover:bg-slate-300 rounded-full cursor-pointer hover:text-black relative">
              Charging
              <ul className="dropdown hidden absolute top-full left-0 mt-2 bg-white text-black w-48 rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-300">Supercharger</li>
                <li className="px-4 py-2 hover:bg-gray-300">Home Charging</li>
              </ul>
            </li>
            <li className="menu-item py-1 px-2 hover:bg-slate-300 rounded-full cursor-pointer hover:text-black relative">
              Discover
              <ul className="dropdown hidden absolute top-full left-0 mt-2 bg-white text-black w-48 rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-300">Autopilot</li>
                <li className="px-4 py-2 hover:bg-gray-300">Safety</li>
              </ul>
            </li>
            <li className="menu-item py-1 px-2 hover:bg-slate-300 rounded-full cursor-pointer hover:text-black relative">
              Shop
              <ul className="dropdown hidden absolute top-full left-0 mt-2 bg-white text-black w-48 rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-300">Accessories</li>
                <li className="px-4 py-2 hover:bg-gray-300">Apparel</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex text-white font-medium gap-5 mr-8 text-1xl">
            <li className="py-1 px-2 hover:bg-slate-800 rounded-full">Contact us</li>
            <li className="py-1 px-2 hover:bg-slate-800 rounded-full">Menu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
