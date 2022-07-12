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

    const getData = (obj) => {
        obj.id = `${data.length + 1}`;
        console.log(obj);
        setData([...data, obj]);
    }

    return (
        <div className="div">
            <Form getData={getData} />
            <ul>
                {
                    data.map((item) => {
                        return (
                            <Item item={item} key={item.id} />
                        )
                    })
                }
            </ul>
        </div>
    )
}
