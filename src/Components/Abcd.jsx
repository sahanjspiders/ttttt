import React, { useEffect, useState } from 'react'

export default function Abcd() {
   
    let [name,SetName]=useState([])

let obj = {
    name:[
        {
            fname:"sahan"
        },{
            age:24
        },
        {
            work:"god"
        },

    ]
}



useEffect(()=>{
    SetName(obj.name)
},[])






// console.log(obj.name[1]);

  return (
    <div>Abcd
        <h1>{
            name.map((v)=>{
                     return(
                        <div>
                            <h1>{v.fname}</h1>
                                <h1>{v.age}</h1>
                            <h1>{v.work}</h1>
                        </div>
                          )
                     })
             }</h1>
    </div>
  )
}
