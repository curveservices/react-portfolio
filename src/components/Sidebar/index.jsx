import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/id.png'
import subLogo from '../../assets/images/immutable.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faToolbox,
  faUser,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="nav-bar">
      <div className="logo" >
        <img className='main-logo' src={LogoS} alt="logo" />
        {/* <img className='sub-logo' src={subLogo} alt='immutable-designs' /> */}
      </div>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faToolbox} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          icon={faClose}
          color="#26c9ff"
          size="3x"
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
      </nav>

      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#26c9ff"
        size="3x"
        className="hamburger"
      />
    </div>
  )
}

export default Sidebar
