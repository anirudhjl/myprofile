import "./style.css";

const About = () => {
  const joiningDate = new Date("2019-8-27");
  let diff = new Date(new Date() - joiningDate);
  let date = diff.toISOString().slice(0, 4) - 1970 + "." + diff.getMonth();
  return (
    <div className="container" style={{ padding: "10%" }}>
      <p>
        I'm a Software Engineer from Bangalore currently working in Mumbai at{" "}
        <strong style={{ color: "#007bff" }}>LTI</strong> having {date} years of
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
