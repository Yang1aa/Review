import React, { useCallback, useState, useContext } from "react";
import { Button } from "antd";
import StudentContext from "../../../store/StudentContext";
import style from "./index.module.css";

export default function StudentList(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ctx = useContext(StudentContext);
  const deleteFetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `http://localhost:1337/api/students/${props.item.id}`,
        {
          method: "delete",
        }
      );
      if (res.ok) {
        console.log("ttttttttttttttt");
        ctx.fetchData();
      } else {
        setError("删除出错！");
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
  const deleteHandle = () => {
    console.log(ctx.fetchData);
    deleteFetch();
  };
  return (
    <div className={style.content}>
      {!loading && (
        <>
          <div>
            <h1>姓名：{props.item.attributes.name}</h1>
          </div>
          <div>
            <h1>性别：{props.item.attributes.sex}</h1>
          </div>
          <div>
            <h1>年龄：{props.item.attributes.age}</h1>
          </div>
          <div>
            <h1>地址：{props.item.attributes.address}</h1>
          </div>
          <Button type="primary" onClick={deleteHandle}>
            删除
          </Button>
        </>
      )}
      {loading && !error && <p>数据正在删除...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
