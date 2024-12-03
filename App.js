import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from './Work'
import Addedit from './Addedit';
import View from './View';
import Login from './Login';
import Signup from './Signup';




function App() {
  return (
    <div >
  
    
    <Router>
 

    
      
      
      <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route  path='/Login' element={<Work/>} ></Route>
        <Route path='/add' element={<Addedit/>}></Route>
        <Route path='/update/:id' element={<Addedit/>}></Route>
        <Route path='/view/:id' element={<View/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        
      

        
        
      </Routes>
      
      
      
      </Router>
      </div>
      
  

      
      
  
  );
}

export default App;
