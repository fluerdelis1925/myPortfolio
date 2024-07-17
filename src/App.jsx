import styles from './App.module.css'
import About from './components/About/About'
import Heros from './components/Hero/Heros'
import Navbar from './components/Navbar/Navbar'



function App() {

  return (
    <div className={styles.App}>
    <Navbar/>
    <Heros/>
    <About/>
    
   
    </div>
  )
}

export default App
