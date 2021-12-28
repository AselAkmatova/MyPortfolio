import { Animated } from "react-animated-css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCube } from "swiper";
import ScrollAnimation from "react-animate-on-scroll";
SwiperCore.use([EffectCube, Autoplay]);

export default function About() {
  return (
    <>
      <section className="about">
        <article className="about-top">
          <Animated animationIn="slideInLeft" isVisible={true}>
            <svg width="450" height="300">
              <defs>
                <mask id="mask" x="0" y="0" width="450" height="300">
                  <rect x="0" y="0" width="450" height="300" fill="#fff" />
                  <text x="50" text-anchor="middle" y="200" dy="0">
                    A
                  </text>
                  <text x="100" text-anchor="middle" y="200" dy="0">
                    B
                  </text>
                  <text x="150" text-anchor="middle" y="200" dy="0">
                    O
                  </text>
                  <text x="200" text-anchor="middle" y="200" dy="0">
                    U
                  </text>
                  <text x="250" text-anchor="middle" y="200" dy="0">
                    T
                  </text>
                  <text x="300" text-anchor="middle" y="300" dy="0">
                    M
                  </text>
                  <text x="350" text-anchor="middle" y="300" dy="0">
                    E
                  </text>
                </mask>
              </defs>
              <rect
                x="0"
                y="0"
                width="450"
                height="300"
                mask="url(#mask)"
                fill-opacity="1"
                fill="#febe27"
              />
            </svg>
          </Animated>
          <Animated animationIn="slideInRight" isVisible={true}>
            <div className="about-top__personal-info personal-info">
              <h3 className="personal-info__title">Personal Information</h3>
              <p className="personal-info__item">
                <b> Name:</b> Akmatova Asel
              </p>
              <p className="personal-info__item">
                <b>Age:</b> 29 Years{" "}
              </p>
              <p className="personal-info__item">
                <b>Residence:</b> Bishkek, Kyrgyzstan
              </p>
              <a
                href="mailto:aselakmatova20kb@gmail.com"
                target="_blank"
                className="personal-info__item"
              >
                <b> Email:</b> aselakmatova20kb@gmail.com
              </a>
              <a
                href="tel:+996550627760"
                target="_blank"
                className="personal-info__item"
              >
                <b> Tel:</b> +996550627760
              </a>
            </div>
          </Animated>
        </article>
        <article className="about-middle">
          <ScrollAnimation animateIn="slideInLeft">
            <div className="about-middle__education education">
              <h3 className="education__title">Education</h3>
              <h4 className="education__subtitle education__subtitle-first">
                Kyrgyz National University
              </h4>
              <p className="education__item">Faculty of Foreign Langages</p>
              <p className="education__item">
                Theory and Metodology of Teaching <br /> (Diploma with Honors)
              </p>
              <h4 className="education__subtitle education__subtitle-second">
                IT-Academia
              </h4>
              <p className="education__item">Frontend</p>
              <p className="education__item">
                JavaScript, React, HTML, CSS, <br />
                Bootstrap, Figma, Bem, Jquery, ExpressJs
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInRight">
            <div className="about-middle__experience experience">
              <h3 className="experience__title">Experience</h3>
              <h4 className="experience__subtitle experience__subtitle-first">
                LLC Travel Land
              </h4>
              <p className="experience__item">Tourism manager</p>
              <p className="experience__item">
                Sales, product management, trainings <br /> tourism fairs
              </p>
              <h4 className="experience__subtitle experience__subtitle-second">
                LLC Kyrgyz Asia
              </h4>
              <p className="experience__item">Guide-interpretor</p>
              <p className="experience__item">
                Guideing, translation french-russian-kyrgyz
              </p>
            </div>
          </ScrollAnimation>
        </article>
        <article className="about-bottom">
          <ScrollAnimation animateIn="slideInLeft">
            <div className="about-bottom__coding-skills coding-skills">
              <h3 className="coding-skills__title">Coding skills</h3>
              <label for="html5">HTML5</label>
              <progress id="html5" max="100" value="75">
                75%
              </progress>
              <label for="css3">CSS3</label>
              <progress id="css3" max="100" value="70">
                70%
              </progress>
              <label for="javascript">JavaScript</label>
              <progress id="javascript" max="100" value="50">
                50%
              </progress>
              <label for="react">React</label>
              <progress id="react" max="100" value="60">
                60%
              </progress>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInRight">
            <div className="about-bottom__language-skills language-skills">
              <h3 className="language-skills__title">language skills</h3>
              <label for="kyrgyz">Kyrgyz</label>
              <progress id="kyrgyz" max="100" value="100">
                100%
              </progress>
              <label for="russian">Russian</label>
              <progress id="russian" max="100" value="100">
                100%
              </progress>
              <label for="english">English</label>
              <progress id="english" max="100" value="75">
                75%
              </progress>
              <label for="french">French</label>
              <progress id="french" max="100" value="85">
                85%
              </progress>
            </div>
          </ScrollAnimation>
        </article>
      </section>
    </>
  );
}
