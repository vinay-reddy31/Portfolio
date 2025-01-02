import React, { Component } from "react";
import "./index.css";

class Home extends Component {
  state = {
    roles: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Machine Learning",
      "Data Science",
    ],
    currentRoleIndex: 0,
    displayedRole: "",
    charIndex: 0,
  };

  componentDidMount() {
    this.roleInterval = setInterval(this.updateRole, 4000);
    this.letterInterval = setInterval(this.updateDisplayedRole, 100);
  }

  componentWillUnmount() {
    clearInterval(this.roleInterval);
    clearInterval(this.letterInterval);
  }

  updateRole = () => {
    this.setState((prevState) => ({
      currentRoleIndex:
        (prevState.currentRoleIndex + 1) % prevState.roles.length,
      displayedRole: "",
      charIndex: 0,
    }));
  };

  updateDisplayedRole = () => {
    const { roles, currentRoleIndex, charIndex } = this.state;
    if (charIndex < roles[currentRoleIndex].length) {
      this.setState((prevState) => ({
        displayedRole:
          prevState.displayedRole + roles[currentRoleIndex][charIndex],
        charIndex: prevState.charIndex + 1,
      }));
    }
  };

  render() {
    const { displayedRole } = this.state;

    const resume = () => {
      console.log("resume");
      window.open(
        "https://drive.google.com/file/d/1VYY2R21n72apmm1eAwyVqBLxh5Wb7dTR/view?usp=drive_link",
        "_blank"
      );
    };
    return (
      <div className="home-container">
        {/* Mobile Layout */}
        <div className="mobile-home">
          <img
            src="https://hemangnakarani.github.io/astro/ssa.DaGceUPd_Z2wtw7E.svg"
            alt="home icon"
            loading="lazy"
          />
          <p className="heading-name">
            Hello I'm
            <br />
            <span className="name">Arukala Vinay Teja</span>
          </p>
          <h2 className="heading">
            I'm good at <span className="role">{displayedRole}</span>
          </h2>
        </div>

        {/* Larger Screen Layout */}
        <div className="desktop-home">
          <div className="home">
            <div className="home-content">
              <p
                style={{
                  fontFamily: "cursive",
                  fontSize: "18px",
                  color: "#ffffff",
                }}
              >
                Hello I'm
              </p>
              <h1 style={{ color: "#ffffff" }}>Vinay Teja Arukala</h1>
              <h4 className="heading">
                And I'm good at <span className="role">{displayedRole}</span>
              </h4>
              <div className="social-media">
                <a
                  href="https://www.linkedin.com/in/shivakrishnabeeraboina/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="rgb(87, 199, 199)"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/ShivaKrisl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="rgb(87, 199, 199)"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
                <a
                  href="https://leetcode.com/shivakrishnabeeraboina/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="rgb(87, 199, 199)"
                    className="bi bi-code-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
                  </svg>
                </a>
                <button class="btn butt" onClick={resume}>
                  Download Resume
                </button>
              </div>
            </div>
            <div className="logo-container">
              <img
                className="logo-image-style"
                src="/profilepic.png"
                alt="home icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
