import Header from './components/Header'
import MainVisual from './components/MainVisual'
import './App.css'
import About from './components/About'
import Bicycle from './components/Bicycle'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <About />
        <Bicycle />
      </main>
      <Footer />
    </>
  )
}

export default App
