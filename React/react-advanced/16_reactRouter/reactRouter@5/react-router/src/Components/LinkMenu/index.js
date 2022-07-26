import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.css'
export default function LinkMenu() {
    return (
        <div>
            <NavLink exact to='/' activeStyle={{ textDecoration: "underline" }}>To Home</NavLink>
            <br />
            <NavLink exact to='/about' activeStyle={{ textDecoration: "underline" }}>To About</NavLink>
            <br />
            <NavLink exact to='/student' activeStyle={{ textDecoration: "underline" }}>To Student</NavLink>
            <br />
            <NavLink exact to='/student/1' activeStyle={{ textDecoration: "underline" }}>孙悟空</NavLink>
            <br />
            <NavLink exact to='/student/2' activeStyle={{ textDecoration: "underline" }}>猪八戒</NavLink>
            <br />
            <NavLink exact to='/student/3' activeStyle={{ textDecoration: "underline" }}>沙和尚</NavLink>
            <br />
            <NavLink exact to='/student/4' activeStyle={{ textDecoration: "underline" }}>唐僧</NavLink>
        </div>
    )
}
