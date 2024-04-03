import styles from "./page.module.css";
import HomePage from './components/HomePage/HomePage';
import NavBar from "./components/NavBar/NavBar";
import Info from "./components/Info/Info";
import AboutUs from "./components/AboutUs/AboutUs";
import Quotes from "./components/Quotes/Quotes";
import Gallery from "./components/Gallery/Gallery";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <HomePage />
      <Info />
    </main>
  );
}
