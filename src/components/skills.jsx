import React from "react";
import "./style.css";
import Resume from "../File/AnirudhJLresume.pdf";

const Skills = () => {
  return (
    <div className="container" style={{ padding: "10%" }}>
      <p>
        Front end: HTML5, CSS3, Sass, Bootstrap, Tailwind CSS, JavaScript,
        jQuery, React
        <br />
        Back end: MySQL, MongoDB, C, C#, Python
        <br />
        Dev Tools: Eclipse IDE, VS code, Git, Netlify, Node.js, npm, Jira
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
