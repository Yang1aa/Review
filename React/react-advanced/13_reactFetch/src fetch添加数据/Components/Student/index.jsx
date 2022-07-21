import React, { useCallback, useContext, useState } from "react";
import { Button } from "antd";

import StudentList from "./StundentList";
import StudentContext from "../../store/StudentContext";

import style from "./index.module.css";

export default function Stundent(props) {
  const { data } = props;
  const ctx = useContext(StudentContext);
  const [addMessage, setAddMessage] = useState({
    name: "",
    age: "",
    sex: "男",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nameHandle = (e) => {
    setAddMessage((pre) => {
      return { ...pre, name: e.target.value };
    });
  };
  const sexHandle = (e) => {
    setAddMessage((pre) => {
      return { ...pre, sex: e.target.value };
    });
  };
  const ageHandle = (e) => {
    setAddMessage((pre) => {
      return { ...pre, age: +e.target.value };
    });
  };
  const addressHandle = (e) => {
    setAddMessage((pre) => {
      return { ...pre, address: e.target.value };
    });
  };
  const addData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("addMessage", addMessage);
      const res = await fetch("http://localhost:1337/api/students", {
        method: "post",
        body: JSON.stringify({
          data: addMessage,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        setLoading(false);
      } else {
        throw new Error("添加出错");
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [addMessage]);
  const commitHandle = () => {
    addData();
    ctx.fetchData();
  };
  return (
    <div>
      {!loading && !error && (
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
            <Button type="primary">操作</Button>
          </div>
          {data.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <div className={style.content}>
                  <StudentList item={item} />
                </div>
              </React.Fragment>
            );
          })}
          <div className={style.add}>
            <div className={style.width}>
              <input
                type="text"
                placeholder="请输入姓名"
                className={style.input}
                onChange={nameHandle}
                value={addMessage.name}
              />
            </div>
            <div className={style.width}>
              <select
                className={style.select}
                onChange={sexHandle}
                value={addMessage.sex}
              >
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>
            <div className={style.width}>
              <input
                type="number"
                placeholder="请输入年龄"
                className={style.input}
                onChange={ageHandle}
                value={addMessage.age}
              />
            </div>
            <div className={style.width}>
              <input
                type="text"
                placeholder="请输入地址"
                className={style.input}
                onChange={addressHandle}
                value={addMessage.address}
              />
            </div>
            <Button type="primary" onClick={commitHandle}>
              添加
            </Button>
          </div>
        </>
      )}
      {loading && !error && <p>正在添加信息...</p>}
      {error && <p>添加信息错误！</p>}
    </div>
  );
}
