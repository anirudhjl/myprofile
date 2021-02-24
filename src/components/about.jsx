import React from "react";
import "./style.css";

function About() {
  return (
    <div className="container" style={{ padding: "10%" }}>
      <p>
        I'm a software engineer from Bangalore currently working in Mumbai at{" "}
        <strong>
          <a href="https://www.lntinfotech.com/" target="_blank">
            LTI
          </a>
        </strong>{" "}
        having 1.5 years of experience in the field of front end web development
        with knowledge in libraries like jQuery, React.
      </p>
      <br />
      <p>
        <a href="/skills">Skills</a>
      </p>
      <br />
    </div>
  );
}

export default About;
