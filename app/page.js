import styles from "./page.module.css";
import HomePage from './components/HomePage/HomePage';
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <HomePage />
    </main>
  );
}
