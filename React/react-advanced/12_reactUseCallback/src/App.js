import React, { useEffect } from 'react'

export default function App() {
    const [count, setCount] = useEffect(0);
    const addHandler = () => {
        setCount((pre) => pre + 1);
    }
    return (
        <div>
            <h1>App组件：{count}</h1>
            <button onClick={addHandler}>+</button>
            <A setCount={setCount}></A>
        </div>
    )
}
