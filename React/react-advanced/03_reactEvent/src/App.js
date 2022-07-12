import React from 'react'

export default function App() {
    const handleClick = (e) => {
        e.preventDefault();//阻止默认行为
        e.stopPropagation();//阻止冒泡
        alert("Click")
    }
    return (
        <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }} onClick={handleClick}>
            <button onClick={handleClick}>click me</button>
            <a href='https://www.baidu.com'>baidu</a>
        </div>
    )
}
