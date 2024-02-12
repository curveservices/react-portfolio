import {
  faGithub,
  faLinkedin,
  faSkype,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const SocialIcons = () => {
  return (
    <>
      <ul className="icon-ul">
        <li className="ico">
          <a
            target="_blank"
            rel="noreferer"
            href="https://www.linkedin.com/in/paul-rossiter-a133a155/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferer"
            href="https://github.com/curveservices"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferer"
            href="https://twitter.com/Crypto_Rozla"
          >
            <FontAwesomeIcon icon={faXTwitter} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferer" href="skype:live:p.rossiter_1">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default SocialIcons
