import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

function FectchData() {
    const [data, setData]=useState([]);

    const updateData=(data)=>{
        setData(data);
    }
    const style={
      "list-style-type":"none"
    }
    useEffect(
        ()=>{
         axios.get("https://randomuser.me/api?results=1")
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
        data.map(
          (d,index) =>
          
          <li key={index} style={style}>
            <div class="userDetails">
            <div class="userHeader">
               <h2>User: {d.login.username}</h2>
            </div>
            <div class="userBody">
             <h2>{d.name.title} {d.name.first} {d.name.last}</h2>
             <p>{d.email}</p>
             <br/>
             <h3>User for {d.registered.age} years</h3>
             <p>Age: {d.dob.age}</p>
             <p>Nationality: {d.nat}</p>
             <p>Phone: {d.phone}</p>
            </div>
            </div>
         </li>
          
         )
     }
    </div>
  )
}

export default FectchData