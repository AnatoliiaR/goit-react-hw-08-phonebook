import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style.home}>
      <h1 className={style.title}>HomePage</h1>
      <p className={style.text}>Please, login or sign up </p>
    </div>
  );
};

export default HomePage;
