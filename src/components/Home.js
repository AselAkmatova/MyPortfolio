import { Animated } from "react-animated-css";
import file from "../images/Resume_Asel Akmatova.pdf";
import image1 from "../images/glass.png";
import image2 from "../images/Vector.png";

export default function Home() {
  return (
    <>
      <div className="home-content">
        <Animated animationIn="slideInLeft" isVisible={true}>
          <h1 className="home-content__title">Asel AKMATOVA</h1>
        </Animated>
        <Animated animationIn="slideInRight" isVisible={true}>
          <h3 className="home-content__subtitle">Frontend Intern</h3>
        </Animated>
        <Animated animationIn="slideInLeft" isVisible={true}>
          <a href={file} download className="home-content__btn">
            Download CV
          </a>
        </Animated>
      </div>

      <div className="home-glasses">
        <img alt="animation text" width={80} src={image1}></img>
        <img alt="animation text" width={80} src={image1}></img>
      </div>

      <img alt="girl clip art" className="home-img" width={600} src={image2} />
    </>
  );
}
