import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/contacts";
import Button from "../Button/Button";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const review = () =>
    dispatch(contactsOperations.fetchContacts({ email, name, message }));

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "message":
        return setMessage(value);
      default:
        return;
    }
  };
  const reset = () => {
    setEmail("");
    setName("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    review();
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.formReach}>
        <h1 className={s}>Reach out to us!</h1>
        <label className={s.label}>
          <br />
          <input
            className={s.input}
            type="text"
            value={name}
            name="name"
            placeholder="Your name *"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>
        <br />
        <div className={s.button}>
          <Button />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
