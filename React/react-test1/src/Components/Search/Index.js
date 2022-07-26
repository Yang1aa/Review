import React from 'react';
import style from "./index.module.css"
export default function Search(props) {
  const enterHandle = (e) => {
    if (e.keyCode === 13) {
      console.log("回车");
      console.log(e.target.value)
      props.setName(e.target.value)
      e.target.value = "";
    }
  }
  return (
    <div className={style.content}>
      <input placeholder='🔍请输入关键字' className={style.input} onKeyDown={enterHandle} />
    </div>
  )
}
