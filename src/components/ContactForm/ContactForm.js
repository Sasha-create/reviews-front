import React, { useState } from "react";
import s from "./ContactForm.module.scss";
import fadeAlert from "../../fadeModules/fadeContactFormAlert.module.css";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/contacts/index";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();
  // const contacts = useSelector(contactsSelectors.getAllContacts);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "message":
        setMessage(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidateForm = validateForm();
    if (!isValidateForm) return;
    dispatch(contactsOperations.fetchContacts(name, email, message));
    resetForm();
  };

  const handleAlert = (message) => {
    setAlert(true);
    setMessage(message);
    setTimeout(() => setAlert(false), 2000);
  };

  const validateForm = () => {
    if (!name || !email || !message) {
      handleAlert("Some field is empty");
      return;
    }
  };

  const resetForm = () => {
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <>
      <CSSTransition
        in={alert}
        timeout={250}
        classNames={fadeAlert}
        unmountOnExit
      >
        <p className={fadeAlert.alert}>{message}</p>
      </CSSTransition>
      <div className={s.formReach}>
        <h1 className={s}>Reach out to us!</h1>
        <div className={s.formInputs}>
          <form onSubmit={handleSubmit}>
            <label className={s.label}>
              <br />
              <input
                className={s.input}
                type="text"
                value={name}
                name="name"
                placeholder="Your name *"
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className={s.label}>
              <br />
              <input
                className={s.input}
                type="email"
                value={email}
                name="email"
                placeholder="Your e-mail *"
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className={s.label}>
              <br />
              <input
                className={s.input}
                type="text"
                value={message}
                name="message"
                placeholder="Your message *"
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button className={s.button} type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
