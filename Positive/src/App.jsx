
import './App.css'
import Home from './components/Home'
import LogoSlider from './components/LogoSlider'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {

  return (
    <>
     <Navbar />
     <div className='overflow-x-hidden'>
      <Home />
      <LogoSlider />
      <Services />
     </div>
    </>
  )
}

export default App
