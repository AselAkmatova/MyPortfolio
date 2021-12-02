import { Animated } from "react-animated-css";
import image from "../images/main.jpg";

export default function Home() {
  return (
    <>
      <section className="home">
        <article className="home-main">
          <img className="home-main__image" src={image} alt="keyboard" />
          <div className="home-main__frame">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </article>
        <div className="home-text">
          <Animated animationIn="slideInLeft" isVisible={true}>
            <h1 className="home-text__title">Asel AKMATOVA</h1>
          </Animated>
          <Animated animationIn="slideInRight" isVisible={true}>
            <h3 className="home-text__subtitle">Front-End Intern</h3>
          </Animated>
        </div>
      </section>
    </>
  );
}
