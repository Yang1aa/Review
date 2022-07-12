import React from 'react'
import "./index.css"
import Date from "./Date/index.js"
import Span from "./Span/index.js"
export default function index(props) {
    const deleteHandle = () => {
        if (!window.confirm("你确定删除吗？"))
            return;
        props.getDetelteData(props.item.id);
    }
    return (
        <div>
            <li className="li" >
                <Date item={props.item} />
                <Span item={props.item} />
                <div className='delete' onClick={deleteHandle}>×</div>
            </li>
        </div>
    )
}
