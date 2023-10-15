import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './View.css'
import {Link, useNavigate} from 'react-router-dom';




export default function View() {

   let [view , setView] =  useState([])
   
let Navigation = useNavigate()


  useEffect( ()=>{
    handleView()
 },[ ] )

let handleView =async ()=>{
   const result =await axios.get("http://localhost:4008/data")
console.log(result.data);
      setView(result.data)
}

let handledelete=(id)=>{
    axios.delete(`http://localhost:4008/data/`+id)
    .then((res)=>{
      console.log(res.data)
      handleView(res.data);
    })
   
  }

  return (
    <div className='viewbox'>
  {
    view.map((value)=>{
      return(
        <>
        <div className='Viewdata p-5'>
           <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{width: "20rem" ,height:"28rem"}}>
     <img className="card-img-top" src={value.img} alt="Card image cap"/> 
         <div className="card-body">
         <h5 className="card-title">{value.Username}</h5>
         <h5 className="card-title">{value.password}</h5>
         <h5 className="card-title">{value.Email}</h5>
         <h5 className="card-title">{value.Age}</h5>


        {/* <p class="card-text">{value.}</p> */}
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <Link to={`/Update/${value.id}`}>
      <button className="btn btn-primary m-2">Edit</button>
      </Link>
    <button className="btn btn-danger m-3 " onClick={(e)=>handledelete(value.id)}>Delete</button>
  </div>
  </div>
  </div>
        </>
      )
    })
  }
    </div>
  )
}



// ========================


{/* <table class="table table-dark">
<thead>
  <tr>
    <th scope="col">index</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>
  {
      view.map((value,index)=>{
          return(
                    <tr>
    <th scope="row" key={index}>{index+1}</th>
    <td>{value.Username}</td>
    <td>{value.Email}</td>
    <td>{value.password}</td>
    <td>
    <Link to={`/Update/${value.id}`}>
      <button className="btn btn-primary">Edit</button>
      </Link>
    </td>
    <td>
    <button className="btn btn-danger " onClick={(e)=>handledelete(value.id)}>Delete</button>
    </td>
  </tr>
          )
      })
  }


</tbody>
</table> */}