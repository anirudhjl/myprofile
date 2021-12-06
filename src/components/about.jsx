import "./style.css";

const About = () => {
  return (
    <div className="container" style={{ padding: "10%" }}>
      <p>
        I'm a Software Engineer from Bangalore currently working in Mumbai at{" "}
        <strong style={{ color: "#007bff" }}>LTI</strong> having 2.3 years of
        experience with knowledge in libraries like jQuery, React and Spring
        Boot.
      </p>
      <br />
      <p>
        <a href="/skills">Skills</a>
      </p>
      <br />
    </div>
  );
};

export default About;
