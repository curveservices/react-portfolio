import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import './index.scss';

const About = () => {
    const [letterClass , setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    return ( 
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    stringArray={['A','b','o','u','t', ' ', 'm','e']}
                    idx={15} />
                </h1>
                <p>I'm a very ambitious front-end developer 
                    seeking opportunities to work with fantasic businesses or with your personal project, 
                    I love working with the lastest technologies and on challenging projects.
                </p>
                <p>I am quietly confident, naturally curious and contsantly working on improving
                    my skill set one design problem at a time.
                </p>
                <p>If I need to define myself in one sentance that would be a family person,
                    food enthusiast, cat lover and tech-obsessed!
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faSass} color='#CD6799' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD18D' />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
     );
}
 
export default About;