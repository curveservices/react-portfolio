import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { db } from '../../../firebase'
import { useState,useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'

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
    <div className="images-container">
      {portfolio.map((port) => {
        return (
          <div className="image-box" key={port.id}>
            <img src={port.img} alt="portfolio" className="portfolio-image" />
            <div className="content">
              <h4 className="name">{port.name}</h4>
              <p className="desc">{port.desc}</p>
              <div className="btn-container">
                <button className="btn" onClick={() => window.open(port.live)}>
                  VIEW
                </button>
                <button className="btn" onClick={() => window.open(port.repo)}>
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card;
