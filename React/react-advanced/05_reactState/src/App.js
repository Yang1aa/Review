import React, { useState } from 'react'
import "./App.css"
export default function App() {
    console.log("App组件渲染了")
    const [count, setCount] = useState(0)
    const [obj, setObj] = useState({ name: "孙悟空", age: "19" })
    const handleAdd = () => {
        // setTimeout(() => {
        //     setCount((pre) => pre + 1);
        //     // setCount(count + 1);
        // }, 1000)
        setCount(count + 1);
        setObj({ ...obj, name: "猪八戒" })
    }
    const handleSub = () => {
        setCount(count - 1);
    }
    return (
        <div id='content'>
            <h1>{count}--{obj.name}--{obj.age}</h1>
            <div>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSub}>-</button>
            </div>
        </div>
    )
}
