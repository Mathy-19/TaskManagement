import React ,{useState,useEffect} from 'react'
import { Link, useParams }from "react-router-dom"
import axios from'axios'
import "./View.css"
function View() {
    const[user,setUser]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8081/api/get/${id}`).then((resp=>setUser({...resp.data[0]})))
    
      },[id])

  return (

    <div class="one">
        {console.log(user)}
        <div class="card"></div>
        <div class="card-header">
            <p>Task Details</p>
        </div>
        <div class="container">
            <strong>ID:</strong>
            <span>{id}</span>
            <br/>
            <br/>
            <strong>Title:</strong>
            <span>{user.Title}</span>
            <br/>
            <br/>
            <strong>Description:</strong>
            <span>{user.Description}</span>
            <br/>
            <br/>
            <strong>Duedate:</strong>
            <span>{user.Duedate}</span>
            <br/>
            <br/>
            <strong>Status:</strong>
            <span>{user.Status}</span>
            <br/>
            <br/>
            <Link to="/">
            <button class="btn btn-editable">Go Back</button>
            </Link>
            
            
            
            



        </div>



    </div>
  )
}

export default View