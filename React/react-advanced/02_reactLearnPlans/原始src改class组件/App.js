import React, { Component } from 'react'
import "./App.css"
import Item from "./Cmponents/Item/index.js"

export default class App extends Component {
    planArr = ['学习React', '学习Vue', '学习Webpack', '学习JavaScript'];
    render() {
        return (
            <div className="div">
                <ul>
                    {
                        this.planArr.map((item, index) => {
                            return (
                                <Item item={item} index={index} key={item} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
