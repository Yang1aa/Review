import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.css'
export default function LinkMenu() {
    return (
        <div>
            <NavLink exact to='/' activeStyle={{ textDecoration: "underline" }}>To Home</NavLink>
            <br />
            <NavLink exact to='/about' activeStyle={{ textDecoration: "underline" }}>To About</NavLink>
        </div>
    )
}
