import Home from './Pages/Home/Home';
import About from "./Pages/About/About";
import { BrowserRouter, Route, Routes } from 'react-router';
import Portofolio from './Pages/Portofolio/Portofolio';
import Contact from './Pages/Contact/Contact';



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portofolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App
