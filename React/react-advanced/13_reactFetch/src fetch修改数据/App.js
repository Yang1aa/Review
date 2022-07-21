import React, { useCallback, useEffect, useState } from 'react'
import { Button } from 'antd';
import Stundent from './Components/Student';
import StudentContext from './store/StudentContext'
import style from './App.css'
export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchData = useCallback(async () => {
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
    }, [])
    useEffect(() => {
        fetchData();
    }, [])
    const loadDataHandler = () => {
        fetchData();
    };
    return (
        <StudentContext.Provider value={{ fetchData }} >
            <Button type="primary" onClick={loadDataHandler}>点击获取信息</Button>
            {(loading && !error) && <p>数据正在加载...</p>}
            {!loading && <Stundent data={data} />}
            {error && <p>{error}</p>}
        </StudentContext.Provider>
    )
}