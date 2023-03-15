import style from '../RegisterForm/RegisterForm.module.css';
import useForm from '../../services/hooks/useForm';
import TextField from 'shared/TextField/TextField';

import initialState from './initialstate';

const RegisterForm = ({ onSubmit }) => {
  const { state, onChange, handleSubmit } = useForm({ initialState, onSubmit });

  return (
    <form onSubmit={handleSubmit}>
      <TextField />
      <TextField />
      <TextField />
    </form>
  );
};

export default RegisterForm;
