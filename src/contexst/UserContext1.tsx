import React, { createContext, useState, useEffect } from 'react';
type UserData = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}
type UserContextType = {
    user: (UserData | null),
    setStet: React.Dispatch<React.SetStateAction<(UserData | null)>>
}
interface UserContextProviderProps {
    children: React.ReactNode;
}
export const UserContxt = createContext<UserContextType | null>(null)
export default function UserContext(props: UserContextProviderProps) {
    const [user, setStet] = useState<UserData | null>(null)
    useEffect(() => {
        const data = async () => {
            const data = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const jdata = await data.json()
            console.log(jdata)
            setStet(jdata)
        }
        data()
    }, [])

    return (
        <UserContxt.Provider value={{ user, setStet }}>
            {props.children}
        </UserContxt.Provider>
    )
}