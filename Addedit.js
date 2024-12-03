import React ,{useState,useEffect}from 'react'
import{useNavigate,Link, useParams} from "react-router-dom"
import "./Addedit.css"
import axios from "axios"



const initialstate={
  title:"",
  description:"",
  duedate:"",
  status:''

}

const Addedit=() =>{
  const[state,setState]=useState(initialstate)
  const { title, description, duedate, status } = state;


  const navigate=useNavigate();

  const {id}=useParams();
  useEffect(()=>{
    axios.get(`http://localhost:8081/api/get/${id}`).then((resp=>setState({...resp.data[0]})))

  },[id])
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!title || !description ||!duedate||!status){
      alert("please provide value into each field")
    }
    else{
      if(!id){
      axios.post('http://localhost:8081/api/post',{
        title,description,duedate,status
      }).then(()=>{
          setState(initialstate);
      }).catch((err)=>alert(err.response.data))
      alert("Task added successfully")
    }
    else{
      axios.put(`http://localhost:8081/api/update/${id}`,{
        title,description,duedate,status
      }).then(()=>{
          setState(initialstate);
      }).catch((err)=>alert(err.response.data))
      alert(" successfully updated")
    }
      navigate('/Login')
    }
  }
  const handleInputchange=(e)=>{
    const {name,value}=e.target;
    setState({...state,[name]:value})
  }


  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
        type="text"
        value={title || ""}
        name="title"
        id="title"
        placeholder="Enter title"
        onChange={handleInputchange}>

        </input>
        <label htmlFor='description'>Description</label>
        <input
        type="text"
        id="description"
        name="description"
        value={description || ""}
        placeholder="Description"
        onChange={handleInputchange}></input>
         <label htmlFor='duedate'>Duedate</label>
        <input
        type="text"
        name="duedate"
        id="duedate"
        value={duedate || ""}
        placeholder="Enter date"
        onChange={handleInputchange}></input>
         <label htmlFor='status'>Status</label>
        <input
        type="text"
        name="status"
        id="status"
        value={status || ""}
        onChange={handleInputchange}></input>
        
        <input type="submit"value={id ? "Update":"Save"}></input>
        
        
        <Link to='/'>
        <input type="button" value="Go Back"></input>
        </Link>

      </form>
      
      
      </div>
  )
}

export default Addedit