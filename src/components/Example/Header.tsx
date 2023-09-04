
import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContxt } from '../../contexst/UserContext1';

export default function Header() {
    const context = useContext(UserContxt)
    if (!context) return null
    const { user, setStet } = context
    const [flag, boolean] = useState<boolean>(false)
    return (

        <div>
            <h1>{user?.name} </h1>
            <button onClick={() => {
                if (flag) {
                    boolean(false)
                } else {
                    boolean(true)
                }
            }}>click me </button>
            {flag &&
            <ul> 
                <li >{user?.id}</li >
                <li>{user?.email}</li> 
                <li>{user?.phone}</li>
            </ul>}
        </div>
    )
}