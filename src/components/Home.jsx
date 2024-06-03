import React, { useState, memo } from "react";
import Registration from "./Registration";
import Info from "./Info";
import "../App.css";
import gold from "./Images/gold.png";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.png";

const HomeContent = memo(() => (
  <div>
    <div className="Context" id="Info">
      <div className="MilanLogo">
        <img src={gold} alt="" />
      </div>
      <div className="Context-text">
        <br />
        <h1>MILAN 2k25</h1>
        Cras id convallis augue, suscipit vestibulum tellus. Morbi vel nunc eget
        tellus lobortis tincidunt ac et velit. Integer convallis, tellus vel
        vestibulum aliquet, magna nulla elementum risus, ut semper sem sapien
        sed sapien. Etiam ut risus id magna aliquam aliquam. Praesent elementum
        fermentum sagittis. Cras bibendum volutpat sitamet tincidunt. Donec
        vitae augue eget magna luctus pharetra e <br />
        vel dui. Aliquam convallis orci at lectus maximus, vitae dapibus orci
        vulputate.
      </div>
    </div>
  </div>
));

const HomeImages = memo(() => (
  <div className="Images" id="Images">
    <div className="images">
      <img src={img1} className="im" alt="img 1" />
      <img src={img2} className="im" alt="img 2" />
      <img src={img3} className="im" alt="img 3" />
    </div>
  </div>
));

const Home = () => {
  const [showRegister, setShowRegister] = useState(false);

  const theRegisterButton = () => {
    setShowRegister(true);
  };

  const handleCancel = () => {
    setShowRegister(false);
  };

  return (
    <div>
      {!showRegister && (
        <>
          <HomeContent />
          <div className="center_button">
            <button
              className="registerbutton"
              id="registerbn"
              onClick={theRegisterButton}
              style={{ marginTop: "10px" }}
            >
              Register Now
            </button>
          </div>
          <br />
          <HomeImages />
        </>
      )}
      <br />
      <br />
      {showRegister && <Registration handleCancel={handleCancel} />}
      {!showRegister && <Info />}
    </div>
  );
};

export default Home;
