import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact"
import Skills from "./components/Skills/skills";
import Project from "./components/Project/project";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  // return (
  //   <div className="App">
  //     <Navbar/>
  //     <Home/>
  //     <Work/>
  //   </div>
  // );
  return (
    <div className="wrap">
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />

     
  </Routes>  
    </Router>
    </div>

  )
 
  

} 

export default App;
