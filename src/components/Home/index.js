import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  state = {
      roles: ["Frontend Devlopment", "Backend Development","Full Stack Development", "Machine Learning","Data Science"] ,// Add your roles here
      currentRoleIndex: 0,
      displayedRole: '',
      charIndex: 0,
    };

  componentDidMount() {
    this.roleInterval = setInterval(this.updateRole, 4000);
    this.letterInterval = setInterval(this.updateDisplayedRole, 100); // Display one letter at a time
  }

  componentWillUnmount() {
    clearInterval(this.roleInterval);
    clearInterval(this.letterInterval);
  }

  updateRole = () => {
    this.setState((prevState) => ({
      currentRoleIndex: (prevState.currentRoleIndex + 1) % prevState.roles.length,
      displayedRole: '',
      charIndex: 0,
    }));
  };

  updateDisplayedRole = () => {
    const { roles, currentRoleIndex, charIndex } = this.state;
    if (charIndex < roles[currentRoleIndex].length) {
      this.setState((prevState) => ({
        displayedRole: prevState.displayedRole + roles[currentRoleIndex][charIndex],
        charIndex: prevState.charIndex + 1,
      }));
    }
  };

  render() {
    const { displayedRole } = this.state;
    return (
      <div className="home-container">
        <img
          src="https://hemangnakarani.github.io/astro/ssa.DaGceUPd_Z2wtw7E.svg"
          alt="home icon"
          loading="lazy"
        />
        <p className="heading-name">Hello I'm<br/><span className="name">Arukala Vinay Teja</span></p>
        <h2  className="heading">I'm good at <span className="role">{displayedRole}</span></h2>
      </div>
    );
  }
}

export default Home;
