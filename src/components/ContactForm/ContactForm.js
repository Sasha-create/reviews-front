import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

import { contactsOperations } from "../../redux/contacts";
import Button from "../Button/Button";
import s from "./ContactForm.module.scss";
// import routes from "../../routes";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [required, setRequired] = useState(false);

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

  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    review();
    // if (email === "" || name === "") {
    //   setRequired(true);
    //   return;
    // } else {
    //   setRequired(false);
    // }

    reset();
    // history.push(routes.login);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.formReach}>
        <h1 className={s}>Reach out to us!</h1>
        <div className={s.formInputs}>
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
      </div>
    </form>
    // <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
    //   <h1 className={styles.title}>Регистрация</h1>
    //   <label className={styles.label}>
    //     {required && <span className={styles.span_star}>*</span>}
    //     Электронная почта:
    //     <input
    //       className={styles.input}
    //       type="email"
    //       name="email"
    //       value={email}
    //       placeholder="your@email.com"
    //       onChange={handleChange}
    //     />
    //     {required && (
    //       <span className={styles.span_required}>это обязательное поле</span>
    //     )}
    //   </label>
    //   <label className={styles.label}>
    //     {required && <span className={styles.span_star}>*</span>}
    //     Пароль:
    //     <input
    //       className={styles.input}
    //       type="password"
    //       name="password"
    //       value={password}
    //       placeholder="Пароль"
    //       onChange={handleChange}
    //     />
    //     {required && (
    //       <span className={styles.span_required}>это обязательное поле</span>
    //     )}
    //   </label>
    //   <div className={styles.button__container__signup}>
    //     <Button />
    //   </div>
    // </form>
  );
};

export default ContactForm;
// import React, { useState } from "react";
// import { CSSTransition } from "react-transition-group";
// import { useDispatch } from "react-redux";
// import { contactsOperations } from "../../redux/contacts/index";
// import Button from "../Button/Button";
// import s from "./ContactForm.module.scss";
// import fadeAlert from "../../fadeModules/fadeContactFormAlert.module.css";

// export default function ContactForm() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [alert, setAlert] = useState(false);
//   const dispatch = useDispatch();
//   // const contacts = useSelector(contactsSelectors.getAllContacts);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     switch (name) {
//       case "name":
//         setName(value);
//         break;

//       case "email":
//         setEmail(value);
//         break;

//       case "message":
//         setMessage(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isValidateForm = validateForm();
//     if (!isValidateForm) return;
//     dispatch(contactsOperations.fetchContacts(name, email, message));
//     resetForm();
//   };

//   const handleAlert = (message) => {
//     setAlert(true);
//     setMessage(message);
//     setTimeout(() => setAlert(false), 2000);
//   };

//   const validateForm = () => {
//     if (!name || !email || !message) {
//       handleAlert("Some field is empty");
//       return;
//     }
//   };

//   const resetForm = () => {
//     setEmail("");
//     setName("");
//     setMessage("");
//   };

//   return (
//     <>
//       <CSSTransition
//         in={alert}
//         timeout={250}
//         classNames={fadeAlert}
//         unmountOnExit
//       >
//         <p className={fadeAlert.alert}>{message}</p>
//       </CSSTransition>
//       <div className={s.formReach}>
//         <h1 className={s}>Reach out to us!</h1>
//         <div className={s.formInputs}>
//           <form onSubmit={handleSubmit}>
//             <label className={s.label}>
//               <br />
//               <input
//                 className={s.input}
//                 type="text"
//                 value={name}
//                 name="name"
//                 placeholder="Your name *"
//                 onChange={handleInputChange}
//               />
//             </label>
//             <br />
//             <label className={s.label}>
//               <br />
//               <input
//                 className={s.input}
//                 type="email"
//                 value={email}
//                 name="email"
//                 placeholder="Your e-mail *"
//                 onChange={handleInputChange}
//               />
//             </label>
//             <br />
//             <label className={s.label}>
//               <br />
//               <input
//                 className={s.input}
//                 type="text"
//                 value={message}
//                 name="message"
//                 placeholder="Your message *"
//                 onChange={handleInputChange}
//               />
//             </label>
//             <br />
//             <div className={s.button}>
//               <Button />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
