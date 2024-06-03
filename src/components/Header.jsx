/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Registration from "./Registration";
import homeimage from "./Images/black.png";
import profileimage from "./Images/profile.jpg";
import "../App.css";

const HEADERR = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const profileButton = () => {
    setShowHome(false);
    setShowProfile(true);
    setShowRegister(false);
  };

  const homeButton = () => {
    setShowHome(true);
    setShowProfile(false);
    setShowRegister(false);
  };

  const contactSection = () => {
    homeButton();
    const infoSection = document.querySelector(".Info");
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      const infoSection = document.querySelector(".Info");
      if (infoSection) {
        infoSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const gallerySection = () => {
    homeButton();
    const gallerySection = document.querySelector(".Images");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      const gallerySection = document.querySelector(".Images");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };


  return (
    <div>
      <div className="Head" id="Top">
        <img
          className="hoverimg"
          src={homeimage}
          style={{ marginLeft: "20px" }}
          onClick={homeButton}
        />

        <div className="title">
          <h1>Milan 2k25</h1>
        </div>
        <button className="HeaderButton" id="AboutBtn" onClick={homeButton}>
          About
        </button>
        <button className="HeaderButton" id="EventsBtn">
          Events
        </button>
        <button className="HeaderButton" id="CompetitionsBtn">
          Competitions
        </button>
        <button
          className="HeaderButton"
          id="GalleryBtn"
          onClick={gallerySection}
        >
          Gallery
        </button>
        <button className="HeaderButton" id="SponsorsBtn">
          Sponsors
        </button>
        <button className="HeaderButton" id="TeamBtn">
          Team
        </button>
        <button
          className="HeaderButton"
          id="ContactBtn"
          onClick={contactSection}
        >
          Contact
        </button>
        <img
          className="hoverimg"
          src={profileimage}
          alt="Button Image"
          id="image-button"
          style={{ borderRadius: "50%", marginRight: "20px" }}
          onClick={profileButton}
        />
        <hr
          className="my-5"
          style={{
            height: "4px",
            borderWidth: "0",
            color: "#b74224",
            backgroundColor: "#b74224",
          }}
        />
      </div>

      {showHome && (
        <Home showRegister={showRegister} setShowRegister={setShowRegister} />
      )}
      <br />
      {showProfile && <Profile />}
      <br />
      {showRegister && <Registration />}
    </div>
  );
};

export default HEADERR;
