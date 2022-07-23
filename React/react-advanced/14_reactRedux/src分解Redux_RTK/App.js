import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAge as setStundentAge, setName as setStundentName } from './Store/studentSlice';
import { setAddress as setSchoolAddress, setName as setSchoolName } from './Store/schoolSlice';
export default function App() {
    const { student, school } = useSelector(state => state);
    const dispatch = useDispatch();
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
            <button onClick={() => dispatch(setStundentName('沙和尚'))}>
                更改名字
            </button>
            <button onClick={() => dispatch(setStundentAge(28))}>
                更改年龄
            </button>
            <hr />
            <div>
                <p>
                    {school.name} ---
                    {school.address}
                </p>
            </div>
            <button onClick={() => dispatch(setSchoolName('高老庄中小'))}>修改学校名字</button>
            <button onClick={() => dispatch(setSchoolAddress('高老庄府前街19号'))}>修改学校地址</button>
        </>
    )
}
