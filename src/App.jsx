import styles from './App.module.css'
import Heros from './components/Hero/Heros'
import Navbar from './components/Navbar/Navbar'



function App() {

  return (
    <div className={styles.App}>
    <Navbar/>
    <Heros/>
    
   
    </div>
  )
}

export default App
