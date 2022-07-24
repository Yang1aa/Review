import React, { useState } from "react";
import { Button, Modal } from "antd";
import {
  useDeleteStudentMutation,
} from "../../../store/studentApi";
import StudentAdd from "../StudentAdd/index";
import style from "./index.module.css";

export default function StudentList(props) {
  // 返回一个数组，数组第一个值为触发器，第二个值为结果对象
  const [delteStundent, res] = useDeleteStudentMutation();
  const { isLoading, isError } = res;
  console.log("res", res);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
    delteStundent(props.item.id);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const deleteHandle = () => {
    setIsModalVisible(true);
  };
  const modifyHandle = () => {
    setIsModify(true);
  };
  return (
    <>
      {!isModify && (
        <div className={style.content}>
          {!isLoading && (
            <>
              <div>
                <h2>{props.item.attributes.name}</h2>
              </div>
              <div>
                <h2>{props.item.attributes.sex}</h2>
              </div>
              <div>
                <h2>{props.item.attributes.age}</h2>
              </div>
              <div>
                <h2>{props.item.attributes.address}</h2>
              </div>
              <div className={style.width}>
                <Button type="primary" onClick={deleteHandle} danger>
                  删除
                </Button>
                <Button type="primary" onClick={modifyHandle}>
                  修改
                </Button>
              </div>
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
                  确定删除吗？
                </h3>
              </Modal>
            </>
          )}
          {isLoading && !isError && !isModify && <p>数据正在删除...</p>}
          {isError && !isModify && <p>{isError}</p>}
        </div>
      )}
      {isModify && (
        <StudentAdd
          isModify={isModify}
          setIsModify={setIsModify}
          data={props.item}
        />
      )}
    </>
  );
}
