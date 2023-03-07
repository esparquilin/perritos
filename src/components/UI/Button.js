import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.submit}
      onClick={props.onClick}
      className={`props.className ? ${classes.button} ${props.customButton} : ${classes.button}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
