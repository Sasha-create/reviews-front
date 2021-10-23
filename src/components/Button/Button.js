import s from "./Button.module.scss";

const Button = ({ buttonHandler }) => {
  return (
    <button type="submit" onClick={buttonHandler} className={s.button}>
      Send message
    </button>
  );
};

export default Button;
