import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import Image2 from "../assets/Screenshot (51).png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-5 md:p-10">
      <div className="flex flex-wrap justify-between mb-5">
        <div className="footer-logo">
          <img className="log" src="https://i.ibb.co/jHh1Tqm/Whats-App-Image-2024-10-10-at-22-21-37-86969a8a.jpg" alt="Logo"  />
          
        </div>
        <div className="flex gap-10">
          <div className="footer-section">
            <h4 className="mb-2">Mobile app</h4>
            <ul className="list-none">
              <li className="mb-1 cursor-pointer">Features</li>
              <li className="mb-1 cursor-pointer">Live share</li>
              <li className="mb-1 cursor-pointer">Video record</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="mb-2">Community</h4>
            <ul className="list-none">
              <li className="mb-1 cursor-pointer">Featured artists</li>
              <li className="mb-1 cursor-pointer">The Portal</li>
              <li className="mb-1 cursor-pointer">Live events</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="mb-2">Company</h4>
            <ul className="list-none">
              <li className="mb-1 cursor-pointer">About us</li>
              <li className="mb-1 cursor-pointer">Contact us</li>
              <li className="mb-1 cursor-pointer">History</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
  <button className="bg-blue-500 text-white py-2 px-4 rounded w-32 h-10">Register</button>
  <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded w-32 h-10">Log in</button>
</div>

      </div>
      <div className="flex justify-between items-center border-t border-gray-600 pt-5 flex-wrap">
        <p>© website Creation, Business Management, Test Paper Creation, Logo Design 
!</p>
        <div className="flex items-center gap-5">
          <span>Follow us:</span>
          <a href="#"><FaFacebook className="text-xl" /></a>
          <a href="#"><FaTwitter className="text-xl" /></a>
          <a href="#"><FaLinkedin className="text-xl" /></a>
          <a href="#"><FaInstagram className="text-xl" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
