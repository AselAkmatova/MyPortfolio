import {
  Facebook,
  Telegram,
  Whatsapp,
  Github,
  Check2Circle,
} from "react-bootstrap-icons";
import { Form } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Animated } from "react-animated-css";

export default function Contact() {
  let [validated, setValidated] = useState(false);
  let [form, setForm] = useState({});
  let [messageAccepted, setMessageAccepted] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm(() => {
      return { ...form, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form2 = event.currentTarget;

    if (form2.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form2.checkValidity()) {
      setMessageAccepted(true);
    }
  };
  return (
    <>
      <section className="contact">
        <Animated animationIn="zoomIn" isVisible={true}>
          {!messageAccepted && <h2 className="contact__title">Contact me</h2>}
        </Animated>
        {messageAccepted && (
          <div className="message-success">
            <Check2Circle size={55} color="#febe27" />
            <h3>Thank you!</h3>
            <p>Your message has been sent</p>
          </div>
        )}
        <Form
          className="contact__form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          hidden={messageAccepted}
        >
          <Animated animationIn="slideInLeft" isVisible={true}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="userName"
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              <Form.Control.Feedback type="invalid">
                <p className="form-alert">Please enter your name </p>
              </Form.Control.Feedback>
            </Form.Group>
          </Animated>
          <Animated animationIn="slideInRight" isVisible={true}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Your email"
                required
              />
              <Form.Control.Feedback type="invalid">
                <p className="form-alert">Please enter your email </p>
              </Form.Control.Feedback>
            </Form.Group>
          </Animated>
          <Animated animationIn="slideInLeft" isVisible={true}>
            <Form.Group className="mb-3">
              <Form.Control
                required
                as="textarea"
                name="message"
                onChange={handleChange}
                rows={5}
                placeholder="Your message"
              />
              <Form.Control.Feedback type="invalid">
                <p className="form-alert">Please enter your message</p>
              </Form.Control.Feedback>
            </Form.Group>
          </Animated>
          <Animated animationIn="slideInRight" isVisible={true}>
            <button className="form__btn" type="submit">
              Send
            </button>
          </Animated>
        </Form>
        <Animated animationIn="slideInLeft" isVisible={true}>
          <div className="contact__icons">
            <a
              href="https://www.facebook.com/asel.akmatova/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size="35" color="white" />
            </a>
            <a
              href="https://wa.me/+996550627760"
              target="_blank"
              rel="noreferrer"
            >
              <Whatsapp size="35" color="white" />
            </a>
            <a
              href="https://telegram.me/asel_akmatova"
              target="_blank"
              rel="noreferrer"
            >
              <Telegram size="35" color="white" />
            </a>
            <a
              href="https://github.com/AselAkmatova"
              target="_blank"
              rel="noreferrer"
            >
              <Github size="35" color="white" />
            </a>
          </div>
        </Animated>
      </section>
    </>
  );
}
