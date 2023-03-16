import style from '../Button/Button.module.css';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
