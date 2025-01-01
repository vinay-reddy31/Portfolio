// import './index.css'

// const About=()=>(
//     <div className="about-container">
//         <h1>About Me</h1>
//         <p>My learning Journey with 2 years experience in Web Development where i crafted to build interactive and dynamic websites
//              starting from Todos Application to Ecommerce web application using HTMl, CSS, JavaScript and React Js along with
//              this I developed a Chronic Disease Prediction System with the domain Knowledge of Data science and Machine learning Techniques

//           My Goal is to integrate both web development and data science to make websites AI Efficient up on tackling real world problems.
//           I really looking forward to contribute myself and open to learn and collaborate to take up on challenges and ready for new challenges</p>
//     </div>
// )
// export default About

import React from "react";
import "./index.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-image">
        <img
          src="https://hemangnakarani.github.io/astro/ssa.DaGceUPd_Z2wtw7E.svg"
          alt="Profile"
        />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          My learning Journey with 3 years experience in Web Development where i
          crafted to build interactive and dynamic websites starting from Todos
          Application to Ecommerce web application using HTMl, CSS, JavaScript
          and React Js along with this I developed a Chronic Disease Prediction
          System with the domain Knowledge of Data science and Machine learning
          Techniques My Goal is to integrate both web development and data
          science to make websites AI Efficient up on tackling real world
          problems.I really looking forward to contribute myself and open to
          learn and collaborate to take up on challenges and ready for new
          challenges
        </p>
        {/* <a href="your-cv-url-here.pdf" className="download-cv">
          Download CV
        </a> */}
      </div>
    </section>
  );
};

export default About;
