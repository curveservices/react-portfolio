import {
  faGithub,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './HomeImage'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'u', 'l', ' ', 'R', 'o', 's', 's', 'i', 't', 'e', 'r']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className="first-letter"> P</span>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={jobArray}
              idx={27}
            />
          </h1>
          <h2>Frontend developer / Javascript Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <ul>
            <li>
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
                <FontAwesomeIcon icon={faX} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferer" href="skype:live:p.rossiter_1">
                <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Logo />
      <Loader type="pacman" />
    </>
  )
}

export default Home
