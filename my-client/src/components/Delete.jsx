import axios from "axios";
import { useState } from "react";                                   
import "./Delete.css";
export function Delete(){
    const[id,setid] = useState("");

    async function deleteData(e)
    {
        e.preventDefault();
        try
        {
          const response = await axios.delete(`https://backend-ivg6.onrender.com/api/employees/${id}`);
          alert(response.data.message);
        }
        catch(err)
        {
            alert("Record Not Found:"+err);
        }
    };
    return(
        <div className="main-container">
            <h2>Delete Record By ID</h2>
            <hr/>
            <form onSubmit=  {deleteData}>
                <input type ="Text" placeholder="Enter id" value={id} onChange={e =>setid(e.target.value)}required/>
                <br/> <br/>
                <button type= "submit">Remove Data</button>
            </form>
        </div>
    )
}
