import { Animated } from "react-animated-css";

export default function Home() {
  return (
    <>
      <section className="home">
        <article className="home-main">
          <img
            className="home-main__image"
            src="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="keyboard"
          />
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
