import React, { useState, useRef } from 'react'
import "./index.css"
export default function Index(props) {
    const dateRef = useRef();
    const planRef = useRef();
    const timeRef = useRef();
    const changeMonth = (month) => {
        console.log(month)
        switch (month) {
            case 1:
                return '一月';
            case 2:
                return '二月';
            case 3:
                return '三月';
            case 4:
                return '四月';
            case 5:
                return '五月';
            case 6:
                return '六月';
            case 7:
                return '七月';
            case 8:
                return '八月';
            case 9:
                return '九月';
            case 10:
                return '十月';
            case 11:
                return '十一月';
            case 12:
                return '十二月';
        }
    }
    const addHandle = (e) => {
        e.preventDefault();
        const date = dateRef.current.value;
        const plan = planRef.current.value;
        const time = timeRef.current.value;
        const day = date.slice(date.lastIndexOf('-') + 1);
        const month = +date.slice(date.indexOf('-') + 1, date.lastIndexOf('-'));
        if (!date && !plan && !time) {
            alert('有的选项没有填写！');
            return;
        }
        let obj = {
            month: changeMonth(month),
            day: day,
            plan: plan,
            time: time,
        }
        props.getData(obj);
    }
    return (
        <form>
            <div>
                <label htmlFor="date">日期</label>
                <input id='date' type={"date"} ref={dateRef} />
            </div>
            <div>
                <label htmlFor="text">计划</label>
                <input id='text' type={"text"} ref={planRef} />
            </div>
            <div>
                <label htmlFor="number">时长</label>
                <input id='number' type={"number"} ref={timeRef} />
            </div>
            <button onClick={addHandle} >添加</button>
        </form>
    )
}
