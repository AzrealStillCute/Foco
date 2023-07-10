import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ getFullScreen }) => {
  return (
    <div id="footer">
      <div className="shortcutsContainer">
        <div className="shortcuts">
          <kbd className="keys">space</kbd> - start or pause
        </div>
        <div className="shortcuts">
          <kbd className="keys">ctrl</kbd> + <kbd className="keys">r</kbd> -
          reset
        </div>
        <div className="shortcuts">
          <kbd className="keys">ctrl</kbd> + <kbd className="keys">enter</kbd> -
          switch study or break
        </div>
        <div className="shortcuts">
          <kbd className="keys">ctrl</kbd> + <kbd className="keys">f</kbd> -
          full screen
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faExpand}
          onClick={getFullScreen}
          className="icon"
        />
      </div>
    </div>
  );
};

export default Footer;
