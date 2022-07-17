import React from 'react'
import Item from '../Item/Index'
import style from './index.module.css'

export default function Cover(props) {
    console.log("props.data", props.data)
    return (
        <>
            <div className={style.cover} />
            <div className={style.white} >
                <Item setSumPrice={props.setSumPrice} setCount={props.setCount} setMenuData={props.setMenuData} menuData={props.menuData} data={props.data} />
            </div>
        </>
    )
}
