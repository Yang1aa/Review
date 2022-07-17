import React, { useState } from 'react'
import style from './index.module.css'
export default function Add(props) {
    const [count, setCount] = useState(0);
    const addHandle = (e) => {
        setCount((pre) => {
            return pre + 1;
        })
        props.setCount((pre) => pre + 1);
        props.setPrice((pre) => pre + props.item.price)
        console.log("id", props.item.id)
        props.setmenuData(props.item.id, props.item.name, props.item.price, count + 1);
    }
    const subHandle = () => {
        setCount((pre) => {
            return pre > 0 ? pre - 1 : 0;
        })
        props.setCount((pre) => pre - 1);
        props.setPrice((pre) => pre - props.item.price)
        props.setmenuData(props.item.id, props.item.name, props.item.price, count - 1);
    }

    return (
        <div className={style.content}>
            <div className={`${count > 0 ? style.sub : style.clear}`} onClick={subHandle}>-</div>
            <div className={`${count > 0 ? style.count : style.clear}`}>{count}</div>
            <div className={style.add} onClick={addHandle}>+</div>
        </div>
    )
}
