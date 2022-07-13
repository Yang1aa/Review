import React, { useState } from 'react'
import "./App.css"
import Item from "./Components/Item/index.js"
import Form from "./Components/Form/Index.js"


export default function App() {

    const [data, setData] = useState([
        {
            id: '1',
            month: '二月',
            day: '20',
            plan: '学习React',
            time: '40min',
        },
        {
            id: '2',
            month: '二月',
            day: '10',
            plan: '学习Vue',
            time: '20min',
        }, {
            id: '3',
            month: '三月',
            day: '11',
            plan: '学习Webpack',
            time: '40min',
        }, {
            id: '4',
            month: '三月',
            day: '15',
            plan: '学习JavaScript',
            time: '80min',
        },
    ])

    const getAddData = (obj) => {
        obj.id = `${data.length + 1}`;
        console.log(obj);
        setData([obj, ...data]);
    }
    const getDetelteData = (id) => {
        const arr = data.filter((item) => {
            return item.id !== id;
        });
        setData([...arr]);
    }

    return (
        <div className="div">
            <Form getAddData={getAddData} />
            <ul>
                {
                    data.length ? (data.map((item) => {
                        return (
                            <Item item={item} key={item.id} getDetelteData={getDetelteData} />
                        )
                    })) : (<li className="noPlan">没有 Todo List!</li>)
                }
            </ul>
        </div>
    )
}
