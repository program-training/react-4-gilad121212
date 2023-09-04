import React, { createContext, useState } from 'react';
type UserContextType = {
    stet: stet,
    setStet: React.Dispatch<React.SetStateAction<stet>>;

}
interface UserContextProviderProps {
    children: React.ReactNode;
}
type stet = "dark" | "light"
export const UserContext = createContext<UserContextType | null>(null)
export default function UserC(props: UserContextProviderProps) {
    const [stet, setStet] = useState<stet>("dark")
    return (
        <UserContext.Provider value={{ stet, setStet }} >
            {props.children}
        </UserContext.Provider>
    )
}