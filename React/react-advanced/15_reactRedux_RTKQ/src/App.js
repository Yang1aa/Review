import React from 'react'
import { useGetStudentsQuery } from './store/studentApi';
import { Button } from 'antd';
import Stundent from './Components/Student';
import style from './App.css'
export default function App() {
    const { data, isLoading, isError, refetch } = useGetStudentsQuery(null, {
        // useQuery可以接收一个对象作为第二个参数，通过该对象可以对请求进行配置
        // selectFromResult: result => {
        //     if (result.data) {
        //         result.data = result.data.filter(item => item.attributes.age < 18);
        //     }
        //     return result;
        // }, // 用来指定useQuery返回的结果
        // pollingInterval:500 // 设置轮询的间隔，单位毫秒 如果为0则表示不轮询
        // skip:true, // 设置是否跳过当前请求，默认false
        // refetchOnMountOrArgChange: false, // 设置是否每次都重新加载数据 false正常使用缓存，true每次都重载数据  数字，数据缓存的时间（秒）
        refetchOnFocus: true, // 是否在重新获取焦点时重载数据
        refetchOnReconnect: true, // 是否在重新连接后重载数据
    });
    return (
        <>
            <Button type="primary" onClick={() => { refetch() }}>点击获取数据</Button>
            {(isLoading && !isError) && <p>数据正在加载...</p>}
            {!isLoading && <Stundent data={data} />}
            {isError && <p>数据加载错误...</p>}
        </>
    )
}