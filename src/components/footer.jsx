import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IconContext } from "react-icons";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="container"
        style={{
          textAlign: "center",
          position: "sticky",
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <IconContext.Provider
          value={{
            size: "3em",
            color: "#007BFF",
            className: "global-class-name",
          }}
        >
          <FaFacebook
            onClick={() =>
              window.open("https://www.facebook.com/anirudh.bhat.77/", "_blank")
            }
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <CgMail
            size="4em"
            onClick={() => window.open("mailto:anibhat022@gmail.com")}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/anirudh-j-l-94855014b/",
                "_blank"
              )
            }
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FaInstagram
            onClick={() =>
              window.open("https://www.instagram.com/ani_bhat/", "_blank")
            }
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FaGithub
            onClick={() =>
              window.open("https://github.com/anirudhjl", "_blank")
            }
          />
        </IconContext.Provider>
        <br />
        <br />
      </div>
    );
  }
}

export default Footer;
