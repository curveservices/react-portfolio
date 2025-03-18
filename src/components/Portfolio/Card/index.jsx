import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { db } from '../../../firebase'
import { useState,useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import './index.scss'
import Button from '../../button'

const Card = () => {
  const [portfolio, setPortfolio] = useState([]);

  const fetchData = async () => {
    try {
      const portfolioData = [];
      const snapShot = await getDocs(collection(db, 'portfolio'));

      snapShot.forEach((doc) => {
        const data = doc.data();
        portfolioData.push({
          id: doc.id,
          img: data.img,
          name: data.name,
          desc: data.desc,
          live: data.live,
          repo: data.repo,
          backImage: data.backImage
        });
      });
      setPortfolio(portfolioData);
    } catch (error) {
      console.error(' Error fetching data', error)
    }
  }

  useEffect(() => {
    fetchData()
  },[]);

  return (
    <div className="card-container">
      {portfolio.map((port) => {
        return (
          <div className="flip-card" key={port.id}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src={port.img}
                        alt={port.name}
                        loading="lazy"
                        className="card-image"
                    />
                    <div className="front-title">
                        <h3 className="name">{port.name}</h3>
                    </div>
                </div>
                <div className="flip-card-back">
                    <img
                        src={port.backImage}
                        alt={port.name}
                        loading="lazy"
                        className="card-back-image"
                    />
                    <h3 className="name">{port.name}</h3>
                    <p className="desc subtitle">{port.desc}</p>
                    <div className="btn-container">
                      <Button
                        text='View'
                        link={port.live}
                        target='_blank'
                      />
                      <Button 
                        text={<FontAwesomeIcon icon={faGithub} />}
                        link={port.repo}
                      />
                        
                          
                    </div>
                </div>
            </div>
        </div>
        )
      })}
    </div>
  )
}

export default Card;
