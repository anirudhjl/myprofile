import "./style.css";
import Resume from "../File/AnirudhJLresume.pdf";

const Skills = () => {
  return (
    <div className="container" style={{ padding: "10%" }}>
      <p>
        Backend: Node.js, Express.js, RESTful API Design, Middleware
        <br />
        Frontend: React.js, TypeScript, JavaScript, Redux, Zustand, HTML5, CSS3,
        Tailwind CSS, Preact, Jest, Cypress
        <br />
        Databases: MySQL, PostgreSQL, Oracle (SQL)
        <br />
        Architecture & Practices: Microservices, Modular Architecture,
        Micro-Frontend Architecture
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
