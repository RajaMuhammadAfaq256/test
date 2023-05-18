import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import { Sun,Moon } from "react-feather";
export const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    let body = document.querySelector("body")
    useEffect(() => {
        const value = localStorage.getItem('theme')
        if (value) {
            body.setAttribute('data-bs-theme', 'dark')
            setIsDark(true)
        }
    },[body])

    return (
        <Toggle
            checked={isDark}
            className='custom-classname'
            onChange={({ target }) => {


                if (target.checked) {
                    localStorage.setItem('theme', 'dark')
                    body.setAttribute('data-bs-theme', 'dark')

                } else {
                    localStorage.removeItem('theme')
                    body.removeAttribute('data-bs-theme')
                }
                setIsDark(target.checked)
            }}
              icons={{ checked:<Moon size={10} color="white" /> , unchecked: <Sun size={10} color="#FDB813"/> }}
            aria-label="Dark mode toggle"
        />
    );
};