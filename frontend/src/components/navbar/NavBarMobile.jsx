import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import UploadModal from "../modals/UploadModal";
import { FaHome, FaImages } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
const NavBarMobile = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(null);

  return (
    <div className="mr-4 flex items-center md:hidden">
      <button onClick={() => setShowMenuMobile(true)}>
        <FaBars className="text-2xl"></FaBars>
      </button>
      {showMenuMobile && (
        <div className="justify- absolute right-0 flex h-32 w-full  items-center bg-slate-100 pt-8 pl-10 text-black">
          <AiFillCloseCircle
            className="absolute right-3 top-8 text-3xl"
            onClick={() => setShowMenuMobile(false)}
          ></AiFillCloseCircle>
          <Link to={"/home"} className="mr-14 flex flex-col items-center">
            <FaHome className="mr-2 text-xl" />
            Home
          </Link>
          <Link to={"/dashboard"} className="mr-14 flex flex-col items-center">
            <FaImages className="mr-2 text-xl" />
            Gif's
          </Link>
          <UploadModal />
        </div>
      )}
    </div>
  );
};

export default NavBarMobile;
