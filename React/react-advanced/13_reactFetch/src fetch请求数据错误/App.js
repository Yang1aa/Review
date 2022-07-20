import React, { useEffect, useState } from 'react'
import Stundent from './Components/Student';
export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        fetch("http://localhost:1337/api/students")
            .then((res) => {
                if (res.ok) {
                    console.log('res', res);
                    return res.json();
                }
                setLoading(false);
                throw new Error("数据请求错误！")
            })
            .then((data) => {
                console.log('data', data);
                setData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                console.log("error", error.message);
            })
    }, [])
    return (
        <div>
            {(loading && !error) && <p>数据正在加载...</p>}
            {!loading && <Stundent data={data} />}
            {error && <p>{error}</p>}
        </div>
    )
}