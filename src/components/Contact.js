import { Telegram, Github, Check2Circle } from "react-bootstrap-icons";
import { Form } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import ScrollAnimation from "react-animate-on-scroll";

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
      emailjs.sendForm(
        "my_gmail",
        "template_xbbw1lu",
        form2,
        "user_TsyEUcib7ZtF7XCD50DJ2"
      );
    }
  };

  return (
    <>
      <ScrollAnimation animateIn="zoomIn">
        {!messageAccepted && (
          <>
            <h2 className="contact__title">Contact me</h2>
            <p className="contact__subtitle">Feel free to contact me :)</p>
          </>
        )}
      </ScrollAnimation>
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
        <ScrollAnimation animateIn="slideInLeft">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="userName"
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <Form.Control.Feedback type="invalid">
              <p className="form-alert">Please enter your name </p>
            </Form.Control.Feedback>
          </Form.Group>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight">
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <Form.Control.Feedback type="invalid">
              <p className="form-alert">Please enter your email </p>
            </Form.Control.Feedback>
          </Form.Group>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInLeft">
          <Form.Group className="mb-3">
            <Form.Control
              required
              as="textarea"
              name="message"
              onChange={handleChange}
              rows={5}
              placeholder="Message"
            />
            <Form.Control.Feedback type="invalid">
              <p className="form-alert">Please enter your message</p>
            </Form.Control.Feedback>
          </Form.Group>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight">
          <button className="form__btn" type="submit">
            Send
          </button>
        </ScrollAnimation>
      </Form>
      <div className="contact__social">
        <a
          href="https://github.com/AselAkmatova"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={32} />
        </a>
        <a
          href="https://telegram.me/asel_akmatova"
          target="_blank"
          rel="noreferrer"
        >
          <Telegram size={32} />
        </a>
      </div>
    </>
  );
}
