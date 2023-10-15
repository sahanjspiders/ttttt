import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Updatelogo from '../Components/Updatelogo.png'


function Update(){

  

  let {id} =useParams()
  let [data,setData] = useState( {
    Username:" ",Email:" ",Password:" ",img:" ",Age:" "
  } )
let navigator = useNavigate()

  let handleChange = (e)=>{
       setData({...data,[e.target.name]:e.target.value})
    }


  useEffect(()=>{
    getdata();
  },[])


    let getdata= async()=>{
    const result =await axios.get(`http://localhost:4008/data/${id}`) 
      console.log(result.data);
      setData(result.data);
    }

    let handleSubmite =(e)=>{
        e.preventDefault()

  

    console.log(data);

    // axios.put("http://localhost:4008/data",data)
    axios.put(`http://localhost:4008/data/${id}`,data)
    navigator('/')

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
               <input type="text"  placeholder="Enter Userame" name="Username"   onChange={handleChange} value={data.Username} /> 
               </div>
               <div className="Addfood">
               <label htmlFor=""> <h2>Email : </h2> </label>
               <input type="email" placeholder="Enter Email" name="Email"   onChange={handleChange} value={data.Email} />
               </div>
               <div className="Addfood">
               <label htmlFor=""> <h2> Password :</h2> </label>
               <input type="password" placeholder="Enter Password" name="Password"   onChange={handleChange} value={data.Password} />
               </div>
               <div className="Addfood">
               <label htmlFor=""> <h2>Image : </h2> </label>
               <input type="text" placeholder="add img" name="img"   onChange={handleChange} value={data.img} />
               </div>
               <div className="Addfood">
               <label htmlFor=""> <h2>Age : </h2> </label>
               <input type="text" placeholder="add Age" name="Age"   onChange={handleChange} value={data.Age} />
               </div>
                       
               <input type="submit" className="btn btn-outline-dark p-3" />
                </form>
            </div>
            <div className="mt-5">
                <img src={Updatelogo} alt=""  height="500px" width="500px"/>
            </div>
            </div>


                
{/*                 
                <form action="" onSubmit={handleSubmite} >
                <label htmlFor="">Username : </label>
               <input type="text"  placeholder="Enter Userame" name="Userame"  onChange={handleChange} value={data.Username} /> 
               <label htmlFor="">Email : </label>
               <input type="email" placeholder="Enter Email" name="Email" onChange={handleChange} value={data.Email} />
               <label htmlFor="">Password : </label>
               <input type="password" placeholder="Enter Password"   name="Password" onChange={handleChange} value={data.Password} />
               <input type="submit" />
                </form> */}
             
        </div>
    )
}

export default Update;

