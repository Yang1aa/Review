import React, { useEffect, useState } from 'react'
import Stundent from './Components/Student';
export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:1337/api/students")
            .then((res) => {
                console.log('res', res);
                return res.json();
            })
            .then((data) => {
                console.log('data', data);
                setData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }, [])
    return (
        <div>
            {loading && <p>数据正在加载...</p>}
            {!loading && <Stundent data={data} />}
        </div>
    )
}