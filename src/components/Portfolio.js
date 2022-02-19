import image1 from "../images/beer.jpg";
import image2 from "../images/come-soon_1.jpg";
import image3 from "../images/come-soon_2.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  return (
    <>
      <h2 className="portfolio__title">Portfolio</h2>
      <div className="portfolio__content">
        <ScrollAnimation animateIn="zoomIn">
          <div className="portfolio__card card">
            <img className="card__image" src={image1} alt="beer" />
            <div className="card__info">
              <h4 className="card__title">Save The Ales</h4>
              <span className="card__text">React JS </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AselAkmatova/SaveTheAles-2021"
                className="card__btn"
              >
                Learn more
              </a>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn">
          <div className="portfolio__card card">
            <img className="card__image" src={image2} alt="coming soon" />
            <div className="card__info">
              <h4 className="card__title">Coming Soon</h4>
              <span className="card__text">Not yet </span>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn">
          <div className="portfolio__card card">
            <img className="card__image" src={image3} alt="coming soon" />
            <div className="card__info">
              <h4 className="card__title">Coming Soon</h4>
              <span className="card__text">Not yet </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}
