import React from "react";
import {NavLink,Routes,Route} from "react-router-dom";
import Add from './Add';
import {FindAll } from "./FindAll";
 import{Find} from './Find';
 import { Delete } from './Delete';
import { Update } from './Update';
import'./App.css';

 function App(){
    return(
        <div>
            <h1> Employee Management</h1>
        <nav className="nav" >
        <NavLink to={"/Add"} >Add</NavLink>
        <NavLink to={"/Update"}  >Update</NavLink>
        <NavLink to={"/Delete" } >Delete</NavLink>
        <NavLink to={"/Find"} >Find</NavLink>
        <NavLink to={"/FindAll"} >FindAll</NavLink>
        </nav>
    

      
        <Routes>
        <Route path="/Add" element={<Add />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Find" element={<Find/>} />
        <Route path="/FindAll" element={<FindAll />} />
        </Routes>

        <footer>
            <h3>@2025 My Website. All rights reserved</h3>
        </footer>
        </div>
        
    )
}

export default App;