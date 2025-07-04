import React from "react";
import "./intro.css";
import Me from "../../img/profile.gif";

const Intro = ({ darkMode }) => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">İsmail KURT</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">React.js Developer</div>
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I develop services for customers of all sizes, specializing inreting
            stylish,modern websites, web services and online stores.
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/kurtismail/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-linkedin-in"
                style={{ color: darkMode && "#0f39af" }}
              ></i>
            </a>
            <a
              href="https://github.com/kurtismail"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: darkMode && "#cae8e5" }}
              ></i>
            </a>
            <a
              href=" https://wa.me/+12069285363"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-whatsapp"
                style={{
                  color: darkMode && "#005c53",
                }}
              ></i>
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
