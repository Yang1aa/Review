import React, { useCallback, useEffect, useState } from 'react'
import { Button } from 'antd';
import Stundent from './Components/Student';
import StudentContext from './store/StudentContext'
import useFetch from './Hooks/useFetch';
import style from './App.css'
export default function App() {
    const [Data, setData] = useState([]);
    const {
        data,
        loading,
        error,
        fetchData,
    } = useFetch({
        requestUrl: 'http://localhost:1337/api/students',
        requestType: 'get',
    });
    useEffect(() => {
        fetchData();
        setData(data);
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