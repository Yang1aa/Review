import React, { useEffect, useState } from 'react'
import Stundent from './Components/Student';
export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch('http://localhost:1337/api/students');
                if (res.ok) {
                    const data = await res.json();
                    console.log('data', data)
                    setData(data.data);
                } else {
                    throw new Error('数据加载失败！');
                }
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            {(loading && !error) && <p>数据正在加载...</p>}
            {!loading && <Stundent data={data} />}
            {error && <p>{error}</p>}
        </div>
    )
}