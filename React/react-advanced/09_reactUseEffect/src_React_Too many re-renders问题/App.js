import React, { useState } from 'react'
import A from './Components/A'
export default function App() {
    console.log("App组件渲染了！");
    const [count, setCount] = useState(0)
    const clickHandle = () => {
        setCount(1);
    }
    return (
        <div>
            <A />
            {count}
            <button onClick={clickHandle}>click</button>
        </div>
    )
}
