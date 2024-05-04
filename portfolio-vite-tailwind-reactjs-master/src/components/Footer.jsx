import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center items-center text-white">
        <div className="mr-4">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl mr-2" />
          </a>
        </div>
        <div className="mr-4">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl mr-2" />
          </a>
        </div>
        <div>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl mr-2" />
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center text-white mt-4">
        <p>Authenticals Programmers</p>
        <p>&copy; 2024 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;