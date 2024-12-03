import React , {useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import "./Task.css";
import axios from 'axios';


function Work() {
  const[data,setData]=useState([]);
  const loadData=async()=>{
    const response=await axios.get('http://localhost:8081/api/get');
    console.log(response.data)
    setData(response.data)

  };
  
  useEffect(()=>{
    loadData();
  },[])
  const deleteTask=(id)=>{
    if(window.confirm("want to delete task?")){
      axios.delete(`http://localhost:8081/api/remove/${id}`)
      alert(" successfully deleted")
      setTimeout(()=>loadData(),500)
    }
  }
  

  return (
    <div class="firstdiv" >
      <Link to="/add">
      <button class="btn1">Add </button>
      </Link>
      
      <table class="styled-table">
        <thead >
          <tr >
            <th class="head1">ID</th>
            <th class="head2">Title</th>
            <th class="head3">Description</th>
            <th class="head4">DueDate</th>
            <th  class="head5">Status</th>

            
          </tr>
        </thead>
        <tbody>
          {console.log(data,"Success")}
          {data.map((item,index)=>{
            return (
              <tr key={item.id}>

                <th scope="row">{index+1}</th>
                <td >{item.Title}</td>
                <td >{item.Description}</td>
                <td >{item.Duedate}</td>
                <td >{item.Status}</td>
                <td  >
                  <Link to={`/update/${item.id}`}>

                  <button class="btn btn-edit">Edit</button>
                  </Link>
                  <button class="btn-delete" onClick={()=>deleteTask(item.id)}>Delete</button>
                   <Link to={`/view/${item.id}`}>


                  <button class="btn btn-view">View</button>
                  </Link>


                </td>
              </tr>
            )
          })}
          </tbody>
          </table>
      
      
      </div>
  )
  
}

export default Work;
