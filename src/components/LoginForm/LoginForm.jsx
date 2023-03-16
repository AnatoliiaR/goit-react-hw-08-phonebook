import style from '../LoginForm/LoginForm.module.css';
import useForm from '../../services/hooks/useForm';
import TextField from 'shared/TextField/TextField';
import Button from 'shared/Button/Button';

import initialState from './initialState';
import fields from './fields';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <div className={style.section}>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextField
          value={email}
          handleChange={handleChange}
          {...fields.email}
          className={style.input}
          placeholder="example: info@email.com"
        />
        <TextField
          value={password}
          handleChange={handleChange}
          {...fields.password}
          className={style.input}
          placeholder="Your password"
        />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
