import React from 'react'
import "./App.css"
import Item from "./Components/Item/index.js"


export default function App() {
    const planArr = ['学习React', '学习Vue', '学习Webpack', '学习JavaScript'];
    return (
        <div className="div">
            <ul>
                {
                    planArr.map((item, index) => {
                        return (
                            <Item item={item} index={index} key={item} />
                        )
                    })
                }
            </ul>
        </div>
    )
}
