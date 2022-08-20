import styles from './HomePage.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <p className={styles.subTitle}>Welcome to the</p>
    <h1 className={styles.title}>Phonebook</h1>
  </div>
);

export default HomeView;
