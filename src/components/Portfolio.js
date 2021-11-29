import image1 from "../images/beer.jpg";
import image2 from "../images/come-soon_1.jpg";
import image3 from "../images/come-soon_2.jpg";
import image4 from "../images/come-soon_3.jpg";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <Animated animationIn="zoomInUp" isVisible={true}>
          <div className="portfolio__card card">
            <img className="card__image" src={image1} alt="beer" />
            <h3 className="card__title">Save The Ales</h3>
            <span className="card__text">React JS </span>
            <Link className="card__btn" to="/portfolio/savetheales">
              Learn more
            </Link>
          </div>
        </Animated>
        <Animated animationIn="zoomInUp" isVisible={true}>
          <div className="portfolio__card card">
            <img className="card__image" src={image2} alt="coming soon" />
            <h3 className="card__title">Coming Soon</h3>
            <span className="card__text">Not yet </span>
            <button className="card__btn" type="button">
              Learn more
            </button>
          </div>
        </Animated>
        <Animated animationIn="zoomInUp" isVisible={true}>
          <div className="portfolio__card card">
            <img className="card__image" src={image3} alt="coming soon" />
            <h3 className="card__title">Coming Soon</h3>
            <span className="card__text">Not yet </span>
            <button className="card__btn" type="button">
              Learn more
            </button>
          </div>
        </Animated>
        <Animated animationIn="zoomInUp" isVisible={true}>
          <div className="portfolio__card card">
            <img className="card__image" src={image4} alt="coming soon" />
            <h3 className="card__title">Coming Soon</h3>
            <span className="card__text">Not yet </span>
            <button className="card__btn" type="button">
              Learn more
            </button>
          </div>
        </Animated>
        <Animated animationIn="zoomInUp" isVisible={true}>
          <div className="portfolio__card card">
            <img className="card__image" src={image2} alt="coming soon" />
            <h3 className="card__title">Coming Soon</h3>
            <span className="card__text">Not yet </span>
            <button className="card__btn" type="button">
              Learn more
            </button>
          </div>
        </Animated>
      </section>
    </>
  );
}
