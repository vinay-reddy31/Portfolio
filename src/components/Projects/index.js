import { Component } from "react";

import TabItem from "../TabItem";
import ProjectItem from "../ProjectItem";
import { FaGithub } from "react-icons/fa";

import "./index.css";

const tabsList = [
  { tabId: "WEB", displayText: "Web" },
  { tabId: "AIML", displayText: "AI" },
  { tabId: "OTH", displayText: "Other" },
];

const projectsList = [
  {
    projectId: 0,
    category: "WEB",
    imageURL:
      "https://th.bing.com/th/id/OIP.VO_Jm-fX2jD11f_qDvOB4QHaFT?rs=1&pid=ImgDetMain",
    title: "Todos Web Application",
    description:
      "A Todos Web Application enables the user to add, delete and mark the todos as completed.",
  },
  {
    projectId: 1,
    category: "WEB",
    imageURL:
      "https://th.bing.com/th/id/OIP.zJ56fxZnSrg7Tc_oL6MTOQHaE7?rs=1&pid=ImgDetMain",
    title: "Ecommerce Web Application",
    description:
      "An Ecommerce Web Application enables the user to browse through the products and add them to the cart.",
  },
  {
    projectId: 2,
    category: "WEB",
    imageURL:
      "https://th.bing.com/th/id/OIP.NTYOIFTVbAuBCIt7BsXaDQHaD3?rs=1&pid=ImgDetMain",
    title: "Ecom tracker Application",
    description:
      "An Ecom tracker Application enables the user to track the products and get notified when the price drops.",
  },

  // {
  //   projectId: 0,
  //   category: "WEB",
  //   imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s3-img.png",
  //   title: "Todos Web Application",
  //   description:
  //     "A Todos Web Application enables the user to add, delete and mark the todos as completed.",
  // },
  // {
  //   projectId: 1,
  //   category: "WEB",
  //   imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
  //   title: "Tourism Website",
  //   description:
  //     "A tourism website enables the user to browse through the images of popular destinations.",
  // },
  // {
  //   projectId: 2,
  //   category: "WEB",
  //   imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s1-img.png",
  //   title: "Advanced Technologies",
  //   description:
  //     "A website that gives you a basic understanding of Advanced Technologies.",
  // },
  // {
  //   projectId: 4,
  //   category: "WEB",
  //   imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r4-img.png",
  //   title: "VR Website",
  //   description:
  //     "VR Website enables users to explore AR and VR Products and Industry happenings.",
  // },
  // {
  //   projectId: 5,
  //   category: "WEB",
  //   imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
  //   title: "Food Munch",
  //   description: "Food Much Website is a user-centric food tech website.",
  //   link: "https://vinaytejreddy.ccbp.tech/",
  // },
  // {
  //   projectId: 6,
  //   category: "WEB",
  //   imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r3-img.png",
  //   title: "Portfolio",
  //   description:
  //     "A portfolio is the best alternative for a resume to showcase your skills to the digital world.",
  // },

  // {
  //   projectId: 8,
  //   category: "WEB",
  //   imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d3-img.png",
  //   title: "Speed Typing Test",
  //   description:
  //     "Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.",
  // },
  // {
  //   projectId: 9,
  //   category: "WEB",
  //   imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d1-img.png",
  //   title: "Random Joke Page",
  //   description:
  //     "Random Joke Page is an API-based dynamic Web Application that generates a new joke.",
  // },
  // {
  //   projectId: 10,
  //   category: "WEB",
  //   imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d2-img.png",
  //   title: "Sizing An Image",
  //   description:
  //     "This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.",
  // },
  {
    projectId: 11,
    category: "AIML",
    imageURL:
      "https://lh6.googleusercontent.com/9uI-2XSsMJja80MwU-5HPJUU-3-wKknW62JJMLfuODm0NG2oLXm0STvmYVQbMb7mH6HYNvmYiv-x4_BYa0_m6FOXfSBgfPiT0Ad5wLdJd-vUByAdT1xB_S4KL4fPubFOmfqte3h7Ij8L4cMMtJwChcQ",
    title: "Generative AI",
    description:
      "This is a Generative AI chatbot web application integrated with Open AI API to chat using text and Speech ",
    link: "https://vinayreddygenai.ccbp.tech/",
  },
  {
    projectId: 12,
    category: "AIML",
    imageURL:
      "https://rediminds.com/wp-content/uploads/2020/04/ai-nephrology-980x513.jpg",
    title: "Chronic Disease Prediction",
    description:
      "This is a web application that predicts whether a user has a chronic Disease or Not",
    link: "https://mlwebapp-vinayreddy31.streamlit.app/",
    tech: "Python, Machine Learning, Streamlit",
  },
  {
    projectId: 12,
    category: "AIML",
    imageURL:
      "https://th.bing.com/th/id/OIP.XWMhYAdLcYYpy240II2fgwHaHa?rs=1&pid=ImgDetMain",
    title: "Book Recommendation System",
    description:
      "This is a web application that recommends Top 50 Books and also recommends top 5 Books based on user search",
    link: "https://book-recommendation-system-flax.vercel.app/",
    tech: "HTML, Python, Machine Learning, Flask, Vercel",
  },
];

class Project extends Component {
  state = { activeTabId: tabsList[0].tabId };

  getFilteredProjects = () => {
    const { activeTabId } = this.state;
    const filteredProjects = projectsList.filter(
      (eachProject) => eachProject.category === activeTabId
    );
    return filteredProjects;
  };

  updateActiveTabId = (tabId) => {
    this.setState({
      activeTabId: tabId,
    });
  };

  render() {
    const { activeTabId } = this.state;
    const filteredProjects = this.getFilteredProjects();
    console.log(filteredProjects);
    return (
      <div className="app-container">
        <h1 className="title">Projects</h1>
        <p className="description">Discover some of my latest Projects</p>

        <ul className="tabs-container">
          {tabsList.map((tabDetails) => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              updateActiveTabId={this.updateActiveTabId}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.length === 0 ? (
            <div className="github-container">
              <FaGithub size={100} className="github-icon" />
              <p className="github-description">
                For more projects, check this
              </p>
              <button
                className="github-button"
                onClick={() =>
                  window.open("https://github.com/vinay-reddy31", "_blank")
                }
              >
                Explore Other Projects Here
                <span className="star-animation">✨</span>
              </button>
            </div>
          ) : (
            filteredProjects.map((projectDetails) => (
              <ProjectItem
                key={projectDetails.projectId}
                projectDetails={projectDetails}
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default Project;
