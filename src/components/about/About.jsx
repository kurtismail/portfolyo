import React from "react";
import "./about.css";
import AboutGif from "../../img/aboutme.gif";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AboutGif} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Food engineering graduate. Working as a senior assistant store manager at Migros. Fullstack developer with +3 years of experience in IT / CRM tools and +1 year of experience in web development.
          <br />
          <br />
          interested in writing codes, skilled at developing complex
          solutions, creating responsive designs, possessing strong creative
          thinking skills, high energy and integrity.
          <br />
          <br />
          Always eager to learn various technologies, tools and libraries.
          Especially interested in the
          <b> Frontend / Web Development, HTML, CSS, JS, React</b>. Excited to
          learn new things and improve, lifetime student.
        </p>
      </div>
    </div>
  );
};

export default About;
