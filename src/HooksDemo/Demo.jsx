/* eslint-disable no-unused-vars */

import { useState } from "react";


export const Demo = () => {
  const [data ,setdata] =useState({
    name: "" ,
    Email: "",
    password:""
  });
  const[submitdata , setsubmitdata] =useState(null)
  
  const onchangehandle = (event)=>{
    const name = event.target.name;
    const value =event.target.value;
    setdata( (prev)=>{
        return { ...prev, [name]:value}
    })
}

const submithandle = (event)=>{
    event.preventDefault()
    setsubmitdata(data);
}

  return (
   <>
  

   
   <div>
    Registration form
   </div>
   <form onSubmit={submithandle}>
   <input 
   type="text"
   placeholder="name"
   name="name"
   className="bg-gray-200" 
   value={data.name}

onChange={onchangehandle}
   />

<input 
   type="text"
   placeholder="Email"
   name="Email"
   className="bg-gray-200" 
   value={data.Email}
   onChange={onchangehandle}

   />

<input 
   type="password"
   placeholder="password"
   name="password" 
   className="bg-gray-200" 
   onChange={onchangehandle}

   value={data.password}
   />
   <button type="submit">Submit</button>
   </form>
   {submitdata&& (
   <p> My name is <strong>{submitdata.name}</strong>  and my Email id is  {submitdata.Email}</p>
   )}
   </>
  );
};

