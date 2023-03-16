import style from './TextField.module.css';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={style.wrapper}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <input id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;
