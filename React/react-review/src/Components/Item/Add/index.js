import React, { useState } from 'react'
import style from './index.module.css'
export default function Add(props) {
    const [count, setCount] = useState(0);
    const addHandle = () => {
        setCount((pre) => {
            return pre + 1;
        })
        props.setCount((pre) => pre + 1);
        props.setPrice((pre) => pre + props.price)
    }
    const subHandle = () => {
        setCount((pre) => {
            return pre > 0 ? pre - 1 : 0;
        })
        props.setCount((pre) => pre - 1);
        props.setPrice((pre) => pre - props.price)
    }
    return (
        <div className={style.content}>
            <div className={`${count > 0 ? style.sub : style.clear}`} onClick={subHandle}>-</div>
            <div className={`${count > 0 ? style.count : style.clear}`}>{count}</div>
            <div className={style.add} onClick={addHandle}>+</div>
        </div>
    )
}
