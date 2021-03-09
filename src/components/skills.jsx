import React from "react";
import "./style.css";
import Resume from "../File/AnirudhJLResume.pdf";

const Skills = () => {
  return (
    <div className="container" style={{ padding: "10%" }}>
      <p>
        Languages: HTML, CSS, Sass, JavaScript, C, C#, Python
        <br />
        Libraries: Bootstrap, Tailwind CSS, jQuery, React
        <br />
        <br />
        <a href={Resume} download>
          <sub>Download resume(pdf)</sub>
        </a>
      </p>

      <br />
    </div>
  );
};

export default Skills;
