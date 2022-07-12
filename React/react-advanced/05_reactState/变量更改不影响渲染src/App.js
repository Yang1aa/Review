import React from 'react'
import "./App.css"
export default function App() {
    let count = 1;
    const handleAdd = () => {
        console.log(count);
        count++;
    }
    const handleSub = () => {
        console.log(count);
        count--;
    }
    return (
        <div id='content'>
            <h1>{count}</h1>
            <div>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSub}>-</button>
            </div>
        </div>
    )
}
