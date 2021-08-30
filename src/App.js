import './App.css'
import Hero from './components/hero/Hero'
import Topbar from './components/topbar/Topbar'
import Promo from './components/promo/Promo.jsx'
import Info from './components/info/Info.jsx'

function App() {
  return (
    <div className='App'>
      <Topbar />
      <Hero />
      <Promo />
      <Info />
    </div>
  )
}

export default App
