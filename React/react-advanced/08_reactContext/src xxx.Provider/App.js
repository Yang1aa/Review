import React from 'react'
import ContextData from './Store/ContextData/ContextData'
import A from './Components/A'
import B from './Components/B'
import C from './Components/C'
export default function App() {

    return (
        <div>
            <A />
            <ContextData.Provider value={{ name: '猪八戒', age: 28 }}>
                <B />
                <ContextData.Provider value={{ name: '沙和尚', age: 38 }}>
                    <C />
                </ContextData.Provider>
            </ContextData.Provider>
        </div>
    )
}
