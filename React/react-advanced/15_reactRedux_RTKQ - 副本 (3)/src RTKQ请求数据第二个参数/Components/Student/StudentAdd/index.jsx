import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useGetStudentsByIdQuery } from "../../../store/studentApi";
import style from "./index.module.css";

export default function StudentAdd(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addMessage, setAddMessage] = useState({
    name: "",
    age: "",
    sex: "男",
    address: "",
  });
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    props.setIsModify(false);
  };
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
  const commitHandle = () => {};
  const modifyHandle = () => {
    setIsModalVisible(true);
  };
  const cancleModifyHandle = () => {
    props.setIsModify(false);
  };
  const { data, isSuccess } = props.isModify
    ? useGetStudentsByIdQuery(props.data.id)
    : {};
  useEffect(() => {
    if (isSuccess) {
      setAddMessage(data.attributes);
    }
  }, [isSuccess]);
  return (
    <>
      {/* {!loading && ( */}
      <div className={style.content}>
        <div className={`${!props.isModify ? style.add : style.addModify}`}>
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
          <div className={style.width}>
            {!props.isModify && (
              <Button type="primary" onClick={commitHandle}>
                添加
              </Button>
            )}
            {props.isModify && (
              <div className={style.widthModify}>
                <Button type="primary" onClick={modifyHandle}>
                  确定
                </Button>
                <Button type="primary" onClick={cancleModifyHandle}>
                  取消
                </Button>
                <Modal
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  okText="确认"
                  cancelText="取消"
                >
                  <h3
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    确定修改吗？
                  </h3>
                </Modal>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* )} */}
      {/* {props.isModify ? (
        <>
          <div className={style.cover} />
          {loading && !error && <p>正在修改信息...</p>}
          {error && <p>修改信息错误！</p>}
        </>
      ) : (
        <>
          {loading && !error && <p>正在添加信息...</p>}
          {error && <p>添加信息错误！</p>}
        </>
      )} */}
    </>
  );
}
