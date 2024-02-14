import React from "react";
import { Routes,  Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Page from "./Components/Page";
import Menu from "./Components/Menu"
import Maincomp from "./Components/MainPage"

function App() {
  return (
   
    <div className="App">
        <Menu></Menu>
        <Routes>
              <Route path='/' element={<Maincomp/>}></Route>
            <Route path='contact' element ={<Contact/>}/>
            <Route path='about' element ={<About/>}/>
            <Route path='Page' element ={<Page/>}/>
        </Routes>
    

    
    </div>
    
  );
}

export default App;
