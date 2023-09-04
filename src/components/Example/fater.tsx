import N from "./comp1"
import React, { useContext } from 'react';
import {UserContxt} from '../../contexst/UserContext';
import  { createContext, useState } from 'react';

export default function E(){
    const [value,setValue] = useState<string>("gilad")
    const context = useContext(UserContxt)
    return(
        <div>
            <input value={value} type="text" onChange={(e)=>{
                setValue(e.target.value)
            }} />
              
            <button onClick={()=>{
                  if(!context) return null;
                  const {user,setUser} = context
                    setUser(value)
                 console.log(value)
                
            } } >click me</button>
        <N></N>
        </div>
        
    )
}