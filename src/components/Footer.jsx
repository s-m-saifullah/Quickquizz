import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <Link to="/">
              <u>quickquizz</u>
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
