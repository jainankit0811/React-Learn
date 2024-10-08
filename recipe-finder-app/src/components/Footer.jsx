import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from 'react-icons/ri';
const Footer = () => {
  return (
    <div>
      <footer>
        <Link to={""}></Link>
        <FaFacebook />
        <Link to={""}>
          <FaYoutube /></Link>
        <Link to={""}>
          <FaLinkedin /></Link>
        <Link to={""}>
          <RiInstagramFill /></Link>
      </footer>
    </div>
  );
}

export default Footer;
