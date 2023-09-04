import React, { useContext } from 'react';
import { UserContext } from '../../contexst/themeContext';

export default function ThemeSwitcher() {
    const comtext = useContext(UserContext)
    if (!comtext) return null
    const { stet, setStet } = comtext

    return (
        <div>
            <button
                onClick={() => {
                    if (stet === "dark") {
                        setStet("light")
                    } else {
                        setStet("dark")
                    }
                }}>
                click</button>
            <h1></h1>
        </div>
    )
}