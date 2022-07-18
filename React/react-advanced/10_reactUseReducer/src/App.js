import React, { useState } from 'react'
import A from './Components/Search'
export default function App() {
    console.log("App组件渲染了！");
    const [data, setData] = useState('')
    return (
        <div>
            <A setData={setData} />
        </div>
    )
}
