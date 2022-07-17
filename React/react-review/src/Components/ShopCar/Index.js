import React, { useState } from 'react'
import style from './index.module.css'
export default function ShopCar(props) {
    const bagHandle = () => {
        console.log("bag")
        props.setIsBagShow((pre) => !pre);
    }
    const menuHandle = () => {
        console.log("menu")
        props.setIsMenuShow(true);
    }
    return (
        <div className={style.content}>
            <div className={style.bag}>
                <div className={`${!props.sumPrice ? style.none : style.num}`}>{props.count}</div>
                <img src={require("./image/bag.png")} alt="图片加载失败" onClick={bagHandle} />
                <span className={`${props.sumPrice && style.spanColor}`}>{props.sumPrice > 0 ? `￥${props.sumPrice}` : "未选择商品"}</span>
            </div>
            <div className={style.submit}>
                <div className={`${props.sumPrice && style.priceColor}`} onClick={menuHandle}>去结算</div>
            </div>
        </div >
    )
}
