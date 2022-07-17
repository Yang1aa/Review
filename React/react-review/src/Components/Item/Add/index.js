import React, { useEffect, useState } from 'react'
import style from './index.module.css'
export default function Add(props) {
    const [count, setCount] = useState(props.item.count ? props.item.count : 0);
    const addHandle = () => {
        setCount((pre) => {
            return pre + 1;
        })
        props.setCount((pre) => pre + 1);
        props.setPrice((pre) => pre + props.item.price)
        props.item.count && props.item.count > 0 ? props.setmenuData(props.item.id, props.item.name, props.item.price, props.item.count + 1) : props.setmenuData(props.item.id, props.item.name, props.item.price, count + 1);
    }
    const subHandle = () => {
        setCount((pre) => {
            return pre > 0 ? pre - 1 : 0;
        })
        props.setCount((pre) => pre - 1);
        props.setPrice((pre) => pre - props.item.price);
        props.item.count && props.item.count > 0 ? props.setmenuData(props.item.id, props.item.name, props.item.price, props.item.count - 1) : props.setmenuData(props.item.id, props.item.name, props.item.price, count - 1);
    }
    useEffect(() => {
        const data = [...props.menuData];
        let isEist = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === props.item.id) {
                console.log('props.item.count ', data[i].count)
                setCount(data[i].count);
                isEist = true;
            }
        }
        if (!isEist) {
            setCount(0);
            isEist = false;
        }
        console.log("useEffect")
    }, [props.isBagShow, count])
    return (
        <div className={style.content}>
            <div className={`${props.item.count ? props.item.count > 0 ? style.sub : style.clear : count > 0 ? style.sub : style.clear}`} onClick={subHandle}>-</div>
            <div className={`
            ${props.item.count ? (props.item.count > 0 ? style.count : style.clear) : (count > 0 ? style.count : style.clear)}`}>
                {props.isBagShow ? props.item.count : count}</div>
            <div className={style.add} onClick={addHandle}>+</div>
        </div >
    )
}
