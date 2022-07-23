import React, { useEffect, useState } from 'react'
import { useGetStudentsQuery } from './store/studentApi';
import { Button } from 'antd';
import Stundent from './Components/Student';
import style from './App.css'
export default function App() {
    const { data, isLoading, isError } = useGetStudentsQuery();
    return (
        <>
            {(isLoading && !isError) && <p>数据正在加载...</p>}
            {!isLoading && <Stundent data={data} />}
            {isError && <p>数据加载错误...</p>}
        </>
    )
}