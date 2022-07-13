import React, { useState } from 'react'
import "./Index.css"
export default function Index(props) {
    let arr = [...props.year];
    const [year, setYear] = useState(arr)
    const yearChangeHandle = (e) => {
        if (e.target.value === "全部显示")
            props.getShowYearData(year);
        else
            props.getShowYearData(e.target.value);
    }
    return (
        <div className='search'>
            请选择年份：
            <select onChange={yearChangeHandle} className="select">
                <option key='all'>全部显示</option>
                {
                    year.map((item) => {
                        return (<option key={item}>{item}</option>);
                    })
                }
            </select>
        </div>
    )
}
