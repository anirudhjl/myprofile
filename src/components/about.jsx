import "./style.css";

const About = () => {
  const joiningDate = new Date("2019-9-7");
  let diff = new Date(new Date() - joiningDate);
  let date = diff.toISOString().slice(0, 4) - 1970 + "." + diff.getMonth();
  return (
    <div className="container" style={{ padding: "10%" }}>
      <p>
        I'm a Software Engineer from Bangalore, currently working at{" "}
        <strong style={{ color: "#007bff" }}>PwC</strong>, with {date} years of
        experience in the MERN stack.
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
