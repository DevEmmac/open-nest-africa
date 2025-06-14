import React from "react";
import Button from "../Button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Navbar from "./mobileNav";

const Header = () => {
  return (
    <div> 
       <Navbar></Navbar>
    <header className="sticky top-0 z-50 bg-white px-[112px] py-6 shadow hidden sm:block">
      <nav className="flex items-center justify-between">
        <div> 
          <Link to="/">
            <img src="/images/logo.svg" alt="OpenNest logo" />
          </Link>
        </div>
        <ul className="flex items-center justify-between text-base font-semibold text-dark-2 capitalize gap-x-8 bg-[#F7F9FC] rounded-[40px] py-4 px-10">
          <li className="flex items-center gap-x-1">
            use cases <ChevronDownIcon className="w-6 h-6" />
          </li>

          <li>
            <Link to="/resources" className="flex items-center gap-x-1">
              Resources <ChevronDownIcon className="w-6 h-6" />
            </Link>
          </li>

          <li>
            <Link to="/about-us">
              About us
            </Link>
          </li>
          <li>What's new</li>
        </ul>
        <Link to="/signup">
          <Button
            text="Sign up"
            className="bg-blue text-white font-semibold text-base py-4 px-10"
          />
        </Link>
      </nav>
    </header>
     </div>
  );
};

export default Header;
