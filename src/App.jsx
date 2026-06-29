import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Notfound from './components/Notfound.jsx'
import Men from './components/menCollection.jsx'
import Women from './components/womenCollection.jsx'
import Product from './components/product.jsx'
import Cources from './components/Cources.jsx'
import Details from './components/courcesDetails.jsx'
import Navhome from './components/goHome.jsx'

function App() {
  return <div>
    <Navbar></Navbar>
    
    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/about' element = {<About></About>}></Route>
      <Route path='/contact' element = {<Contact></Contact>}></Route>
      <Route path='*' element = {<Notfound></Notfound>}></Route>
      <Route path='/men' element={<Men></Men>}></Route>
      <Route path='/women' element={<Women></Women>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path='/cources' element={<Cources></Cources>}></Route>
      <Route path='/cources/:id' element={<Details></Details>}></Route>


    </Routes>
    <Navhome></Navhome>
    <Footer></Footer>
    
    
  </div>
}

export default App
