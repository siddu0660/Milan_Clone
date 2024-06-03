import React, { useEffect, useState } from "react";
import red from "./Images/red.png";
import "../App.css";
import Registration from "./Registration";

const User = ({ userEmail }) => {
  const [userData, setUserData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(userEmail);
    if (dataFromLocalStorage) {
      setUserData(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  if (!userData) {
    return (
      <div className="NoData">
        Not data Found !!!!!!!!!!!
        <br />
        Please Register First !!!!!
      </div>
    );
  }

  if (isEditMode) {
    return <Registration userEmail={userEmail} handleCancel={handleCancel} />;
  }

  const { fullName, email, phoneNumber, hostel, events } = userData;

  return (
    <div className="User">
      <img src={red} alt="" style={{ width: "100px", height: "100px" }} />
      <h3>Welcome {fullName}</h3>
      <div className="UserInfo">
        <span className="userName" id="email">
          <label>Full Name : </label>
          {fullName}
        </span>
        <br />
        <br />
        <span className="userEmail" id="email">
          <label>Email : </label>
          {email}
        </span>
        <br />
        <br />
        <span className="userPhone" id="email">
          <label>Phone : </label>
          {phoneNumber}
        </span>
        <br />
        <br />
        <span className="userHostel" id="email">
          <label>Hostel : </label>
          {hostel}
        </span>
        <br />
        <br />
        <span className="userEvents">
          <fieldset id="eventField">
            <br />
            <label>Events: </label>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </fieldset>
        </span>
        <br />
        <button
          onClick={handleEdit}
          style={{
            backgroundColor: "#c84f4f",
            color: "white",
            width: "100px",
            height: "30px",
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default User;
