import React, { useState } from 'react'
import style from './index.module.css'
export default function Add(props) {
    const [count, setCount] = useState(props.item.count ? props.item.count : 0);
    const addHandle = () => {
        setCount((pre) => {
            return pre + 1;
        })
        props.setCount((pre) => pre + 1);
        props.setPrice((pre) => pre + props.item.price)
        props.setmenuData(props.item.id, props.item.name, props.item.price, count + 1);
    }
    const subHandle = () => {
        setCount((pre) => {
            return pre > 0 ? pre - 1 : 0;
        })
        props.setCount((pre) => pre - 1);
        props.setPrice((pre) => pre - props.item.price);
        props.item.count && props.item.count > 0 ? props.setmenuData(props.item.id, props.item.name, props.item.price, props.item.count - 1) : props.setmenuData(props.item.id, props.item.name, props.item.price, count - 1);
    }

    return (
        <div className={style.content}>
            <div className={`${props.item.count ? props.item.count > 0 ? style.sub : style.clear : count > 0 ? style.sub : style.clear}`} onClick={subHandle}>-</div>
            <div className={`${props.item.count ? props.item.count > 0 ? style.count : style.clear : count > 0 ? style.count : style.clear}`}>{props.item.count ? props.item.count : count}</div>
            <div className={style.add} onClick={addHandle}>+</div>
        </div>
    )
}
