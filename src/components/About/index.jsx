import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import CubeSpinner from '../cubespinner'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello! I’m Paul Rossiter, an ambitious front-end developer who’s looking for
            businesses who want to improve their website, digital branding and
            reach a bigger online audience.
          </p>
          <p>
            I retrained as a full stack developer in 2021, having decided to embark on
            a new challenge after 20 years in hospitality.
            During my career I ran hotels for one of the UK’s biggest breweries,
            later I founded and ran my own mobile food business.
            My experience as a business leader means I love working with businesses to
            help achieve their goals, and means I have a deep understanding of what you
            need and how to support you with technology.
          </p>
          <p>
            Many businesses know they need to improve their digital offering,
            but don’t always know where to start: I can work with you to understand what you,
            and your clients, need. I’ll show you how to enhance your website and digital services.
            I don’t do jargon, but I create first-class,
            fully-optimised and user-friendly digital platforms which put people first.
          </p>
          <p>My tech stack is <b>MERN</b> stack, I create full stack applications
            with JavaScript, MongoDB, Express.js, React.js & Node.js.
          </p>
          <p><b>Skills include:</b> HTML5, CSS3, React, Tailwind, SASS, TypeScript, Next.js,
            Jest TDD, SQL, Prisma, GIT & Figma </p>
        </div>
        <CubeSpinner />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
