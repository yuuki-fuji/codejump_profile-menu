import Header from './components/Header'
import MainVisual from './components/MainVisual'
import './App.css'
import About from './components/About'
import Bicycle from './components/Bicycle'

function App() {

  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <About />
        <Bicycle />
      </main>
    </>
  )
}

export default App
