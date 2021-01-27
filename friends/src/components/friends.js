import React, { useState } from "react";
import axios from "axios"
import { axiosAuth } from "../axios/axios"


    export default function Friends () {
        const initialState = {
            friends:{
            name:"",
            email:"",
            age:""
        }
    }
        const [data,setData] = useState(initialState)
       
        const getData = () =>{
            axiosAuth();
            axios
            .get("/friends")
            .then(res=>{
                setData({friends:res.data})
            })
            .catch(err=>{
                console.log(err)
            })
        }

        getData();

        return (
            {
                data.map(friend => (
                  <div>
                      <p>{friend.name}</p>
                      <p>{friend.email}</p>
                      <p>{friend.age}</p>
                  </div>
                ))
              } 
    
        
        
      
        )
          
        }        
            
            
            
            
            
            
            
     

     
        
    