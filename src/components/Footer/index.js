import "./index.css";

import "./index.css";

const Footer = () => (
  <div className="contact-container">
    <h2>Contact</h2>
    <p>Feel free to reach out to me for any queries or opportunities.</p>

    <div className="contact-form">
      <h3>Email Me</h3>
      <input type="email" placeholder="Your Email" />
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Message"></textarea>
      <button className="send-button">Send</button>
    </div>

    <div className="social-links">
      <button href="#" className="social-icon">
        <img
          src="https://img.icons8.com/?size=100&id=13930&format=png"
          alt="LinkedIn"
        />
        <span>LinkedIn</span>
      </button>
      <button href="#" className="social-icon">
        <img
          src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
          alt="Facebook"
        />
        <span>Facebook</span>
      </button>
      <button href="#" className="social-icon">
        <img
          src="https://i.pinimg.com/originals/ed/54/51/ed5451961869a97b434b185f2fe064cc.webp"
          alt="Twitter"
        />
        <span>Twitter</span>
      </button>
      <button className="social-icon">
        <img
          src="https://th.bing.com/th/id/OIP.ZPLHcofWB-w5X6z8GZ3IngHaHa?rs=1&pid=ImgDetMain"
          alt="Instagram"
        />
        <span>Instagram</span>
      </button>
    </div>
  </div>
);

export default Footer;

// const Footer = () => (
//   <div className="footer-container">
//     <div className="portfolio-header">
//       <img
//         className="header-icon"
//         src="https://img.icons8.com/?size=100&id=nqg2tDAxO1LG&format=png&color=000000"
//         alt="header"
//       />
//       <h1>VINAY TEJA Portfolio</h1>
//     </div>
//     <h1>Connect with Me...</h1>
//     <ul className="footer-social-media-icons">
//       <li>
//         <img
//           className="social-network-img"
//           src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
//           alt="Linked In"
//         />
//       </li>
//       <li>
//         <img
//           className="social-network-img"
//           src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
//           alt="Git Hub"
//         />
//       </li>
//       <li>
//         <img
//           className="social-network-img"
//           src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png"
//           alt="Mail"
//         />
//       </li>
//     </ul>
//     <p>Made with ❤ Vinay Teja</p>
//     <p>© 2024 Vinay Teja. All rights reserved.</p>
//   </div>
// );
// export default Footer;
