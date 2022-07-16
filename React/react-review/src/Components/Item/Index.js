import React, { useState } from 'react'
import Add from './Add'
import style from "./index.module.css"

export default function Item(props) {
    const [data, setData] = useState([
        {
            id: '1',
            name: '汉堡1',
            price: 11,
            message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
        },
        {
            id: '2',
            name: '汉堡2',
            price: 12,
            message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
        },
        {
            id: '3',
            name: '汉堡3',
            price: 13,
            message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
        },
        {
            id: '4',
            name: '汉堡4',
            price: 14,
            message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
        },
        {
            id: '5',
            name: '汉堡5',
            price: 15,
            message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
        },
        {
            id: '6',
            name: '汉堡6',
            price: 16,
            message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
        }
    ])
    return (
        <div className={style.content}>
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className={style.item}>
                            <img src={require(`../../../public/images/${item.id}.png`)} alt="图片加载失败" className={style.img} />
                            <div className={style.context}>
                                <div className={style.name}>{item.name}</div>
                                <div className={style.message}>{item.message}</div>
                                <div className={style.bottom}>
                                    <span className={style.price}>{`￥${item.price}`}</span>
                                    <Add price={item.price} setPrice={props.setSumPrice} setCount={props.setCount} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
