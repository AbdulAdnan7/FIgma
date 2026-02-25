
import './App.css'
import Home from './components/Home'
import LogoSlider from './components/LogoSlider'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
     <Navbar />
     <div className='overflow-x-hidden'>
      <Home />
      <LogoSlider />
     </div>
    </>
  )
}

export default App
