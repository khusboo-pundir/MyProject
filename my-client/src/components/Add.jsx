import React,{useState} from "react";
import axios from 'axios';
import"./Add.css";

export default function Add(){
    const [empNo, setEmpNo]= useState("");
    const [empName, setEmpName]= useState("");
    const [empSal, setEmpSal]= useState("");

    async function addHandler(e)
    {
        e.preventDefault();
        try
        {
           const response = await axios.post('http://localhost:3002/api/employees',
            {empNo,empName,empSal});
            alert(response.data.message);
        }
        catch(err)
        {
            alert(err);
        }
    }
    return (
        <div className="main-container">
            <h2>Add Portal</h2> 
            <hr />
            <form onSubmit={addHandler}>
                <br/>
                <input
                type="text"
                placeholder="Emp No"
                value={empNo}
                onChange={(e)=> setEmpNo(e.target.value)}/>
                <br/><br/><br/>


                <input
                type="text"
                placeholder="Emp Name"
                value={empName}
                onChange={(e)=> setEmpName(e.target.value)}/>
                <br/><br/><br/>
              
                <input
                type="number"
                placeholder="Salary"
                value={empSal}
                onChange={(e)=> setEmpSal(e.target.value)}/>

                <br/><br/><br/>
                <input type="submit" value="Submit"/>


            </form>
        </div>
    )





}