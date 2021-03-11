import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {
  let history = useHistory();
  const [state, setState] = useState({ email: "", message: "" });

  const handleChange = (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    alert("Message sent");
    history.push("/");
  };

  return (
    <div className="container" style={{ padding: "6%" }}>
      <p style={{ paddingBottom: "1%" }}>Have a question/message?</p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="form-group"
        onSubmit={handleSubmit}
      >
        {" "}
        <input type="hidden" name="form-name" value="contact" />
        <input
          name="email"
          type="email"
          className="form-control"
          placeholder="Your email..."
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="message"
          className="form-control"
          placeholder="Message..."
          onChange={handleChange}
          required
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <br />
    </div>
  );
};

export default Contact;
