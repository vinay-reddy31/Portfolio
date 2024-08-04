import './index.css'

const Footer=()=>(
    <div className='footer-container'>
        <div className='portfolio-header'>
        <img className="header-icon" src="https://img.icons8.com/?size=100&id=nqg2tDAxO1LG&format=png&color=000000" alt="header"/>  
        <h1>VINAY TEJA Portfolio</h1>
        </div>
        <h1>Connect with Me...</h1>
        <ul className='footer-social-media-icons'>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png"
            alt="Mail"
          />
        </li>
        </ul>
        <p>Made with ❤ Vinay Teja</p>
        <p>© 2024 Vinay Teja. All rights reserved.</p>
    </div>
)
export default Footer