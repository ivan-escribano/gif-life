import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-secondary flex flex-col items-center py-3">
      <div className="footer-icons py-5">
        <ul className="flex">
          <li className="px-3 text-2xl">
            <FaLinkedin />
          </li>
          <li className="px-3 text-2xl">
            <FaGithub />
          </li>
          <li className="px-3 text-2xl">
            <FaFacebook />
          </li>
          <li className="px-3 text-2xl">
            <FaInstagram />
          </li>
        </ul>
      </div>
      <p>© All rights reserved to Ivan Escribano</p>
    </div>
  );
};

export default Footer;
