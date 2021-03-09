import React from "react";
import "./style.css";
import Image from "../Images/profile.jpg";

const Home = () => {
  return (
    <div className="container" style={{ padding: "6%" }}>
      <br />
      <img
        src={Image}
        alt="profile"
        height="15%"
        width="15%"
        style={{ borderRadius: "50%" }}
      />
      <br />
      <br />
      <p>Hello, I'm Anirudh.</p>
      <p>I'm a front end web developer.</p>
      <br />
    </div>
  );
};

export default Home;
