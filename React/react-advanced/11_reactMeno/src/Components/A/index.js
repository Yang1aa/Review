import React, { useState } from 'react'
import B from '../B'
function A() {
    console.log("A组件渲染")
    const [count, setCount] = useState(0);
    const addHandler = () => {
        setCount((pre) => pre + 1);
    }
    return (
        <div>
            <h1>A组件：{count}</h1>
            <button onClick={addHandler}>+</button>
            <B />
        </div>
    )
}
export default React.memo(A);
