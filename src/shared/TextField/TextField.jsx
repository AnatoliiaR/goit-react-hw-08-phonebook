import style from './TextField.module.css';

const TextField = ({ label, onChange, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input handleChange={onChange} {...props} />
    </div>
  );
};

export default TextField;
