import React, { useContext } from 'react';
import { UserContext } from '../../contexst/themeContext';
export default function Color() {
    const comtext = useContext(UserContext)
    if (!comtext) return null
    const { stet, setStet } = comtext
    if (stet === "dark") {
        return (
            <div>
                <h1 className='gilad'>gilad sinai</h1>
                <p className='gilad'>sinai gilad </p>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className='sinai'>gilad sinai</h1>
                <p className='sinai'>sinai gilad </p>
            </div>)
    }
}