import React from 'react'
import Lounge from './Components/Lounge/Lounge'
import Travelers from './Components/Best Travelers/Travelers'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Info from './Components/Info/Info'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import Subscribe from './Components/Subscribe/Subscribe'
import Support from './Components/Support/Support'
import './main.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribe />
      <Footer/>
    </div>
  )
}

export default App;