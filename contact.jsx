import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", message: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...this.state,
      }),
    }).then(() => console.log(this.state));
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container" style={{ padding: "6%" }}>
        <p style={{ paddingBottom: "1%" }}>Have a question/message?</p>
        <form
          className="form-group"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={this.handleSubmit}
        >
          {" "}
          <input type="hidden" name="form-name" value="contact" />
          <input
            name="email"
            type="email"
            onChange={(e) => this.setState({ email: e.target.value })}
            className="form-control"
            id="email"
            placeholder="Your email..."
            required
          />
          <br />
          <textarea
            name="message"
            className="form-control"
            id="message"
            placeholder="Message..."
            onChange={(e) => this.setState({ message: e.target.value })}
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
  }
}

export default Contact;
