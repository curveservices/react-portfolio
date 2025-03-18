import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const CubeSpinner = () => {
  return (
    <>
      <div className="wrapper">
        <div className="circle circle-1">
          <div className="ball ball-1"></div>
        </div>
        <div className="circle circle-2">
          <div className="ball ball-2"></div>
        </div>
        <div className="circle circle-3">
          <div className="ball ball-3"></div>
        </div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSass} />
            </div>
          </div>
        </div>
    </>
  );
};

export default CubeSpinner;
