import { useState } from "react";
import { useHistory } from "react-router-dom";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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
    event.preventDefault();
    history.push("/success");
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
