import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAge, setName } from './Store';
export default function App() {
    const student = useSelector(state => state.student)
    const dispatch = useDispatch();
    const nameChangeHandle = () => {
        dispatch(setName('沙和尚'))
    }
    const ageChangeHandle = () => {
        dispatch(setAge(28))
    }
    return (
        <>
            <div>
                <p>
                    {student.name} ---
                    {student.age} ---
                    {student.gender} ---
                    {student.address}
                </p>
            </div>
            <button onClick={nameChangeHandle}>
                更改名字
            </button>
            <button onClick={ageChangeHandle}>
                更改年龄
            </button>
        </>
    )
}
