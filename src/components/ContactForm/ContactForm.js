import { Component } from "react";
import { v4 as uuid } from "uuid";
import s from "./ContactForm.module.scss";

const INITIAL_STATE = {
  email: "",
  name: "",
  message: "",
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const { onAdd } = this.props;
    const isValidateForm = this.validateForm();
    if (!isValidateForm) return;
    onAdd({ id: uuid(), name, email, message });
    this.resetForm();
  };

  validateForm = () => {
    const { name, email, message } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !email || !message) {
      alert("Some field is empty");
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className={s.formReach}>
        <h1 className={s}>Reach out to us!</h1>
        <div className={s.formInputs}>
          <form onSubmit={this.handleSubmit}>
            <label className={s.label}>
              <br />
              <input
                className={s.input}
                type="text"
                value={name}
                name="name"
                placeholder="Your name *"
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <button className={s.button} type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
