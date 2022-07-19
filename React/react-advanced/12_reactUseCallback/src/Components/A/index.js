import React from 'react'
import B from '../B'
export default function A(props) {
    const [count, setCount] = useEffect(0);
    const addHandler = () => {
        setCount((pre) => pre + 1);
    }
    return (
        <div>
            <h1>A组件：{count}</h1>
            <button onClick={addHandler}>+</button>
            <button onClick={props.setCount((pre) => pre + 1)}>添加App中count</button>
            <B />
        </div>
    )
}
