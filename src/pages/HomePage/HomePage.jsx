import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Welcome!</h1>
      <p className={s.text}>
        Discover a world of contacts at your fingertips with our intuitive
        phonebook. Find businesses, services, and friends effortlessly. Simplify
        your search today!
      </p>
    </div>
  );
};

export default HomePage;
