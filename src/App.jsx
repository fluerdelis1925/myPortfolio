import styles from './App.module.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Heros from './components/Hero/Heros'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'



function App() {

  return (
    <div className={styles.App}>
    <Navbar/>
    <Heros/>
    <About/>
    <Experience/>
    <Projects/>

   
    </div>
  )
}

export default App
