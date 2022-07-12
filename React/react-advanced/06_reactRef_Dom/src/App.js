import React, { useRef, useState } from 'react'
import './App.css'

let temp;
export default function App() {
    console.log("App组件被加载~");

    const [count, setCount] = useState(0);
    // 处理点击事件
    const nativeClickHandle = () => {
        // 原生方法获取Dom
        let nativeDom = document.getElementById('header');
        nativeDom.innerHTML = 'hello native!';
    }
    // react提供的方法获取Dom,此方法只能在App函数里面，不能再去包裹其他函数或作用域
    
    // const h1Ref = { current: null };
    // console.log(h1Ref === temp);
    // temp = h1Ref;

    const ref = useRef();
    console.log(ref === temp);
    temp = ref;

    
    const reactClickHandle = () => {
        console.log(ref.current);
        ref.current.innerHTML = 'hello react!'
    }

    const addClickHandle = () => {
        setCount(pre => pre + 1);
    }
    return (
        <div id='content'>
            <h1 id='header' >hello Word!</h1>
            <div>
                <button onClick={nativeClickHandle}>Native click</button>
                <button onClick={reactClickHandle}>React click</button>
                <button onClick={addClickHandle}>{count}</button>
            </div>
        </div>
    )
}
