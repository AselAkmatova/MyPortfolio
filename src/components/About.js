import ScrollAnimation from "react-animate-on-scroll";
import { Award } from "react-bootstrap-icons";

export default function About() {
  return (
    <>
      <h2 className="about__title">About me</h2>
      <div className="about__content content">
        <ScrollAnimation animateIn="slideInLeft">
          <div className="content__about-left-col about-left-col">
            <div className="about-col__personal personal">
              <h4>Personal Information</h4>
              <p>
                <span> Name:</span> Akmatova Asel
              </p>
              <p>
                <span>Date od Birth:</span> 20/07/1992
              </p>
              <p>
                <span>Residence:</span> Bishkek, Kyrgyzstan
              </p>
              <p>
                <span> Email: </span>
                <a
                  href="mailto:aselakmatova20kb@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="personal-info__item"
                >
                  aselakmatova20kb@gmail.com
                </a>
              </p>
            </div>
            <div className="about-col__experience experience">
              <h4>Experience (last working place)</h4>
              <h5>LLC Travel Land</h5>
              <p>October 2016 - September 2021</p>
              <p>Tourism manager</p>
              <ul>
                <li>Increased travel packages</li>
                <li>Signed contracts with key partners from Europe</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight">
          <div className="content__education education">
            <h4>Education</h4>
            <div className="education__university university">
              <h5 className="university__title">
                Kyrgyz National University | 2010 - 2015
              </h5>
              <p>Faculty of Foreign Langages</p>
              <p>Theory and Methodology of French Language Teaching</p>
              <p>
                <Award size={24} color="#D00000" /> Diploma with Honors
              </p>
            </div>
            <div className="education__university university">
              <h5 className="university__title">
                IT - Academia | October 2020 - June 2021
              </h5>
              <p>Frontend</p>
              <p>
                JavaScript, React, HTML, CSS, Bootstrap, Figma, Bem,
                Jquery,ExpressJs
              </p>
            </div>
            <div className="education__university university">
              <h5 className="university__title">
                Codify | December 2021 - February 2022
              </h5>
              <p>UI-UX Design</p>
              <p>Figma, UX, UX, web design</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="about__skills skills">
        <ScrollAnimation animateIn="slideInLeft">
          <div className="skills__coding coding">
            <h4>Coding skills</h4>
            <label htmlFor="html5">HTML5</label>
            <progress id="html5" max="100" value="75">
              75%
            </progress>
            <label htmlFor="css3">CSS3</label>
            <progress id="css3" max="100" value="70">
              70%
            </progress>
            <label htmlFor="javascript">JavaScript</label>
            <progress id="javascript" max="100" value="50">
              50%
            </progress>
            <label htmlFor="react">React</label>
            <progress id="react" max="100" value="60">
              60%
            </progress>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight">
          <div className="skills__languages languages">
            <h4>Language Skills</h4>
            <label htmlFor="kyrgyz">Kyrgyz</label>
            <progress id="kyrgyz" max="100" value="100">
              100%
            </progress>
            <label htmlFor="russian">Russian</label>
            <progress id="russian" max="100" value="100">
              100%
            </progress>
            <label htmlFor="english">English</label>
            <progress id="english" max="100" value="75">
              75%
            </progress>
            <label htmlFor="french">French</label>
            <progress id="french" max="100" value="85">
              85%
            </progress>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}
