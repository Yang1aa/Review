import React, { useState } from 'react'
import "./index.css"
export default function Index(props) {

    const [date, setDate] = useState('');
    const [plan, setPlan] = useState('');
    const [time, setTime] = useState('');
    const dateChangeHandle = (e) => {
        setDate(e.target.value);
    }
    const planChangeHandle = (e) => {
        setPlan(e.target.value);
    }
    const timeChangeHandle = (e) => {
        setTime(e.target.value);
    }
    const changeMonth = (month) => {
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
            default:
                return '十二月';
        }
    }
    const addHandle = (e) => {
        e.preventDefault();
        if (!date && !plan && !time) {
            alert('有的选项没有填写！');
            return;
        }
        const day = date.slice(date.lastIndexOf('-') + 1);
        const month = +date.slice(date.indexOf('-') + 1, date.lastIndexOf('-'));
        let obj = {
            month: changeMonth(month),
            day: day,
            plan: plan,
            time: time,
        }
        props.getData(obj);
        setDate("");
        setPlan("");
        setTime("");
    }
    return (
        <form>
            <div>
                <label htmlFor="date">日期</label>
                <input id='date' type={"date"} value={date} onChange={dateChangeHandle} />
            </div>
            <div>
                <label htmlFor="text">计划</label>
                <input id='text' type={"text"} value={plan} onChange={planChangeHandle} />
            </div>
            <div>
                <label htmlFor="number">时长</label>
                <input id='number' type={"number"} value={time} onChange={timeChangeHandle} />
            </div>
            <button onClick={addHandle} >添加</button>
        </form>
    )
}
