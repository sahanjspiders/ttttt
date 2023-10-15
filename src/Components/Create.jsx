import React from "react";
import { useRef } from "react";
import axios from 'axios';
import '../Style/Create.css'
import Employee from '../Components/Employee.png'
import { useNavigate } from "react-router-dom";

function Create(){
    
      let Username = useRef()
      let Email = useRef()
      let Password = useRef()
      let img = useRef()
let Age = useRef()
let navigation = useNavigate()


    let handleSubmite =(e)=>{
        e.preventDefault()

    let data = {
        Username:Username.current.value,
        Email:Email.current.value,
        Password:Password.current.value ,
        img:img.current.value  ,
        Age:Age.current.value
    }

    console.log(data);

    axios.post("http://localhost:4008/data",data)
    navigation('/')

    }   
    
    return(
        <div>

<div className="Create d-flex">
            <div  className="form">
                <div>
                <h1 className="p-3"> <b>  Create Data   </b>    </h1>
                </div>
               
                <form action="" onSubmit={handleSubmite} >
               <div className="Addfood"> 
               <label htmlFor=""> <h2>Username : </h2> </label>
               <input type="text"  placeholder="Enter Userame" ref={Username} required /> 
               </div>
               <div className="Addfood">
               <label htmlFor=""> <h2>Email : </h2> </label>
               <input type="email" placeholder="Enter Email" ref={Email}  required/>
               </div>
               <div className="Addfood">
               <label htmlFor=""> <h2> Password :</h2> </label>
               <input type="password" placeholder="Enter Password" ref={Password}  required/>
               </div>
               <div className="Addfood">
               <label htmlFor=""> <h2>Image : </h2> </label>
               <input type="text" placeholder="add img" ref={img} required />
               </div>
               <div className="Addfood">
               <label htmlFor=""> <h2>Age : </h2> </label>
               <input type="text" placeholder="add Age" ref={Age}  required/>
               </div>
                       
               <input type="submit" className="btn btn-outline-dark p-3" />
                </form>
            </div>
            <div>
                <img src={Employee} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Create;

