import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  let history = useHistory();
  const [state, setState] = useState({ email: "", message: "" });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...state,
      }),
    })
      .then(() => console.log(state.message))
      .catch((error) => alert(error));
    history.push("/");
    event.preventDefault();
  };

  return (
    <div className="container" style={{ padding: "6%" }}>
      <p style={{ paddingBottom: "1%" }}>Have a question/message?</p>
      {success && <p style={{ color: "white" }}>Thanks for your message! </p>}
      <form
        name="contact"
        method="POST"
        action="/contact/?success=true"
        data-netlify="true"
        className="form-group"
        onSubmit={handleSubmit}
      >
        {" "}
        <input type="hidden" name="form-name" value="contact" />
        <input
          name="email"
          label="email"
          type="email"
          id="email"
          className="form-control"
          placeholder="Your email..."
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="message"
          label="message"
          id="message"
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
