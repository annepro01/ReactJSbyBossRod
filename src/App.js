import React from "react";

import {Routes,Route} from 'react-router-dom'

/*Components */
import Home from './Home'
import Todolist from './Todolist'




const App = () => {
  return (
    <div className="app-main">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/todolist" element={<Todolist/>} />
      </Routes> 
    </div>
  )
};

export default App