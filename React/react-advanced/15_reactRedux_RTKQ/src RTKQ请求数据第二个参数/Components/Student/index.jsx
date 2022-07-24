import React, { useState } from "react";
import { Button } from "antd";
import StudentList from "./StudentList";
import StudentAdd from "./StudentAdd";
import style from "./index.module.css";

export default function Stundent(props) {
  const { data } = props;
  const [isModify, setIsModify] = useState(false);
  return (
    <div>
      <>
        <div className={style.add}>
          <div className={style.width}>
            <h1>姓名</h1>
          </div>
          <div className={style.width}>
            <h1>性别</h1>
          </div>
          <div className={style.width}>
            <h1>年龄</h1>
          </div>
          <div className={style.width}>
            <h1>地址</h1>
          </div>
          <div className={style.width}>
            <Button type="primary">操作</Button>
          </div>
        </div>
        {data &&
          data.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <div className={style.content}>
                  <StudentList item={item} />
                </div>
              </React.Fragment>
            );
          })}
        <StudentAdd isModify={isModify} />
      </>
    </div>
  );
}
