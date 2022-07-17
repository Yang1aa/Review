import React, { useState } from 'react'
import Add from './Add'
import style from "./index.module.css"

export default function Item(props) {
    const [menuData, setMenuData] = useState([]);
    const setmenuData = (id, name, price, count) => {
        let obj = {
            id,
            name,
            price,
            count
        }
        console.log('obj', obj);
        let newObj = props.menuData.length ? [...props.menuData] : [...menuData];
        if (newObj.length) {
            let isEist = false;
            for (let i = 0; i < newObj.length; i++) {
                if (newObj[i].id === id) {
                    if (count === 0) {
                        newObj.splice(i, 1);
                        console.log(newObj)
                    }
                    else
                        newObj[i].count = count;
                    isEist = true;
                }
            }
            if (!isEist) {
                newObj.push(obj);
                isEist = false;
            }
        } else
            newObj.push(obj);
        newObj = newObj.sort((a, b) => {
            return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
        })
        console.log('newObj', newObj);
        setMenuData([...newObj]);
        props.setMenuData([...newObj]);
    }
    return (
        <div className={style.content}>
            {
                props.data.map((item) => {
                    return (
                        <div key={item.id} className={style.item}>
                            <img src={require(`../../../public/images/${item.id}.png`)} alt="图片加载失败" className={style.img} />
                            <div className={style.context}>
                                <div className={style.name}>{item.name}</div>
                                {!props.isBagShow && <div className={style.message}>{item.message}</div>}
                                <div className={style.bottom}>
                                    <span className={style.price}>{`￥${item.price}`}</span>
                                    <Add item={item} setPrice={props.setSumPrice} setCount={props.setCount} setmenuData={setmenuData} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
