import React from "react";
import { FaHome, FaUser, FaCloudUploadAlt, FaImages } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="bg-main flex justify-between  text-xl font-medium text-white">
      <div className="flex items-center px-8" style={{ flex: 1 }}>
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/c_thumb,w_200,g_face/v1667609871/GifLife/logo_jdqpse.png"
          alt="Logo GifLife"
          className="w-20"
        />
        <p className="text-2xl">
          {" "}
          Gif <span className="font-bold text-orange-600">Life</span>{" "}
        </p>
      </div>
      <ul className="hidden md:flex md:justify-around" style={{ flex: 1 }}>
        <li className="flex items-center">
          <button className="rounded-md bg-slate-50 px-4 py-1 text-black">
            LOGIN
          </button>
        </li>
        <li className="flex items-center">
          <FaHome className="mr-2 text-xl" />
          Home
        </li>
        <li className="flex items-center">
          <FaImages className="mr-2 text-xl" />
          Gif's
        </li>
        <li className="flex items-center">
          <FaUser className="mr-2 text-xl" />
          Profile
        </li>
        <li className="flex items-center">
          <FaCloudUploadAlt className="mr-2 text-xl" />
          Upload
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
