import React, { useState } from 'react'
import Stundent from './Components/Student';
export default function App() {
    const [data, setData] = useState([]);
    const addHandler = () => {
        fetch("http://localhost:1337/api/students")
            .then((res) => {
                console.log('res', res);
                return res.json();
            })
            .then((data) => {
                console.log('data', data);
                setData(data.data);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    return (
        <div>
            <button onClick={addHandler}>获取数据</button>
            <Stundent data={data} />
        </div>
    )
}