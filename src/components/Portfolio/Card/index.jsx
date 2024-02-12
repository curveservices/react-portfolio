import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import portfolioData from '../../../data/portfolio.json'

const Card = () => {
  const portfolio = portfolioData.portfolio
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

export default Card
