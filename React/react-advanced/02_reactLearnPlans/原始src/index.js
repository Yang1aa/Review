import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css"

const div = <div className="div">
    <ul>
        <li className="li">
            <div className='date'>
                <div>7月</div>
                <div>22日</div>
            </div>
            <div className='plan'>
                <span>学习React</span>
                <span>40min</span>
            </div>
        </li>
        <li className="li">
            <div className='date'>
                <div>7月</div>
                <div>22日</div>
            </div>
            <div className='plan'>
                <span>学习React</span>
                <span>40min</span>
            </div>
        </li>
        <li className="li">
            <div className='date'>
                <div>7月</div>
                <div>22日</div>
            </div>
            <div className='plan'>
                <span>学习React</span>
                <span>40min</span>
            </div>
        </li>
        <li className="li">
            <div className='date'>
                <div>7月</div>
                <div>22日</div>
            </div>
            <div className='plan'>
                <span>学习React</span>
                <span>40min</span>
            </div>
        </li>
    </ul>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);