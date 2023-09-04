import React, { createContext, useState } from 'react';
interface UserContextType {
    user: string | null,
    setUser: React.Dispatch<React.SetStateAction<UserData>>;
    }
interface UserContextProviderProps {
        children: React.ReactNode;
        }
type UserData = string
 
export const UserContxt = createContext<UserContextType | null>(null)

export default function User(props:UserContextProviderProps){
    const [user,setUser] = useState<UserData>("helwo world")
    return(
        <UserContxt.Provider value={{user,setUser}}>
            {props.children}
        </UserContxt.Provider>
    )
}