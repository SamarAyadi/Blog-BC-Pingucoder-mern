import React from "react";
import logo from "@/assets/images/logo-white.png";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import SearchBox from "./SearchBox";
const Topbar = () => {
  return (
    <div className='flex justify-between items-center h-16 fixed w-full z-20 bg-white px-5 border-b'>
      <div className='flex justify-center items-center gap-2'>
        <img src={logo} className='md:w-auto w-48' />
      </div>
      <div className='w-[500px]'>
      <SearchBox />
      </div>
      <div>
        <Button asChild className="rounded-full" >
          <Link to="">
            <MdLogin />
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
