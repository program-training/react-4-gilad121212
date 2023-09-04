import React, { useContext } from 'react';
import {UserContxt} from '../../contexst/UserContext';

export default function N(){
    const context = useContext(UserContxt)
    if(!context) return null;
    const {user,setUser} = context

    return(
        <div>{user}</div>
    )
}