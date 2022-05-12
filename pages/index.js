import { NavBar } from "./components/NavBar.js"
import { Destaques } from './components/Destaques'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (

    <div className={styles.container}>
      <NavBar />
      <Destaques />
    </div>

  )
}

export default Home