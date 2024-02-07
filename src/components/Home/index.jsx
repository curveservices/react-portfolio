import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass , setLetterClass] = useState('text-animate');
    const nameArray = ['a','u','l',' ','R','o','s','s','i','t','e','r']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)
    },[])


    return ( 
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                <span className='first-letter'> P</span>
                <AnimatedLetters 
                letterClass={letterClass}
                stringArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters 
                letterClass={letterClass}
                stringArray={jobArray}
                idx={27} />
                </h1>
                <h2>Frontend developer / Javascript Expert </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                
            </div>
        </div>
        <Loader type='pacman' />
        </>
     );
}
 
export default Home;