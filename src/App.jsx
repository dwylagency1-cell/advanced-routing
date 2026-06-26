import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Notfound from './components/Notfound.jsx'

function App() {
  return <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/about' element = {<About></About>}></Route>
      <Route path='/contact' element = {<Contact></Contact>}></Route>
      <Route path='*' element = {<Notfound></Notfound>}></Route>
      

    </Routes>
    <Footer></Footer>
    
    
  </div>
}

export default App
