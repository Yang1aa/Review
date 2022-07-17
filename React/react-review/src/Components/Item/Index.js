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
    const [menuData, setMenuData] = useState([]);
    const arrSort = (l, r, arr) => {
        if (arr.length < 2 || l > r) {
            return;
        }
        let left = l;
        let right = r;
        let key = l;
        console.log('key', key)
        while (l < r) {
            while (+arr[r].id > arr[key].id && r > l) {
                r--;
            } while (+arr[l].id < arr[key].id && r > l) {
                l--;
            }
            let temp = arr[r];
            arr[r] = arr[l];
            arr[l] = temp;
        }
        let temp = arr[r];
        arr[r] = arr[left];
        arr[left] = temp;
        arrSort(left, r - 1, arr)
        arrSort(r + 1, right, arr)
    }
    const setmenuData = (id, name, price, count) => {
        let obj = {
            id,
            name,
            price,
            count
        }
        let newObj = [...menuData];
        if (newObj.length) {
            let isEist = false;
            for (let item of newObj) {
                if (item.id === id) {
                    item.count = count;
                    isEist = true;
                }
            }
            if (!isEist) {
                newObj.push(obj);
                isEist = false;
            }
        } else
            newObj.push(obj);
        console.log(newObj)
        arrSort(0, newObj.length - 1, newObj);
        setMenuData([...newObj]);
        props.setMenuData([...newObj]);
    }
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
