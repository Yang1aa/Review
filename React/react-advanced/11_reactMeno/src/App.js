import React, { useState } from 'react'
import A from './Components/A'
export default function App() {
    console.log('App组件渲染')
    const [count, setCount] = useState(0);
    const addHandler = () => {
        setCount((pre) => pre + 1);
    }
    return (
        <div>
            <h1>App组件：{count}</h1>
            <button onClick={addHandler}>+</button>
            <A></A>
        </div>
    )
}
