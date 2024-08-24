import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

function FectchData() {
    const [data, setData]=useState([]);

    const updateData=(data)=>{
        setData(data);
    }
    useEffect(
        ()=>{
         axios.get("https://randomuser.me/api?results=2")
         .then( response =>{
            console.log("data fetched is: "+response.data.results);
            updateData(response.data.results);
         })
         .catch ( err=>{
            
            console.log("something went wrong: "+err);
         })
        },
        []
    )
  return (
    <div>
     {
        data.map( (d,index) =><li key={index}><div>{d.name.first}</div><div>{d.name.last}</div><div>{d.email}</div></li>)
     }
    </div>
  )
}

export default FectchData