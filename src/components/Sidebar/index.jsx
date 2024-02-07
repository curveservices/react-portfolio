import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/id.png'
import subLogo from '../../assets/images/immutable.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={subLogo} />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faToolbox} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
          <li>
              <a 
                target="_blank" 
                rel='noreferer' 
                href="https://www.linkedin.com/in/paul-rossiter-a133a155/">
                  <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
              </a>
          </li>
          <li>
              <a 
                target="_blank" 
                rel='noreferer' 
                href="https://github.com/curveservices">
                  <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
              </a>
          </li>
          <li>
              <a 
                target="_blank" 
                rel='noreferer' 
                href="https://twitter.com/Crypto_Rozla">
                  <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
              </a>
          </li>
          <li>
              <a 
                target="_blank" 
                rel='noreferer' 
                href="skype:live:p.rossiter_1">
                  <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
              </a>
          </li>
      </ul>
    </div>
  )
}

export default Sidebar
