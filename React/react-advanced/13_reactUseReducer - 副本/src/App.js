import React, { useReducer } from 'react'

// 为了避免reducer会重复创建，通常reducer会定义到组件的外部
const countReducer = (state, action) => {
    switch (action.type) {
        case 'Add':
            return state + 1;
        case 'Sub':
            return state - 1;
        default:
            return state;
    }
}
export default function App() {
    const [count, countDispatch] = useReducer(countReducer, 1)
    const addHandler = () => {
        // 增加count的值
        countDispatch({ type: 'Add' });
    };

    const subHandler = () => {
        // 增加count的值
        countDispatch({ type: 'Sub' });
    };
    return (
        <div>
            <button onClick={addHandler}>+</button>
            {count}
            <button onClick={subHandler}>-</button>
        </div>
    )
}