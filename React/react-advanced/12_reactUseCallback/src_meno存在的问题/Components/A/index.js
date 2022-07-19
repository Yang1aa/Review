import React, { useState } from 'react'
import B from '../B'
function A(props) {
    console.log("A组件渲染")
    const [count, setCount] = useState(0);
    const addHandler = () => {
        setCount((pre) => pre + 1);
    }
    return (
        <div>
            <h1>A组件：{count}</h1>
            <button onClick={addHandler}>+</button>
            <button onClick={props.addHandler}>添加App中count</button>
            <B />
        </div>
    )
}
export default React.memo(A);
