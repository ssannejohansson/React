import Project from './components/Projects.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Navbar from './components/navbar.jsx';


function App() {

  return (
  <>
  <BrowserRouter>  
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
    </>
  );
  
}

export default App;
