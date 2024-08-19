import React from "react";
import Heading from "../heading/Heading";
import "./Sponsors.scss";
import Solana from "../../assets/images/solana-logo-1.png";
import polygon from "../../assets/images/polygon-logo.png";
import { Link } from "react-router-dom";

const Sponsors = () => {
  return (
    <>
      <Heading title="Sponsors" size="5rem" />
      <div className="Sponsors_slider">
        <div className="Sponsors_slide-track">
          <div className="Sponsors_slide">
            {/* <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/replit_logo_icon_168861.png" height="100" width="250" alt="REPLIT LOGO" /> */}
          </div>
          <div className="Sponsors_slide">
            <a href="https://replit.com/">
              <img
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/replit_logo_icon_168861.png"
                height="100"
                width="250"
                alt="REPLIT LOGO"
              />
            </a>
          </div>

          <div className="Sponsors_slide">
            <Link to="https://filecoin.io/">
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Filecoin-Crypto-Logo-PNG-File.png"
                width="250"
                alt="FILECOIN LOGO"
              />
            </Link>
          </div>
          <div className="Sponsors_slide">
            <Link to="https://devfolio.co/discover">
              <img
                src="https://jithack.tech/images/logo/Devfolio_Logo-White@2x.png"
                width="250"
                alt="DEVFOLIO LOGO"
              />
            </Link>
          </div>
          <div className="Sponsors_slide">
            <Link to="https://polygon.technology/">
              <img src={polygon} height="100" width="250" alt="POLYGON LOGO" />
            </Link>
          </div>
          <div className="Sponsors_slide">
            <Link to="https://solana.com/">
              <img src={Solana} height="100" width="250" alt="SOLANA LOGO" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
